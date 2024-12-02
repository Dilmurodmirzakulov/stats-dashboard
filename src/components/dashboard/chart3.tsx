import React from "react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { WeeklyCallsCenterData } from "../../api";

const Chart3 = ({
  weeklyCallsCenter,
}: {
  weeklyCallsCenter: WeeklyCallsCenterData[];
}) => {
  const series = [
    {
      name: "Calls",
      data: weeklyCallsCenter.map((x) => {
        return {
          x: x.name,
          y: x.value,
        };
      }),
    },
  ];
  const options: ApexOptions = {
    chart: {
      dropShadow: {
        enabled: true,
        color: "rgb(255, 171, 0)",
        top: 10,
        left: 5,
        blur: 3,
        opacity: 0.2,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#FFB726"],
    stroke: { width: 5, curve: "smooth" },
    grid: {
      show: false,
      padding: {
        top: -20,
        bottom: -20,
        left: -20,
        right: -20,
      },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  };

  return (
    <div>
      <Chart options={options} height={120} series={series} type="line" />
    </div>
  );
};

export default Chart3;
