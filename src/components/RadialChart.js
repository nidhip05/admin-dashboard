import React from "react";
import Chart from "react-apexcharts";

const RadialChart = () => {
  const options = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
        track: {
          background: "rgba(0,122,255,0.2)", // Light blue color for the remaining percentage
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "28px",
            fontWeight: 600,
            color: "#fff",
            offsetY: 12,
          },
          total: {
            show: true,
            label: "Goals Completed",
            color: "#fff",
            fontSize: "16px",
            formatter: function () {
              return "70%";
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#1e3a8a"],
        stops: [0, 100],
      },
      colors: ["#6868e1"],
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Goal"],
  };

  const series = [70];

  return (
    <div className="relative">
      <Chart options={options} series={series} type="radialBar" height={220} />
      <p className="text-gray-400 md:text-[10px] text-[8px] py-2 absolute bottom-0 md:right-9 right-4 whitespace-nowrap">
        *The values here has been rounded off.
      </p>
    </div>
  );
};

export default RadialChart;
