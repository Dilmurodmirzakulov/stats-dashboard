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
import { getAgeGroups, getStaffByCategory } from "../../../api";
import { setAgeGroups } from "../../../store/slices/EmployeeDemographics/ageGroupsSlice";
import { setStaffByCategory } from "../../../store/slices/EmployeeDemographics/staffByCategorySlice";
import { getStaffByCategoryLatest } from "../../../api/EmployeeDemographics/StaffByCategory/latest";
import { getAgeGroupLatest } from "../../../api/EmployeeDemographics/AgeGroups/latest";

const COLORS = [
  "#C72A3F",
  "#264F9E",
  "#EEACBA",
  "#266A3B",
  "#5A9BD5",
  "#71AD48",
  "#2C447A",
  "#9E480D",
];

const AgeGroupsStaffCategory: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [data1, setData1] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const [filteredMonth1, setFilteredMonth1] = useState("");
  const { ageGroups } = useSelector(
    (state: RootState) => state.ageGroupsReducer
  );
  const { staffByCategory } = useSelector(
    (state: RootState) => state.staffByCategoryReducer
  );
  const handleGetAgeGroups = async (filteredMonth: string = "") => {
    try {
      let res = await getAgeGroups(filteredMonth);
      dispatch(setAgeGroups(res.data));
    } catch (error) {
      console.log("error getPositionProportions: ", error);
    }
  };
  const handleGetStaffByCategory = async (filteredMonth: string = "") => {
    try {
      let res = await getStaffByCategory(filteredMonth);
      dispatch(setStaffByCategory(res.data));
    } catch (error) {
      console.log("error getPositionProportions: ", error);
    }
  };

  const handleGetLastReports1 = async () => {
    try {
      const res = await getStaffByCategoryLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth1(res.data[0].calculated_date);
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, "0"); // getMonth() is zero-indexed, add 1 to get the correct month number
      const currentMonth = `${year}-${month}`;
      setFilteredMonth1(currentMonth);
    } catch (error) {
      console.log("error getStaffByCategoryLatest: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getAgeGroupLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getAgeGroupLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetStaffByCategory(filteredMonth1);
  }, [filteredMonth1]);

  useEffect(() => {
    handleGetAgeGroups(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetLastReports1();
  }, []);

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!ageGroups) return;
    setData(
      ageGroups.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [ageGroups]);

  useEffect(() => {
    if (!staffByCategory) return;
    setData1(
      staffByCategory.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [staffByCategory]);

  useEffect(() => {
    const checkMobileSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobileSize();

    window.addEventListener("resize", checkMobileSize);

    return () => window.removeEventListener("resize", checkMobileSize);
  }, []);
  return (
    <div className="row g-4">
      <div className="col-md-6">
        <div className="d-md-flex align-items-center justify-content-between mb-3">
          <h4 className="mb-md-0">Age Groups</h4>
          <input
            onChange={(e) => setFilteredMonth(e.target.value)}
            value={filteredMonth}
            className="form-control wu-lg-50"
            type="month"
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-between">
          <ResponsiveContainer width="100%" aspect={!isMobile ? 1 : 0.8}>
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
              <Legend
                layout="horizontal"
                align="center"
                verticalAlign="bottom"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-md-flex align-items-center justify-content-between mb-3">
          <h4 className="mb-md-0">Staff by Category</h4>
          <input
            onChange={(e) => setFilteredMonth1(e.target.value)}
            value={filteredMonth1}
            className="form-control wu-lg-50"
            type="month"
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-between">
          <ResponsiveContainer width="100%" aspect={!isMobile ? 1 : 0.8}>
            <PieChart>
              <Pie
                data={data1}
                innerRadius={70}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={1}
                dataKey="value"
                label
              >
                {data1 &&
                  data1.map((entry: any, index: number) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
              </Pie>
              <Tooltip />
              <Legend
                layout="horizontal"
                align="center"
                verticalAlign="bottom"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AgeGroupsStaffCategory;
