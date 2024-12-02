import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { RootState } from "../../../store";
import { getStaffNationality } from "../../../api";
import { setStaffNationality } from "../../../store/slices/EmployeeDemographics/staffNationalitySlice";
import { getStaffNationalityLatest } from "../../../api/EmployeeDemographics/StaffNationality/latest";

const COLORS = [
  "#4473C5",
  "#ED7D31",
  "#A5A5A5",
  "#FFC000",
  "#5A9BD5",
  "#71AD48",
  "#2C447A",
  "#9E480D",
];

const StaffNationality: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
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
    if (!staffNationality) return;
    setData(
      staffNationality.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [staffNationality]);

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
        <h4>Staff by nationality</h4>
        <input
          onChange={(e) => setFilteredMonth(e.target.value)}
          value={filteredMonth}
          className="form-control wu-lg-50"
          type="month"
        />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between">
        <ResponsiveContainer
          width="100%"
          height={400}
          aspect={!isMobile ? 1.8 : 0.8}
        >
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={1}
              dataKey="value"
              label
            >
              {data &&
                data.map((entry: any, index: number) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
            </Pie>
            <Tooltip />
            <Legend layout="horizontal" align="center" verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default StaffNationality;
