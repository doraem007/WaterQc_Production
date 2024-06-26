import { createConnection } from "@/lib/db";
import bcrypt from 'bcrypt';

export async function POST(request) {
    try {
        const connection = await createConnection();
        const { name, email, password, role, orgId } = await request.json()
        const hash = await bcrypt.hash(password, 10)

        const newUser = {
            name,
            email,
            password: hash,
            role,
            orgId
        }

        const [result] = await connection.query('INSERT INTO User SET ?', newUser)
        
        return Response.json({
            message: "เพิ่มผู้ใช้สำเร็จ"
        })
    } catch (error) {
        console.log(error)
        return Response.json(error)
    }
}