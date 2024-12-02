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
  getYearsWithUniversity,
  getYearsWithUniversityLatest,
} from "../../../api";
import { setYearsWithUniversity } from "../../../store/slices/EmployeeExperience/yearsWithUniversitySlice";

const YearsWithUniversity: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { yearsWithUniversity } = useSelector(
    (state: RootState) => state.yearsWithUniversityReducer
  );

  const handleGetYearsWithUniversity = async (filteredMonth: string = "") => {
    try {
      let res = await getYearsWithUniversity(filteredMonth);
      dispatch(setYearsWithUniversity(res.data));
    } catch (error) {
      console.log("error getYearsWithUniversity: ", error);
    }
  };

  useEffect(() => {
    handleGetYearsWithUniversity(filteredMonth);
  }, [filteredMonth]);

  const handleGetLastReports = async () => {
    try {
      const res = await getYearsWithUniversityLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getYearsWithUniversityLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!yearsWithUniversity) return;
    setData(
      yearsWithUniversity.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [yearsWithUniversity]);

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
        <h4>Years with university</h4>
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
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
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

export default YearsWithUniversity;
