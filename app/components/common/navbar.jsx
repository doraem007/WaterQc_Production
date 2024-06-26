'use client'

import Link from 'next/link'
import { RiHome2Line } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { TbMessageCog } from "react-icons/tb";
import { useSession, signOut } from 'next-auth/react'

export default function Navbar({ children, orgId, stationId }) {
  const { status } = useSession()

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl no-animation cursor-auto hover:bg-transparent	">{children}</a>
      </div>
      <div className="flex-none">

        <div className="dropdown dropdown-end block mr-4 lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-square btn-ghost h">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block sm:w-5 sm:h-5 w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">

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
        </div>

        {status === 'authenticated' ? (
          <button className='btn btn-error text-white' onClick={() => signOut({ callbackUrl: '/' })}>
            ออกจากระบบ
          </button>
        ) : (
          <button className='btn btn-success text-white'>
            <Link href="/">
              เข้าสู่ระบบ
            </Link>
          </button>
        )}

      </div>
    </div>
  );
} 