'use client'

import { useSession } from 'next-auth/react'
import { MdOutlineMailOutline } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";

export default function Profile() {
    const { data: session } = useSession()

    return (
        <section>
            {session?.user ? (
                <div className='bg-base-200 mb-4 rounded-box font-bold'>
                    <h1 className="pt-2 px-4"><span className="text-2xl">{session.user.role}</span></h1>
                    <ul className="menu">
                        <li disabled>
                            <a>
                                <span className="text-xl"><MdOutlineMailOutline /></span>
                                <span>{session.user.email}</span>
                            </a>
                        </li>
                        <li disabled>
                            <a>
                                <span className="text-xl"><VscOrganization /></span>
                                <span>เทสบาลตำบลโพนสา</span>
                            </a>
                        </li>
                    </ul>
                </div>
            ) : null}
        </section>
    );
}