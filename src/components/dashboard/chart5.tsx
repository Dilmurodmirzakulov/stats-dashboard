import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getTerminationMonths, getTerminationMonthsLatest } from "../../api";
import { setTerminationMonths } from "../../store/slices/Turnover/terminationMonthsSlice";

interface TerminationByMonthType {
  name: string;
  value: number;
}

const Chart5 = () => {
  const dispatch = useDispatch();
  const [filteredMonth, setFilteredMonth] = useState("");
  const [series, setSeries] = useState<null | TerminationByMonthType>(null);
  const { terminationMonths } = useSelector(
    (state: RootState) => state.terminationMonthsReducer
  );

  const handleGetTerminationMonths = async (filteredMonth: string = "") => {
    try {
      let res = await getTerminationMonths(filteredMonth);
      dispatch(setTerminationMonths(res.data));
    } catch (error) {
      console.log("error getTerminationMonths: ", error);
    }
  };

  useEffect(() => {
    handleGetTerminationMonths(filteredMonth);
  }, [filteredMonth]);

  const handleGetLastReports = async () => {
    try {
      const res = await getTerminationMonthsLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getTerminationMonthsLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  const options: ApexOptions = {
    chart: {
      height: 215,
      parentHeightOffset: 0,
      toolbar: { show: !1 },
      type: "area",
    },
    dataLabels: { enabled: !1 },
    stroke: { width: 2, curve: "smooth" },
    legend: { show: !1 },
    markers: {
      size: 6,
      colors: "transparent",
      strokeColors: "transparent",
      strokeWidth: 4,
      discrete: [{ seriesIndex: 0, dataPointIndex: 7, size: 6 }],
      hover: { size: 7 },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: void 0,
        shadeIntensity: 0.6,
        opacityFrom: 0.5,
        opacityTo: 0.25,
        stops: [0, 95, 100],
      },
    },
    grid: {
      strokeDashArray: 3,
      padding: { top: -20, bottom: -8, left: -10, right: 8 },
    },
    xaxis: {
      categories: terminationMonths.map((x) => x.name),
      axisBorder: { show: !1 },
      axisTicks: { show: !1 },
      labels: { show: !0, style: { fontSize: "13px" } },
    },
    yaxis: { labels: { show: !1 } },
  };

  console.log("termination", terminationMonths);

  return (
    <div className="mb-4">
      <h6>Termination by month ({terminationMonths[0]?.calculated_date})</h6>
      <Chart
        options={options}
        series={[
          { name: "Terminations", data: terminationMonths.map((x) => x.value) },
        ]}
        type="area"
        height={215}
      />
    </div>
  );
};

export default Chart5;
