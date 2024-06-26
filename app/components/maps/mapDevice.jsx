'use client'

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Link from 'next/link';

import Temp from "../chart/temp";
import Ph from "../chart/ph";
import Tds from "../chart/tds";
import Flow from "../chart/flow";
import Chlorine from "../chart/chlorine";
import Turbidity from "../chart/turbidity";

export default function MapDevice({ day, orgId, stationId }) {
    const [data, setData] = useState([])

    const fetchData = useCallback(async () => {
        try {
            const query = new URLSearchParams({ day }).toString();
            const res = await axios.get(`/api/org/${orgId}/station/${stationId}/getDevice?${query}`);
            setData(res.data)
        } catch (error) {
            console.error(error);
        }
    }, [day, orgId, stationId]);

    useEffect(() => {
        fetchData();
    }, [fetchData, day])

    const sortedData = data.sort((a, b) => a.displayOrder - b.displayOrder);

    return (
        <div className="grid-cols-1 sm:grid-cols-2 grid p-2 xl:grid-cols-3 lg:p-4 gap-4">
            {sortedData.map((item) => (
                <Link key={item.id} href={`device/${item.id}`}>
                    <div className='bg-gradient-to-br from-blue-300 to-blue-400 hover:bg-blue-500 hover:scale-102.5 hover:duration-150 rounded-xl shadow-md p-5 rounded-box font-semibold h-full'>

                        <div className="ml-2 font-bold text-2xl my-4 text-white">
                            {item.deviceName}
                        </div>

                        <div className="bg-gray-50 flex justify-center items-center rounded-xl py-2 h-[280px] relative">
                            <div className='flex items-center mb-2'>

                                {item.typeName === "Temp" ? (
                                    <Temp current={item.currentValue} />
                                ) : item.typeName === "pH" ? (
                                    <Ph current={item.currentValue} />
                                ) : item.typeName === "TDS" ? (
                                    <Tds current={item.currentValue} />
                                ) : item.typeName === "Turbidity" ? (
                                    <Turbidity current={item.currentValue} />
                                ) : item.typeName === "Chlorine" ? (
                                    <Chlorine current={item.currentValue} />
                                ) : item.typeName === "Flow" ? (
                                    <Flow current={item.currentValue} />
                                ) : null}

                            </div>
                            <span className="text-gray-600 text-lg font-semibold absolute bottom-[6px] right-[8px]">
                                ค่าปัจจุบัน {item.currentValue}
                            </span>
                        </div>
                        <div className="bg-gray-50 py-2 rounded-xl grid grid-cols-2 mt-4">


                            <div className='p-2 border-r-2 border-gray-400'>
                                <div className='text-center mt-2  font-bold text-lg'>ค่าต่ำสุด</div>
                                <div className='text-center mt-3 font-bold text-lg text-amber-600'>{item.min}</div>
                            </div>
                            <div className='p-2'>
                                <div className='text-center mt-2 font-bold text-lg'>ค่าสูงสุด</div>
                                <div className='text-center mt-3 font-bold text-lg text-amber-600'>{item.max}</div>
                            </div>

                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}