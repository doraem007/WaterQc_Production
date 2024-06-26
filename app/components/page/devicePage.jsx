'use client'

import MapDevice from "../maps/mapDevice";
import Navbar from "../common/navbar";
import { MdOutlineWaterDrop } from "react-icons/md";
import { useState } from "react"

export default function DevicePage({ orgId, stationId }) {
    const [day, setDay] = useState(1)

    return (
        <section className="w-full overflow-y-auto">
            <Navbar orgId={orgId} stationId={stationId}>บันทึก</Navbar>
            <div className="px-4 my-2 sm:mt-5 flex">
                <div className="flex items-center justify-center bg-gray-200 px-4 sm:px-16 rounded-lg relative shadow">
                    <div className="text-xl font-bold">{`สถานีผลิตน้ำที่ ${stationId}`}</div>
                    <MdOutlineWaterDrop className="text-5xl hidden sm:flex absolute left-[0px] top-[0px] text-sky-500" />
                </div>
                <select value={day} className="select select-bordered w-full max-w-[100px] font-bold ml-4 lg:mb-0" onChange={(event) => setDay(event.target.value)}>
                    <option value={1}>1 วัน</option>
                    <option value={7}>7 วัน</option>
                    <option value={30}>30 วัน</option>
                </select>
            </div>
            <MapDevice day={day} orgId={orgId} stationId={stationId} />
        </section>
    );
}