import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getStaffNationality, getStaffNationalityLatest } from "../../api";
import { setStaffNationality } from "../../store/slices/EmployeeDemographics/staffNationalitySlice";

interface StaffNationalityType {
  name: string;
  value: number;
}

const Chart4 = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<null | StaffNationalityType[]>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { staffNationality } = useSelector(
    (state: RootState) => state.staffNationalityReducer
  );
  const handleGetStaffNationality = async (filteredMonth: string = "") => {
    try {
      let res = await getStaffNationality(filteredMonth);
      dispatch(setStaffNationality(res.data));
    } catch (error) {
      console.log("error getStaffNationality: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getStaffNationalityLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getStaffNationalityLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetStaffNationality(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!staffNationality || !(staffNationality.length > 0)) return;
    setData(
      staffNationality.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [staffNationality]);

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
        height={200}
        width={200}
      />
    </div>
  );
};

export default Chart4;
