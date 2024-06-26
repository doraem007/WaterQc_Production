'use client'

import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import Profile from "../user/profile"
import { useSession } from 'next-auth/react'

import { RiHome2Line } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { TbMessageCog } from "react-icons/tb";


export default function Sidebar({ orgId, stationId }) {
    const { data: session } = useSession()

    const isAdmin = session?.user?.role === "ADMIN";

    return (
        <aside className="hidden bg-gradient-to-br from-blue-500 to-blue-400 w-72 shadow-md lg:block">
            <div className="p-4">

                <Profile />

                <ul className="menu bg-base-200 w-56 rounded-box font-bold">
                    <Link href={`/org/${orgId || 1}/station`}>
                        <li>
                            <button>
                                <span className="text-xl"><RiHome2Line /></span>
                                <span>หน้าแรก</span>
                            </button>
                        </li>
                    </Link>
                    <Link href={`/org/${orgId || 1}/station/${stationId || 1}/log`}>
                        <li>
                            <button>
                                <span className="text-xl"><IoMdTime /></span>
                                <span>บันทึก</span>
                            </button>
                        </li>
                    </Link>
                    <li>
                        <details>
                            <summary><span className="text-xl"><TbMessageCog /></span>ตั้งค่า</summary>
                            <ul>
                                <Link href={`/org/${orgId || 1}/station/${stationId || 1}/settingdevice`}>
                                    <li><button>ตั้งค่าอุปกรณ์</button></li>
                                </Link>
                                <Link href={`/org/${orgId || 1}/station/${stationId || 1}/settingstation`}>
                                    <li><button>ตั้งค่าสถานี</button></li>
                                </Link>
                                <Link href={`/org/${orgId || 1}/station/${stationId || 1}/settingline`}>
                                    <li><button>ตั้งค่าไลน์</button></li>
                                </Link>
                                <Link href={`/org/${orgId || 1}/station/${stationId || 1}/adduser`}>
                                    <li><button>เพิ่มผู้ใช้</button></li>
                                </Link>
                            </ul>
                        </details>
                    </li>

                </ul>

                {isAdmin && (
                    <Link href="/adduser">
                        <button className="btn btn bg-green-500 hover:bg-green-600 border-none w-full flex items-center justify-between text-white mt-4">
                            <span>เพิ่มผู้ใช้</span>
                            <span className="text-xl"><IoMdAdd /></span>
                        </button>
                    </Link>
                )}

            </div>
        </aside>
    );
}

