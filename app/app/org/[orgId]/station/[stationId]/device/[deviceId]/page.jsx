'use client'

import MainLayout from "@/components/layout/mainLayout";
import Navbar from "@/components/common/navbar";
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { formatTime } from "@/lib/formatTime";
import { MdOutlineWaterDrop } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import BoxPlot from '@/components/chart/BoxPlot';

import Temp from "@/components/chart/temp";
import Ph from "@/components/chart/ph";
import Tds from "@/components/chart/tds";
import Flow from "@/components/chart/flow";
import Chlorine from "@/components/chart/chlorine";
import Turbidity from "@/components/chart/turbidity";

export default function Page({ params }) {
    const [data, setData] = useState({});
    const [day, setDay] = useState(1);
    const [dataDay, setDataDay] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const query = new URLSearchParams({ day }).toString();
            const res = await axios.get(`/api/org/${params.orgId}/station/${params.stationId}/getDevice/${params.deviceId}?${query}`);
            setData(res.data[0])
            setDataDay(res.data[0].day)
        } catch (error) {
            console.error(error);
        }
    }, [day, params.orgId, params.stationId, params.deviceId]);

    useEffect(() => {
        fetchData();
    }, [fetchData, day]);

    const options = {
        plotOptions: {
            boxPlot: {
                colors: {
                    upper: "#4299E1",
                    lower: "#90CDF4"
                },
                bar: {
                    columnWidth: "40%"
                }
            }
        }
    };

    const series = [
        {
            data: dataDay.map(dayData => ({
                x: formatTime(dayData.label),
                y: [dayData.min, dayData.avg.toFixed(2), dayData.avg.toFixed(2), dayData.avg.toFixed(2), dayData.max]
            }))
        }
    ];

    return (
        <MainLayout>
            <section className="w-full overflow-y-auto">
                <Navbar>{data.deviceName}</Navbar>
                <div className="p-4">

                    <div className="mb-4 flex">
                        <div className="flex items-center justify-center bg-gray-200 px-4 sm:px-16 rounded-lg relative shadow">
                            <div className="text-xl font-bold">{`สถานีผลิตน้ำที่ ${params.stationId}`}</div>
                            <MdOutlineWaterDrop className="text-5xl hidden sm:flex absolute left-[0px] top-[0px] text-sky-500" />
                        </div>
                        <select value={day} className="select select-bordered w-full max-w-[100px] font-bold ml-4 lg:mb-0" onChange={(event) => setDay(Number(event.target.value))}>
                            <option value={1}>1 วัน</option>
                            <option value={7}>7 วัน</option>
                            <option value={30}>30 วัน</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

                        <div className="shadow-md rounded-box mx-2 sm:mx-0 sm:p-4 bg-gradient-to-br from-blue-300 to-blue-400 h-full xl:h-[calc(100%-14px)] row-span-1 md:row-span-3">
                            <div className="bg-gray-50 flex justify-center rounded-xl h-[640px] xl:h-full md:p-3">
                            <BoxPlot
                                    options={options}
                                    series={series}
                                    title={data.deviceName}
                                    minControl={data.minControlValue}
                                    maxControl={data.maxControlValue}
                                />
                            </div>
                        </div>

                        <div className="shadow-md rounded-box p-4 bg-gradient-to-br from-blue-300 to-blue-400 h-full">
                            <div className="bg-gray-50 flex justify-center items-center rounded-xl py-2 h-[370px] relative">
                                <div className="hidden text-gray-600 sm:flex flex-col justify-center text-lg font-semibold absolute left-[8px]">
                                    <div className="flex items-center mb-4">
                                        <BsCircleFill className="text-[#5dc12e] mr-2" />
                                        <div>ปลอดภัย</div>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <BsCircleFill className="text-[#FFF000] mr-2" />
                                        <div>เฝ้าระวัง</div>
                                    </div>
                                    <div className="flex items-center">
                                        <BsCircleFill className="text-[#FF6347] mr-2" />
                                        <div>อันตราย</div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <span className="text-gray-600 text-[34px] text-black font-semibold">
                                        {data.typeName === "Temp" ? (
                                            <Temp current={data.currentValue} />
                                        ) : data.typeName === "pH" ? (
                                            <Ph current={data.currentValue} />
                                        ) : data.typeName === "TDS" ? (
                                            <Tds current={data.currentValue} />
                                        ) : data.typeName === "Turbidity" ? (
                                            <Turbidity current={data.currentValue} />
                                        ) : data.typeName === "Chlorine" ? (
                                            <Chlorine current={data.currentValue} />
                                        ) : data.typeName === "Flow" ? (
                                            <Flow current={data.currentValue} />
                                        ) : null}
                                    </span>
                                </div>
                                <span className="text-gray-600 text-lg font-semibold absolute bottom-[6px] right-[8px]">
                                    ค่าปัจจุบัน {data.currentValue}
                                </span>
                            </div>
                        </div>

                        <div className="shadow-md rounded-box p-4 bg-gradient-to-br from-blue-300 to-blue-400 h-full">
                            <div className="bg-gray-100 rounded-xl p-2">
                                <div className="flex justify-between mt-2 px-2">
                                    <div className="text-black text-lg font-semibold">ชื่ออุปกรณ์ : {data.deviceName}</div>
                                    <div className="text-black text-lg font-semibold text-amber-600">หน่วย : {data.unitType}</div>
                                </div>
                                <div className="text-black text-lg font-semibold ml-2 my-2 ">ค่าสูงสุด : {data.max}</div>
                                <div className="text-black text-lg font-semibold ml-2 mt-2 ">ค่าต่ำสุด : {data.min}</div>
                                <div className="text-black text-lg font-semibold ml-2 mt-2 ">ค่ามาตรฐาน : {data.minStdValue} - {data.maxStdValue}</div>
                                <div className="text-black text-lg font-semibold ml-2 mt-2 ">ค่าเฉลี่ย : {data.avg ? data.avg.toFixed(2) : 0}</div>
                            </div>
                        </div>

                    </div>

                </div >
            </section>
        </MainLayout>
    );
}