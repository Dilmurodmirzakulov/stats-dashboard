import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  getTopTenSignedPersonel,
  getTopTenSignedPersonelLatest,
} from "../../api";
import { setTopTenSignedPersonel } from "../../store/slices/DMS/topTenSignedPersonelSlice";

const Chart1 = () => {
  const dispatch = useDispatch();
  const [filteredMonth, setFilteredMonth] = useState("");

  const { topTenSignedPersonel } = useSelector(
    (state: RootState) => state.topTenSignedPersonelReducer
  );
  const handleGetTopTenSignedPersonel = async (filteredMonth: string = "") => {
    try {
      let res = await getTopTenSignedPersonel(filteredMonth);
      dispatch(setTopTenSignedPersonel(res.data));
    } catch (error) {
      console.log("error getTopTenSignedPersonel: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getTopTenSignedPersonelLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getTopTenSignedPersonelLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetTopTenSignedPersonel(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetLastReports();
  }, []);

  const options: ApexOptions = {
    chart: {
      type: "line",
      stacked: false,
    },
    stroke: {
      width: [0, 2],
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: topTenSignedPersonel.map((x) => x.name),
    yaxis: [
      {
        seriesName: "Documents",
        title: {
          text: "Documents",
        },
      },
      {
        opposite: true,
        seriesName: "Time (mins)",
        title: {
          text: "Time (mins)",
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      type: "category",
      labels: {
        show: false,
      },
    },
  };

  const series = [
    {
      name: "Documents",
      type: "bar",
      data: topTenSignedPersonel.map((x) => x.value),
    },
    {
      name: "Time (mins)",
      type: "line",
      data: topTenSignedPersonel.map((x) => x.time),
    },
  ];

  return (
    <div id="chart">
      <Chart options={options} series={series} type="line" height="350" />
    </div>
  );
};

export default Chart1;
