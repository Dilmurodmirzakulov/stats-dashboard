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
import {
  getCallCenterInquiriesByCategory,
  getCallCenterInquiriesByCategoryLatest,
} from "../../../api";
import { setCallCenterInquiriesByCategory } from "../../../store/slices/AskWIUT/CallCenterInquiriesByCategorySlice";

const COLORS = [
  "#4e2c2c",
  "#edabba",
  "#303644",
  "#f6ac10",
  "#264f90",
  "#26693a",
  "#80b3e0",
  "#c7293f",
];

const CallCenterInquiriesByCategoryChart = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { callCenterInquiriesByCategory } = useSelector(
    (state: RootState) => state.callCenterInquiriesByCategoryReducer
  );
  const handleGetCallCenterInquiriesByCategory = async (
    filteredMonth: string = ""
  ) => {
    try {
      let res = await getCallCenterInquiriesByCategory(filteredMonth);
      dispatch(setCallCenterInquiriesByCategory(res.data));
    } catch (error) {
      console.log("error getCallCenterInquiriesByCategory: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getCallCenterInquiriesByCategoryLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getCallCenterInquiriesByCategoryLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetCallCenterInquiriesByCategory(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!callCenterInquiriesByCategory) return;
    setData(
      callCenterInquiriesByCategory.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [callCenterInquiriesByCategory]);

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
      <div className="mb-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="calculated-month">
            Calculated month
          </label>
          <input
            onChange={(e) => setFilteredMonth(e.target.value)}
            value={filteredMonth}
            className="form-control "
            type="month"
          />
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between mb-5">
        <ResponsiveContainer width="100%" aspect={!isMobile ? 1.8 : 1}>
          <PieChart>
            <Pie
              data={data}
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

export default CallCenterInquiriesByCategoryChart;
