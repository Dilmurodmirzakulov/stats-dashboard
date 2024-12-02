import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { RootState } from "../../../store";
import { getStaffPosition } from "../../../api";
import { setStaffPosition } from "../../../store/slices/EmployeeDemographics/staffPositionSlice";
import { getStaffPositionLatest } from "../../../api/EmployeeDemographics/StaffPosition/latest";

const StaffPosition: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { staffPosition } = useSelector(
    (state: RootState) => state.staffPositionReducer
  );
  const handleGetStaffPosition = async (filteredMonth: string = "") => {
    try {
      let res = await getStaffPosition(filteredMonth);
      dispatch(setStaffPosition(res.data));
    } catch (error) {
      console.log("error getStaffPosition: ", error);
    }
  };

  useEffect(() => {
    handleGetStaffPosition(filteredMonth);
  }, [filteredMonth]);

  const handleGetLastReports = async () => {
    try {
      const res = await getStaffPositionLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getStaffPositionLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!staffPosition) return;
    setData(
      staffPosition.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [staffPosition]);

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
        <h4>Staff by position</h4>
        <input
          onChange={(e) => setFilteredMonth(e.target.value)}
          value={filteredMonth}
          className="form-control wu-lg-50"
          type="month"
        />
      </div>
      <div className="d-flex justify-content-center">
        <ResponsiveContainer
          width={isMobile ? 300 : 500}
          height={isMobile ? 300 : 450}
          aspect={isMobile ? 1 : 1}
        >
          <BarChart
            layout="vertical"
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 40,
              bottom: 5,
            }}
            barSize={15}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" hide={isMobile} />
            <Tooltip />
            <Legend />

            <Bar dataKey="value" fill="#C7293F">
              <LabelList
                dataKey="value"
                position="right"
                style={{ fill: "#C7293F" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default StaffPosition;
