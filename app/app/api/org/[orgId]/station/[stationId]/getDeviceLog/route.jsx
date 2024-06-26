import { createConnection } from "@/lib/db";
import dayjs from 'dayjs';

export async function GET(request, { params }) {
  try {
    const connection = await createConnection();
    const orgId = Number(params.orgId);
    const stationId = Number(params.stationId);

    const { searchParams } = new URL(request.url);
    const deviceId = searchParams.get('deviceId') || 1;
    const sort = searchParams.get('sort') || "desc";
    const day = searchParams.get('day') || 1;

    const startDate = dayjs().subtract(day, 'day').toISOString();

    const deviceLogQuery = `
      SELECT 
        DeviceLog.id,
        DeviceLog.deviceId,
        DeviceLog.updatedAt,
        DeviceLog.sensorValue,
        Device.deviceName,
        Device.maxControlValue,
        Device.minControlValue,
        DeviceType.maxStdValue,
        DeviceType.minStdValue
      FROM Organization
      JOIN Station ON Organization.id = Station.orgId
      JOIN Device ON Station.id = Device.stationId
      JOIN DeviceLog ON Device.id = DeviceLog.deviceId
      JOIN DeviceType ON Device.deviceTypeId = DeviceType.id
      WHERE Organization.id = ? 
        AND Station.id = ?
        AND Device.id = ?
        AND DeviceLog.updatedAt >= ? 
      ORDER BY DeviceLog.updatedAt ${sort.toUpperCase()}
    `;

    const deviceLogParams = [orgId, stationId, deviceId, startDate];
    const [deviceLogResult] = await connection.execute(deviceLogQuery, deviceLogParams);

    const deviceQuery = `
      SELECT 
        Device.id, 
        Device.deviceName
      FROM Device 
      WHERE Device.stationId = ?
    `;
    const deviceParams = [stationId];
    const [deviceResult] = await connection.execute(deviceQuery, deviceParams);

    const [stationResult] = await connection.execute(`
      SELECT 
        Station.id AS stationId,
        Station.description,
        Station.stationName
      FROM Organization
      JOIN Station ON Organization.id = Station.orgId
      WHERE Organization.id = ? AND Station.id = ? 
      `, [orgId, stationId]);

    const response = {
      station: stationResult[0],
      deviceLogs: deviceLogResult,
      devices: deviceResult
    };

    return Response.json(response);
  } catch (error) {
    console.log(error);
    return Response.json(error);
  }
}
