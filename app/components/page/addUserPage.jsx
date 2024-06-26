'use client'

import Navbar from "../common/navbar";
import FormRegister from "../user/formRegister";
import TableUser from "../table/tableUser"
import { useState } from "react";

export default function AddUserPage() {
    const [openForm, setOpenform] = useState(false);

    return (
        <section className="w-full overflow-y-auto">
            <Navbar>เพิ่มผู้ใช้</Navbar>
            <div className="px-4 my-4">
                <button className="btn btn-success text-white" onClick={() => setOpenform(!openForm)}>Add User +</button>
            </div>
            <TableUser />
            {openForm ? <FormRegister setOpenform={setOpenform} /> : null}
        </section>
    );
}