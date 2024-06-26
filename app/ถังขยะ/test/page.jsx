'use client'

import React, { useState, useEffect } from 'react';
import BoxPlot from '@/components/chart/BoxPlot';

export default function Page() {
    const [day, setDay] = useState(1);
    const [series, setSeries] = useState([]);

    useEffect(() => {
        updateSeries();
    }, [day]);

    function updateSeries() {
        let numberOfSamples;
        if (day === 1) {
            numberOfSamples = 24;
        } else if (day === 7) {
            numberOfSamples = 7;
        } else if (day === 30) {
            numberOfSamples = 30;
        }

        let newSeries = [
            {
                name: 'box',
                data: Array.from({ length: numberOfSamples }, (_, i) => ({
                    x: `Sample ${i + 1}`,
                    y: [Math.random() * 10, Math.random() * 20, Math.random() * 30, Math.random() * 40, Math.random() * 50]
                }))
            }
        ];
        setSeries(newSeries);
    }

    const options = {
        chart: {
            type: 'boxPlot',
            height: 350
        },
        title: {
            text: 'BoxPlot Chart',
            align: 'left'
        },
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
        },
        xaxis: {
            type: 'category',
            title: {
                text: 'Sample'
            }
        },
        yaxis: {
            title: {
                text: 'Value'
            }
        }
    };

    return (
        <div>
            <div className="shadow-md rounded-box mx-2 sm:mx-0 sm:p-4 bg-gradient-to-br from-blue-300 to-blue-400 h-full xl:h-[calc(100%-14px)] row-span-1 md:row-span-3">
                <div className="bg-gray-50 flex justify-center rounded-xl h-[640px] xl:h-full md:p-3">
                    {series.length > 0 && <BoxPlot options={options} series={series} title={"test"} />}
                </div>
            </div>
            <select value={day} className="select select-bordered w-full max-w-[100px] font-bold ml-4 lg:mb-0" onChange={(event) => setDay(Number(event.target.value))}>
                <option value={1}>1 วัน</option>
                <option value={7}>7 วัน</option>
                <option value={30}>30 วัน</option>
            </select>
        </div>
    )
}
