import { createConnection } from "@/lib/db";
import { formatISO, subDays } from 'date-fns';

export async function GET(request, { params }) {
    try {
        const connection = await createConnection();
        const orgId = Number(params.orgId);

        const { searchParams } = new URL(request.url);
        const daysParam = searchParams.get('day') || '1';

        const days = daysParam.split(',').map(Number);

        const today = new Date();

        const dateConditions = [];
        const placeholders = [];

        days.forEach(day => {
            const pastDate = formatISO(subDays(today, day));
            placeholders.push(pastDate, pastDate);
            dateConditions.push(`
                MAX(CASE WHEN DeviceLog.updatedAt >= ? THEN DeviceLog.sensorValue ELSE NULL END) AS max${day}Days,
                MIN(CASE WHEN DeviceLog.updatedAt >= ? THEN DeviceLog.sensorValue ELSE NULL END) AS min${day}Days
            `);
        });

        const dateConditionsSQL = dateConditions.join(',');

        const [result] = await connection.execute(`
            SELECT 
                Organization.id AS orgId, 
                Organization.orgName, 
                Organization.description, 
                Station.id AS stationId,
                Station.stationName,
                Device.id AS deviceId,
                Device.deviceName,
                Device.displayOrder,
                DeviceType.typeName,
                DeviceType.maxStdValue,
                DeviceType.minStdValue,
                Device.currentValue,
                ${dateConditionsSQL}
            FROM Organization
            JOIN Station ON Organization.id = Station.orgId
            LEFT JOIN Device ON Station.id = Device.stationId
            LEFT JOIN DeviceType ON Device.deviceTypeId = DeviceType.id
            LEFT JOIN (
                SELECT 
                    deviceId,
                    MAX(sensorValue) AS maxSensorValue,
                    MIN(sensorValue) AS minSensorValue
                FROM DeviceLog
                WHERE updatedAt >= ?
                GROUP BY deviceId
            ) AS DeviceLogFiltered ON Device.id = DeviceLogFiltered.deviceId
            LEFT JOIN DeviceLog ON Device.id = DeviceLog.deviceId
            WHERE Organization.id = ?
            GROUP BY Organization.id, Station.id, Device.id
        `, [...placeholders, today.toISOString(), orgId]);

        const organizations = {};

        result.forEach(row => {
            if (!organizations[row.orgId]) {
                organizations[row.orgId] = {
                    id: row.orgId,
                    orgName: row.orgName,
                    description: row.description,
                    stations: {}
                };
            }

            if (!organizations[row.orgId].stations[row.stationId]) {
                organizations[row.orgId].stations[row.stationId] = {
                    id: row.stationId,
                    stationName: row.stationName,
                    devices: []
                };
            }

            if (row.deviceId) {
                const device = {
                    id: row.deviceId,
                    deviceName: row.deviceName,
                    typeName: row.typeName,
                    maxStdValue: row.maxStdValue,
                    minStdValue: row.minStdValue,
                    currentValue: row.currentValue,
                    displayOrder: row.displayOrder,
                    max1Day: row.max1Days,
                    min1Day: row.min1Days,
                };
                organizations[row.orgId].stations[row.stationId].devices.push(device);
            }
        });

        const response = Object.values(organizations).map(org => ({
            ...org,
            stations: Object.values(org.stations)
        }));

        return Response.json(response);
    } catch (error) {
        console.log(error);
        return Response.json(error);
    }
}
