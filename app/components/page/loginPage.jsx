'use client'

import { MdOutlineWaterDrop } from "react-icons/md"
import { useState, useEffect } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { alertBadMessage } from '@/lib/alertMessage'
import { alertGoodMessage } from '@/lib/alertMessage'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [org, setOrg] = useState([]);
    const [selectedOrg, setSelectedOrg] = useState(1);
    const router = useRouter()

    async function fetchData() {
        try {
            const res = await axios.get(`api/org`);
            setOrg(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const res = await signIn('credentials', {
                redirect: false,
                email,
                password,
            })
            if (res.error) {
                console.error(res.error)
                alertBadMessage(res.error)
            } else {
                alertGoodMessage("เข้าสู่ระบบสำเร็จ")
                router.push(`org/${selectedOrg}/station`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='sm:bg-sky-50 bg-full sm:shadow-md sm:rounded-xl py-8 px-12 sm:w-96 w-4/5 relative'>
            <form onSubmit={handleSubmit}>

                <h1 className='text-3xl font-semibold text-center z-10 text-white sm:text-black'>
                    เข้าสู่ระบบ
                </h1>

                <label className="input input-bordered flex items-center gap-2 mt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input name="email" type="text" className="grow" placeholder="อีเมล"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input name="password" type="password" className="grow" placeholder="รหัสผ่าน"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>

                <select value={selectedOrg} className="select select-bordered w-full max-w-xs font-bold mt-4" onChange={(event) => setSelectedOrg(event.target.value)}>
                    <option value="" disabled>เลือกตำบล</option>
                    {org.map((item) => (
                        <option key={item.id} value={item.id}>{item.orgName}</option>
                    ))}
                </select>

                <div className="text-center mt-10">
                    <button className="btn btn-success w-32 sm:w-44 text-white text-lg" type="submit">เข้าสู่ระบบ</button>
                </div>

            </form>
            <MdOutlineWaterDrop className="text-[100px] absolute right-0 top-0 text-sky-400 rotate-[45deg] z-0 cursor-pointer hidden sm:flex" />
        </div>
    );
}