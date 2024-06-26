import ReactApexChart from "react-apexcharts";

export default function BoxPlot({ options, series, title, minControl, maxControl }) {
  if (!options.annotations) {
    options.annotations = {};
  }

  // Add annotation for the red vertical line
  options.annotations = {
    ...options.annotations,
    yaxis: [
      {
        y: minControl, // Position of the vertical line
        borderColor: '#FF0000',
        strokeDashArray: 0,
        strokeWidth: 2,
        opacity: 1,
        label: {
          borderColor: '#FF0000',
          style: {
            color: 'red',
            background: '#FF0000',
            padding: '5px 10px',
            borderRadius: '5px'
          },
          text: 'Control Line',
        }
      },
      {
        y: maxControl, // Position of the vertical line
        borderColor: '#FF0000',
        strokeDashArray: 0,
        strokeWidth: 2,
        opacity: 1,
        label: {
          borderColor: '#FF0000',
          style: {
            color: 'red',
            background: '#FF0000',
            padding: '5px 10px',
            borderRadius: '5px'
          },
          text: '',
        }
      },
    ]
  };

  options.xaxis = {
    title: {
      text: 'ช่วงเวลา', // ป้ายกำกับแกน X
      style: {
        fontSize: '12px'
      }
    },
    labels: {
      show: true,
      minHeight: 70,
      rotateAlways: function () {
        return window.innerWidth < 300;
      }
    }
  };

  options.yaxis = {

    title: {
      text: `ค่า${title}`, // Y-axis label
      style: {
        fontSize: '12px'
      }
    }
  };

  options.title = {
    text: `แผนภูมิแสดง${title}-ช่วงเวลา`, // Chart title
    style: {
      fontSize: '12px',
      textAlign: 'center'
    }
  };


  return (
    <div style={{ width: "100%", maxWidth: "900px", height: "100%", maxHeight: "630px", margin: "0 auto", padding: "0px", display: "flex", alignItems: "stretch" }}>
      <ReactApexChart
        options={options}
        series={series}
        type="boxPlot"
        height="100%"
        style={{ flex: 1 }}
      />
    </div>
  );
};

