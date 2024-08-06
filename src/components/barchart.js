import React from "react";
import ApexCharts from "react-apexcharts";

const LineChartComponent = () => {
  const chartOptions = {
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    chart: {
      type: "bar",
      height: 240,
      toolbar: {
        show: false,
      },
    },
    title: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#4f46e5"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  return (
    <div className="relative flex flex-col rounded-xl bg-[#1F2029] text-gray-700 h-[230px] shadow-md scale-90">
      <div className="ml-4 ml-[-10px] md:ml-[-20px] lg:ml-[-31px]font-sans text-lg md:text-xl lg:text-2xl text-white font-bold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
        Activity
      </div>

      <div className="relative w-full h-full ml-[-31px]">
        <ApexCharts
          options={chartOptions}
          series={chartOptions.series}
          type="bar"
          id="bar-chart"
          height="100%" // Fit to container height
          width="100%" // Fit to container width
        />
      </div>
    </div>
  );
};

export default LineChartComponent;
