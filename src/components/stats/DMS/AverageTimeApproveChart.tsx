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
import { getAverageTimeApprove } from "../../../api";
import { setAverageTimeApprove } from "../../../store/slices/DMS/averageTimeApproveSlice";
import { getAverageTimeApproveLatest } from "../../../api/DMS/AverageTimeApprove/latest";

const AverageTimeApproveChart: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { averageTimeApprove } = useSelector(
    (state: RootState) => state.averageTimeApproveReducer
  );
  const handleGetAverageTimeApprove = async (filteredMonth: string = "") => {
    try {
      let res = await getAverageTimeApprove(filteredMonth);
      dispatch(setAverageTimeApprove(res.data));
    } catch (error) {
      console.log("error getAverageTimeApprove: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getAverageTimeApproveLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getAverageTimeApproveLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetAverageTimeApprove(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!averageTimeApprove) return;
    setData(
      averageTimeApprove.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [averageTimeApprove]);

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
        <h4>Average Time Per Approval Step</h4>
        <input
          onChange={(e) => setFilteredMonth(e.target.value)}
          value={filteredMonth}
          className="form-control wu-lg-50"
          type="month"
        />
      </div>
      <div className="d-flex justify-content-center">
        <ResponsiveContainer width={"100%"} aspect={isMobile ? 1 : 1.8}>
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

export default AverageTimeApproveChart;
