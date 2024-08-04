import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const series = [
    {
      data: [
        3000, 4000, 3500, 5000, 4900, 6000, 7000, 7800, 9000, 11000, 12500,
      ],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
      background: "#111827",
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ["#6868e1"],
    },
    grid: {
      show: true,
      borderColor: "#555555", // Dark gray color for the grid lines
      strokeDashArray: 0, // Solid lines
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27],
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
      axisBorder: {
        color: "#333333",
      },
      axisTicks: {
        color: "#333333",
      },
      range: 12, // Adjust the range to fit the number of data points
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FFFFFF",
        },
        formatter: (value) => `${value / 1000}k`,
      },
      axisBorder: {
        color: "#333333",
      },
      axisTicks: {
        color: "#333333",
      },
      min: 0,
      max: 15000,
      tickAmount: 3,
    },
    tooltip: {
      theme: "dark",
    },
  };

  return (
    <div className="chart">
      <Chart options={options} series={series} type="bar" height={200} />
    </div>
  );
};

export default BarChart;
