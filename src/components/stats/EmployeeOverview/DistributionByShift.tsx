import React, { FC, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { getShiftDists, getShiftDistsLatest } from "../../../api";
import { setShiftDists } from "../../../store/slices/EmployeeOverview/shiftDistributionSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";

const COLORS = ["#264F9E", "#C72A3F"];

const DistributionByShift: FC = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [filteredMonth, setFilteredMonth] = useState("");
  const [data, setData] = useState<null | any>();
  const { shiftDists } = useSelector(
    (state: RootState) => state.shiftDistributionReducer
  );

  useEffect(() => {
    if (!shiftDists) return;
    setData(
      shiftDists.map((x) => ({
        name: `
        ${x.shift_type == 1 ? "0.25 shift" : ""}
        ${x.shift_type == 2 ? "0.5 shift" : ""}
        ${x.shift_type == 3 ? "0.75 shift" : ""}
        ${x.shift_type == 4 ? "1 shift" : ""}
        `,
        value: x.value,
      }))
    );
  }, [shiftDists]);

  const handleGetShiftDists = async (filteredMonth: string = "") => {
    try {
      let res = await getShiftDists(filteredMonth);
      dispatch(setShiftDists(res.data));
    } catch (error) {
      console.log("error getShiftDists: ", error);
    }
  };

  useEffect(() => {
    handleGetShiftDists(filteredMonth);
  }, [filteredMonth]);

  const handleGetLastReports = async () => {
    try {
      const res = await getShiftDistsLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getShiftDistsLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    const checkMobileSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobileSize();

    window.addEventListener("resize", checkMobileSize);

    return () => window.removeEventListener("resize", checkMobileSize);
  }, []);

  return (
    <>
      <div className="d-md-flex align-items-center justify-content-between mb-3">
        <h4>Distribution by shift</h4>
        <input
          onChange={(e) => setFilteredMonth(e.target.value)}
          value={filteredMonth}
          className="form-control wu-lg-50"
          type="month"
        />
      </div>
      <div className="d-flex flex-column flex-md-row  align-items-center justify-content-center">
        <ResponsiveContainer
          width="100%"
          height={250}
          aspect={isMobile ? 1.2 : 2}
        >
          <PieChart width={250} height={250}>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label
            >
              {data &&
                data.map((_entry: any, index: number) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default DistributionByShift;
