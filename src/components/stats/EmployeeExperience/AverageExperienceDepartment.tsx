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
import {
  getAverageExperienceDepartment,
  getAverageExperienceDepartmentLatest,
} from "../../../api";
import { setAverageExperienceDepartment } from "../../../store/slices/EmployeeExperience/averageExperienceDepartmentSlice";

const AverageExperienceDepartment: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { averageExperienceDepartment } = useSelector(
    (state: RootState) => state.averageExperienceDepartmentReducer
  );
  const handleGetAverageExperienceDepartment = async (
    filteredMonth: string = ""
  ) => {
    try {
      let res = await getAverageExperienceDepartment(filteredMonth);
      dispatch(setAverageExperienceDepartment(res.data));
    } catch (error) {
      console.log("error getAverageExperienceDepartment: ", error);
    }
  };

  useEffect(() => {
    handleGetAverageExperienceDepartment(filteredMonth);
  }, [filteredMonth]);

  const handleGetLastReports = async () => {
    try {
      const res = await getAverageExperienceDepartmentLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getAverageExperienceDepartmentLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!averageExperienceDepartment) return;
    setData(
      averageExperienceDepartment.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [averageExperienceDepartment]);

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
        <h4>Average Years of Experience by department</h4>
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

export default AverageExperienceDepartment;
