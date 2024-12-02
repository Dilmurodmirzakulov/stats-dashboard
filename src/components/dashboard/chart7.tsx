import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getDocsByType, getDocsByTypeLatest } from "../../api";
import { setDocsByType } from "../../store/slices/DMS/docsByTypeSlice";

interface DocsByTypeType {
  name: string;
  value: number;
}

const Chart7 = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<null | DocsByTypeType[]>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { docsByType } = useSelector(
    (state: RootState) => state.docsByTypeReducer
  );
  const handleGetDocsByType = async (filteredMonth: string = "") => {
    try {
      let res = await getDocsByType(filteredMonth);
      dispatch(setDocsByType(res.data));
    } catch (error) {
      console.log("error getDocsByType: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getDocsByTypeLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getDocsByTypeLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetDocsByType(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!docsByType || !(docsByType.length > 0)) return;
    setData(
      docsByType.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [docsByType]);

  if (!data) return <></>;

  const options: ApexOptions = {
    labels: data.map((x) => x.name),
    stroke: { width: 5 },
    dataLabels: {
      enabled: false,
      formatter: function (o: any, t) {
        return parseInt(o) + "%";
      },
    },
    legend: { show: false },
    grid: { padding: { top: 0, bottom: 0, right: 15 } },
    states: {
      hover: { filter: { type: "none" } },
      active: { filter: { type: "none" } },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            value: {
              fontSize: "1.5rem",
              offsetY: -15,
              formatter: function (o) {
                return parseInt(o) + "%";
              },
            },
            name: { offsetY: 20 },
            total: {
              show: true,
              fontSize: "0.8125rem",
              label: data[0].name,
              formatter: function (o: any) {
                return `${data[0].value}%`;
              },
            },
          },
        },
      },
    },
  };

  return (
    <div>
      <Chart
        options={options}
        series={data.map((x) => x.value)}
        type="donut"
        height={250}
        width={250}
      />
    </div>
  );
};

export default Chart7;
