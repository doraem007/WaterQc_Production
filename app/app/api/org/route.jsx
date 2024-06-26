import { createConnection } from "@/lib/db";

export async function GET() {
    try {
        const connection = await createConnection();

        const [result] = await connection.execute('SELECT id, orgName FROM Organization');

        return Response.json(result)
    } catch (error) {
        console.log(error)
        return Response.json(error)
    }
}