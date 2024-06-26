import { createConnection } from "@/lib/db";
import { formatISO, subDays } from 'date-fns';

export async function GET(request, { params }) {
  try {
    const connection = await createConnection()
    const orgId = Number(params.orgId)
    const stationId = Number(params.stationId)

    const { searchParams } = new URL(request.url)
    const daysParam = searchParams.get('day') || '1'
    const days = daysParam.split(',').map(Number)

    const today = new Date()

    const dateConditions = []
    const placeholders = []

    days.forEach(day => {
      const pastDate = formatISO(subDays(today, day))
      placeholders.push(pastDate, pastDate)
      dateConditions.push(`
        MAX(CASE WHEN DeviceLog.updatedAt >= ? THEN DeviceLog.sensorValue ELSE NULL END) AS max,
        MIN(CASE WHEN DeviceLog.updatedAt >= ? THEN DeviceLog.sensorValue ELSE NULL END) AS min
      `)
    })

    const dateConditionsSQL = dateConditions.join(',')

    const [result] = await connection.execute(`
      SELECT
        Device.id, 
        Device.deviceName, 
        DeviceType.typeName, 
        Device.currentValue,
        Device.displayOrder,
        ${dateConditionsSQL}
      FROM Organization
      JOIN Station ON Organization.id = Station.orgId
      JOIN Device ON Station.id = Device.stationId
      JOIN DeviceType ON Device.deviceTypeId = DeviceType.id
      LEFT JOIN DeviceLog ON Device.id = DeviceLog.deviceId
      WHERE Station.orgId = ? AND Device.stationId = ?
      GROUP BY Device.id, DeviceType.typeName, Device.currentValue
    `, [...placeholders, orgId, stationId])

    return Response.json(result)
  } catch (error) {
    console.log(error)
    return Response.json(error)
  }
}