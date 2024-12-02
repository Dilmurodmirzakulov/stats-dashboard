import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

const Chart2 = () => {
  const options: ApexOptions = {
    labels: ["Growth"],
    chart: { height: 240, type: "radialBar" },
    plotOptions: {
      radialBar: {
        offsetY: 10,
        startAngle: -150,
        endAngle: 100,
        hollow: { size: "55%" },
      },
    },
  };

  return (
    <div>
      <Chart options={options} series={[78]} type="radialBar" height={350} />
    </div>
  );
};

export default Chart2;
