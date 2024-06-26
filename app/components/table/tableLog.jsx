'use client'

import { formatTime } from "@/lib/formatTime";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { MdOutlineWaterDrop } from "react-icons/md";

export default function TableLog({ orgId, stationId }) {
    const [station, setStation] = useState({})
    const [deviceLog, setDeviceLog] = useState([]);
    const [device, setDevice] = useState([]);

    const [deviceId, setDeviceId] = useState(1)
    const [sort, setSort] = useState("")
    const [day, setDay] = useState(1)

    const fetchData = useCallback(async () => {
        try {
            const query = new URLSearchParams({ deviceId, sort, day }).toString();
            const res = await axios.get(`/api/org/${orgId}/station/${stationId}/getDeviceLog?${query}`);
            setStation(res.data.station);
            setDeviceLog(res.data.deviceLogs);
            setDevice(res.data.devices);
        } catch (error) {
            console.log(error);
        }
    }, [orgId, stationId, deviceId, sort, day]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>

            <div className="flex flex-col  xl:items-center px-4 my-4 xl:flex-row">
                <div className="flex justify-center items-center w-full md:max-w-xs">
                    <div className="bg-gray-300 relative py-[4px] px-4 sm:px-14  w-[80%] sm:w-full sm:max-w-xs rounded-t-lg sm:rounded-box text-center shadow sm:mr-4">
                        <MdOutlineWaterDrop className="text-6xl hidden sm:flex absolute left-[-5px] top-[0px] text-sky-500" />
                        <div className="text-xl font-bold">{station.stationName || "สถานีผลิตน้ำที่"}</div>
                        <div className="text-xl font-bold">{station.description || "เทศบาล"}</div>
                    </div>
                </div>
                <div className=" flex sm:flex-row flex-col w-full mt-2 xl:mt-0 items-center">

                    <select value={deviceId} className="select select-bordered w-[80%] sm:max-w-[250px] sm:mr-4 font-bold  lg:mb-0" onChange={(event) => setDeviceId(event.target.value)}>
                        {device.map((item) => (
                            <option key={item.id} value={item.id}>{item.deviceName}</option>
                        ))}
                    </select>
                    <select value={sort} className="select select-bordered w-[80%] my-2 sm:my-0 sm:max-w-[250px] sm:mr-4 font-bold  lg:mb-0" onChange={(event) => setSort(event.target.value)}>
                        <option value="desc">ใหม่สุด</option>
                        <option value="asc">เก่าสุด</option>
                    </select>

                    <select value={day} className="select select-bordered w-full max-w-[100px] font-bold " onChange={(event) => setDay(Number(event.target.value))}>
                        <option value={1}>1 วัน</option>
                        <option value={7}>7 วัน</option>
                        <option value={30}>30 วัน</option>
                    </select>
                </div>


            </div>

            <div className="px-2 lg:px-4">
                <div className="overflow-y-auto max-w-full h-[488px] px-2 rounded-md bg-gradient-to-br from-blue-100 to-blue-200 shadow-md">
                    <table className="table table-xs text-center font-bold lg:table-md">
                        <thead>
                            <tr className="border-black border-2-b">
                                <th>วันเวลา</th>
                                <th>ค่าของอุปกรณ์</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deviceLog.map((item) => (
                                <tr key={item.id} className="border-gray-300 border-2-b">
                                    <td>{formatTime(item.updatedAt)}</td>
                                    <td>{item.sensorValue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}

// useEffect(() => {
//     const endOffset = currentPage * itemsPerPage + itemsPerPage;
//     setCurrentItems(data.slice(currentPage * itemsPerPage, endOffset));
//     setPageCount(Math.ceil(data.length / itemsPerPage));
// }, [data, currentPage]);

// const handleNextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, pageCount - 1));
// };

// const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
// };

// const [currentItems, setCurrentItems] = useState([]);
// const [pageCount, setPageCount] = useState(0);
// const [currentPage, setCurrentPage] = useState(0);
// const itemsPerPage = 10;

{/* <div className="mt-4 mb-4 lg:mb-0 text-center">
                <div className="join">
                    <button onClick={handlePreviousPage} className="join-item btn" disabled={currentPage === 0}>«</button>
                    <button className="join-item btn">{currentPage + 1}</button>
                    <button onClick={handleNextPage} className="join-item btn" disabled={currentPage === pageCount - 1}>»</button>
                </div>
            </div> */}