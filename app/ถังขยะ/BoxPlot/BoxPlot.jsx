'use client'

import React from "react";
import ReactApexChart from "react-apexcharts";

export default function BoxPlot() {
  const series = [
    {
      name: "Iris Species vs SepalLengthCm",
      data: [
        {
          x: "Setosa",
          y: [4.3, 4.8, 5, 5.2, 5.8]
        },
        {
          x: "Versicolor",
          y: [4.9, 5.6, 5.9, 6.3, 7]
        },
        {
          x: "Virginica",
          y: [4.9, 6.225, 6.5, 6.9, 7.9]
        }
      ]
    }
  ];

  const options = {
    chart: {
      type: "boxPlot",
      background: "#fff",
      offsetX: 0,
      offsetY: 10
    },
    legend: {
      show: true
    },
    xaxis: {
      type: "category",
      title: {
        text: "Species"
      },
      labels: {
        show: true,
        minHeight: 70
      }
    },
    yaxis: {
      title: {
        text: "SepalLengthCm"
      }
    },
    title: {
      text: "Boxplot Chart"
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: "#5C4742",
          lower: "#A5978B"
        }
      }
    }
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <ReactApexChart
        options={options}
        series={series}
        type="boxPlot"
        height={500}
      />
    </div>
  );
};
