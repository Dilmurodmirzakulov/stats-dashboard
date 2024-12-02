import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  LineChart,
  Line,
} from "recharts";
import { RootState } from "../../../store";
import { getTotalDocsPerYear } from "../../../api";
import { setTotalDocsPerYear } from "../../../store/slices/DMS/totalDocsPerYearSlice";
import { getTotalDocsPerYearLatest } from "../../../api/DMS/TotalDocsPerYear/latest";

const TotalDocsPerYearChart: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { totalDocsPerYear } = useSelector(
    (state: RootState) => state.totalDocsPerYearReducer
  );
  const handleGetTotalDocsPerYear = async (filteredMonth: string = "") => {
    try {
      let res = await getTotalDocsPerYear(filteredMonth);
      dispatch(setTotalDocsPerYear(res.data));
    } catch (error) {
      console.log("error getPositionProportions: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getTotalDocsPerYearLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getTotalDocsPerYearLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetTotalDocsPerYear(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!totalDocsPerYear) return;
    setData(
      totalDocsPerYear.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [totalDocsPerYear]);

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
        <h4>Total Number of Documents Processed Per Year</h4>
        <input
          onChange={(e) => setFilteredMonth(e.target.value)}
          value={filteredMonth}
          className="form-control wu-lg-50"
          type="month"
        />
      </div>
      <div className="d-flex justify-content-center">
        <ResponsiveContainer width="100%" aspect={!isMobile ? 1.8 : 0.8}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default TotalDocsPerYearChart;
