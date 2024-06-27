'use client'

import { MdOutlineWaterDrop } from "react-icons/md";
import { BsEmojiFrown, BsEmojiNeutral, BsEmojiSmile } from 'react-icons/bs';
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react"
import axios from "axios";
import Link from "next/link";

import { format } from 'date-fns';
import { th } from 'date-fns/locale';

export default function MapStation({ orgId }) {
    const [org, setOrg] = useState([]);
    const [stationAll, setStationAll] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const res = await axios.get(`/api/org/${orgId}`);
            setOrg(res.data[0]);
            setStationAll(res.data[0].stations);
        } catch (error) {
            console.log(error);
        }
    }, [orgId]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const today = new Date();
    const formattedDate = format(today, 'd MMMM yyyy เวลา HH.mm น', { locale: th });

    function getTempEmoji(temp) {
        if (temp < 15) {
            return <BsEmojiFrown className="text-7xl bg-red-400 rounded-full" />;
        } else if (temp >= 15 && temp <= 25) {
            return <BsEmojiNeutral className="text-7xl bg-yellow-300 rounded-full" />;
        } else {
            return <BsEmojiSmile className="text-7xl bg-green-300 rounded-full" />;
        }
    }

    function getPhEmoji(ph) {
        if (ph >= 6.5 && ph <= 7.5) {
            return <BsEmojiSmile className="text-7xl bg-green-300 rounded-full" />;
        } else if ((ph >= 5.5 && ph < 6.5) || (ph > 7.5 && ph <= 8.5)) {
            return <BsEmojiNeutral className="text-7xl bg-yellow-200 rounded-full" />;
        } else {
            return <BsEmojiFrown className="text-7xl bg-red-400 rounded-full" />;
        }
    }

    function getTdsEmoji(tds) {
        if (tds < 600) {
            return <BsEmojiFrown className="text-7xl bg-red-400 rounded-full" />;
        } else {
            return <BsEmojiSmile className="text-7xl bg-green-300 rounded-full" />;
        }
    }

    function getTurEmoji(tur) {
        if (tur < 5) {
            return <BsEmojiFrown className="text-7xl bg-red-400 rounded-full" />;
        } else {
            return <BsEmojiSmile className="text-7xl bg-green-300 rounded-full" />;
        }
    }

    function getCloEmoji(clo) {
        if (clo < 2) {
            return <BsEmojiFrown className="text-7xl bg-red-400 rounded-full" />;
        } else {
            return <BsEmojiSmile className="text-7xl bg-green-300 rounded-full" />;
        }
    }

    function getFlowEmoji(flow) {
        if (flow < 10) {
            return <BsEmojiFrown className="text-7xl bg-red-400 rounded-full" />;
        } else if (flow >= 10 && flow <= 20) {
            return <BsEmojiNeutral className="text-7xl bg-yellow-300 rounded-full" />;
        } else {
            return <BsEmojiSmile className="text-7xl bg-green-300 rounded-full" />;
        }
    }

    return (
        <div className="sm:p-4">

            <div className="flex justify-between flex-col sm:flex-row ">
                <h1 className="bg-gradient-to-br from-blue-200 to-blue-300 p-4 shadow-lg sm:rounded-t-lg sm:rounded-b-lg text-white">
                    <div className="text-2xl sm:text-4xl font-extrabold ">สถานการณ์</div>
                    <div className="text-4xl sm:text-5xl font-extrabold ">คุณภาพ<span className="text-sky-600">น้ำประปา</span></div>
                    <div className="sm:text-xl font-semibold text-gray-700 pt-1 ">ใน{org.orgName}</div>
                </h1>
                <div className=" mt-2 mx-2 py-2 sm:py-0 bg-gradient-to-br from-blue-200 to-white rounded-lg shadow-md">

                    <div className="flex justify-between items-center py-[4px] px-[8px] rounded-t-lg sm:mt-4 ">
                        <div className="text-3xl bg-green-300 rounded-full"><BsEmojiSmile /></div>
                        <div className="mx-6 font-bold">ปลอดภัย</div>
                        <div className="text-2xl text-green-400"><FaArrowAltCircleUp /></div>
                    </div>

                    <div className="flex justify-between items-center py-[2px] px-[8px] ">
                        <div className="text-3xl bg-yellow-200 rounded-full"><BsEmojiNeutral /></div>
                        <div className="mx-6 font-bold">เฝ้าระวัง</div>
                        <div className="text-2xl text-green-400"><FaArrowAltCircleUp /></div>
                    </div>

                    <div className="flex justify-between items-center py-[4px] px-[8px] rounded-b-lg">
                        <div className="text-3xl bg-red-400 rounded-full"><BsEmojiFrown /></div>
                        <div className="mx-6 font-bold">ไม่ปลอดภัย</div>
                        <div className="text-2xl text-green-400"><FaArrowAltCircleUp /></div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 2xl:grid-cols-2 mt-4 gap-4">

                {stationAll.map((item) => (
                    <Link key={item.id} href={`station/${item.id}/device`}>
                        <div className="bg-gradient-to-br from-blue-200 to-blue-400 rounded-box p-4 shadow-md hover:scale-102.5 transition hover:duration-150">
                            <div className="flex justify-between flex-col sm:flex-row mb-4 p-2 pb-0">
                                <div className="bg-gray-100 relative py-[4px] px-4 sm:px-14 rounded-t-lg sm:rounded-box text-center shadow">
                                    <MdOutlineWaterDrop className="text-6xl hidden sm:flex absolute left-[-5px] top-[0px] text-sky-500" />
                                    <div className="text-xl font-bold">{item.stationName}</div>
                                    <div className="text-xl font-bold">{org.orgName}</div>
                                </div>
                                <div className="bg-gray-50 py-2 px-4 sm:px-6 rounded-b-lg text-center sm:rounded-box shadow">
                                    <div className="font-bold">รายงานสรุป ค่าเฉลี่ย 24 ชั่วโมง</div>
                                    <p className="font-bold">{formattedDate}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
                                {item.devices
                                    .sort((a, b) => a.displayOrder - b.displayOrder)
                                    .slice(0, 4)
                                    .map((device) => (
                                        <div key={device.id} className="bg-gray-50 text-center py-4 rounded-xl relative">
                                            <div className="text-2xl font-extrabold text-cyan-600">{device.deviceName}</div>
                                            <div className="text-xl font-extrabold">ตรวจวัดได้ {device.currentValue}</div>
                                            <div className="font-extrabold">ค่าสูงสุด {device.max1Day}</div>
                                            <div className="font-extrabold">ค่าต่ำสุด {device.min1Day}</div>
                                            <div className="text-md font-extrabold text-amber-600">ค่ามาตรฐาน {device.minStdValue} - {device.maxStdValue}</div>
                                            <div className="absolute left-[-10px] top-[-10px]">
                                                {device.typeName === "Temp" ? (
                                                    getTempEmoji(device.currentValue)
                                                ) : device.typeName === "pH" ? (
                                                    getPhEmoji(device.currentValue)
                                                ) : device.typeName === "TDS" ? (
                                                    getTdsEmoji(device.currentValue)
                                                ) : device.typeName === "Turbidity" ? (
                                                    getTurEmoji(device.currentValue)
                                                ) : device.typeName === "Chlorine" ? (
                                                    getCloEmoji(device.currentValue)
                                                ) : device.typeName === "Flow" ? (
                                                    getFlowEmoji(device.currentValue)
                                                ) : null}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </Link>
                ))}


            </div>

        </div>
    );
}