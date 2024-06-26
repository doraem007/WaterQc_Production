'use client'

import { useState, useEffect } from "react";
import axios from "axios";

export default function Role() {
    const [data, setData] = useState([])
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("USER")
    const [org, setOrg] = useState("")

    async function fetchData() {
        try {
            const res = await axios.get('/api/org');
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    function handleAddUser(event) {
        event.preventDefault()
        console.log(username)
        console.log(email)
        console.log(password)
        console.log(role)
        console.log(org)
    }

    return (
        <div>
            <div><button className='btn text-lg btn-warning text-white mb-4 no-animation cursor-auto hover:bg-warning hover:border-transparent px-6'>Role</button></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <form onSubmit={handleAddUser} className="bg-base-100 rounded-lg p-4 sm:p-8">
                    <div><button className='btn text-lg bg-gray-200 hover:bg-gray-200 mb-8 no-animation cursor-auto hover:border-transparent px-6'>เพิ่มผู้ใช้</button></div>
                    <div>

                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input
                                type="text"
                                className="grow pr-2 w-full"
                                placeholder="ชื่อผู้ใช้"
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input
                                type="text"
                                className="grow pr-2 w-full"
                                placeholder="อีเมล"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                type="password"
                                className="grow pr-2 w-full"
                                placeholder="รหัสผ่าน"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </label>

                        <div className="flex justify-between max-w-[300px]">
                            <div className="mr-4">
                                <div className="text-md font-bold mb-2">บทบาท</div>
                                <select
                                    value={role}
                                    className="select select-bordered w-full max-w-[200px] font-bold"
                                    onChange={(event) => setRole(event.target.value)}
                                >
                                    <option value="USER">User</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                            </div>
                            <div>
                                <div className="text-md font-bold mb-2">ตำบล</div>
                                <select
                                    value={1}
                                    className="select select-bordered w-full max-w-[200px] font-bold"
                                    onChange={(event) => setOrg(event.target.value)}
                                >
                                    {data.map((item) => (
                                        <option key={item.id} value={item.id}>{item.orgName}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center items-center mt-8 mb-6">
                        <button type="submit" className="btn btn-success text-white w-full">
                            เพิ่ม
                        </button>
                    </div>
                </form>

                <form onSubmit={handleAddUser} className="bg-base-100 rounded-lg p-4 sm:p-8">
                    <div><button className='btn text-lg bg-gray-200 hover:bg-gray-200  mb-8 no-animation cursor-auto hover:border-transparent'>เพิ่มตำบล/สถานผลิตน้ำ</button></div>
                    <div>
                       
                    </div>
                </form>

            </div>

        </div>
    );
}