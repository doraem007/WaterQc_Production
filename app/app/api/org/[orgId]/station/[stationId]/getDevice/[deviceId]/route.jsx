import { createConnection } from "@/lib/db";
import { formatISO, subDays } from 'date-fns';

export async function GET(request, { params }) {
    try {
        const connection = await createConnection();
        const orgId = Number(params.orgId);
        const stationId = Number(params.stationId);
        const deviceId = Number(params.deviceId);

        const { searchParams } = new URL(request.url);
        const daysParam = searchParams.get('day') || '1';
        const days = daysParam.split(',').map(Number);

        const today = new Date();

        const dateConditions = [];
        const placeholders = [];

        days.forEach(day => {
            for (let i = 1; i <= day; i++) {
                const pastDate = formatISO(subDays(today, i));
                placeholders.push(pastDate, pastDate, pastDate);
                dateConditions.push(`
                    MAX(CASE WHEN DeviceLog.updatedAt >= ? THEN DeviceLog.sensorValue ELSE NULL END) AS max_${i}day,
                    MIN(CASE WHEN DeviceLog.updatedAt >= ? THEN DeviceLog.sensorValue ELSE NULL END) AS min_${i}day,
                    AVG(CASE WHEN DeviceLog.updatedAt >= ? THEN DeviceLog.sensorValue ELSE NULL END) AS avg_${i}day
                `);
            }
        });

        const dateConditionsSQL = dateConditions.join(',');

        const [rows] = await connection.execute(
            `SELECT
                Device.deviceName,
                Device.minControlValue,
                Device.maxControlValue,
                DeviceType.typeName,
                DeviceType.unitType,
                DeviceType.maxStdValue,
                DeviceType.minStdValue,
                Device.currentValue,
                ${dateConditionsSQL}
            FROM Organization
            JOIN Station ON Organization.id = Station.orgId
            JOIN Device ON Station.id = Device.stationId
            JOIN DeviceType ON Device.deviceTypeId = DeviceType.id
            LEFT JOIN DeviceLog ON Device.id = DeviceLog.deviceId
            WHERE Station.orgId = ? AND Device.stationId = ? AND Device.id = ?
            GROUP BY Device.deviceName, Device.minControlValue, Device.maxControlValue, DeviceType.typeName, DeviceType.unitType, DeviceType.maxStdValue, DeviceType.minStdValue, Device.currentValue`,
            [...placeholders, orgId, stationId, deviceId]
        );


        const formattedResult = rows.map(row => {
            const formattedRow = {
                deviceName: row.deviceName,
                minControlValue: row.minControlValue,
                maxControlValue: row.maxControlValue,
                typeName: row.typeName,
                unitType: row.unitType,
                maxStdValue: row.maxStdValue,
                minStdValue: row.minStdValue,
                currentValue: row.currentValue,
                max: null,
                min: null,
                avg: null
            };

            days.forEach(day => {
                const pastDates = [];
                for (let i = 1; i <= day; i++) {
                    const pastDate = subDays(today, i);
                    pastDates.push({
                        label: formatISO(pastDate),
                        max: row[`max_${i}day`],
                        min: row[`min_${i}day`],
                        avg: row[`avg_${i}day`]
                    });

                    formattedRow.max = formattedRow.max !== null ? Math.max(formattedRow.max, row[`max_${i}day`]) : row[`max_${i}day`];
                    formattedRow.min = formattedRow.min !== null ? Math.min(formattedRow.min, row[`min_${i}day`]) : row[`min_${i}day`];
                    formattedRow.avg = formattedRow.avg !== null ? (formattedRow.avg + row[`avg_${i}day`]) / 2 : row[`avg_${i}day`];
                }
                formattedRow[`day`] = pastDates;
            });

            return formattedRow;
        });

        return Response.json(formattedResult);
    } catch (error) {
        console.log(error);
        return Response.json(error)
    }
}
