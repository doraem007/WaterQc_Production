'use client'

import { useState, useEffect } from "react";
import axios from "axios";

export default function TableUser() {
    const [user, setUser] = useState([]);

    async function fetchData() {
        try {
            const res = await axios.get('/api/getUsers');
            setUser(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="px-2 pt-2 lg:px-4 lg:pt-0">
                <div className="overflow-y-auto max-w-full h-[488px] px-2 rounded-md bg-gradient-to-br from-sky-50 to-sky-100 shadow-md">
                    <table className="table table-xs text-center font-bold lg:table-md">
                        <thead>
                            <tr className="border-black border-2-b">
                                <th>ชื่อผู้ใช้</th>
                                <th>อีเมล</th>
                                <th>บทบาท</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((item) => (
                                <tr key={item.id} className="border-gray-300 border-2-b">
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
