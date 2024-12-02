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
import { getAverageExperienceCategory } from "../../../api";
import { setAverageExperienceCategory } from "../../../store/slices/EmployeeExperience/averageExperienceCategorySlice";
import { getAverageExperienceCategoryLatest } from "../../../api/EmployeeExperience/averageExperienceCategory/latest";

const COLORS = [
  "#C7283E", // Red
  "#264F9E", // Blue
  "#F7AD10", // Yellow
  "#303644", // Dark Gray
  "#FF5733", // Orange
  "#5E9FFF", // Light Blue
  "#FFC300", // Gold
  "#4CAF50", // Green
  "#9B59B6", // Purple
  "#E74C3C", // Dark Red
  "#3498DB", // Sky Blue
  "#F39C12", // Orange
  "#2ECC71", // Emerald
  "#FF00FF", // Magenta
  "#00FF00", // Lime
  "#FF1493", // Deep Pink
  "#1E90FF", // Dodger Blue
  "#FFD700", // Gold
  "#32CD32", // Lime Green
  "#9400D3", // Dark Violet
  // Add more colors as needed...
];

const AverageExperienceCategory: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { averageExperienceCategory } = useSelector(
    (state: RootState) => state.averageExperienceCategoryReducer
  );

  const handleGetAverageExperienceCategory = async (
    filteredMonth: string = ""
  ) => {
    try {
      let res = await getAverageExperienceCategory(filteredMonth);
      dispatch(setAverageExperienceCategory(res.data));
    } catch (error) {
      console.log("error getAverageExperienceCategory: ", error);
    }
  };

  useEffect(() => {
    handleGetAverageExperienceCategory(filteredMonth);
  }, [filteredMonth]);

  const handleGetLastReports = async () => {
    try {
      const res = await getAverageExperienceCategoryLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getAverageExperienceCategoryLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!averageExperienceCategory) return;
    setData(
      averageExperienceCategory.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [averageExperienceCategory]);

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
        <h4>Average Years of Experience by category</h4>
        <input
          onChange={(e) => setFilteredMonth(e.target.value)}
          value={filteredMonth}
          className="form-control wu-lg-50"
          type="month"
        />
      </div>
      <div className="d-flex flex-column flex-md-row  align-items-center justify-content-center">
        <ResponsiveContainer height={400} aspect={!isMobile ? 1.8 : 0.8}>
          <PieChart>
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
        {/* <div>
          {data.map((x, idx) => (
            <div className="d-flex align-items-center" key={"AverageExperienceCategory" + idx}>
              <div
                className="wu-color-box me-2"
                style={{ backgroundColor: COLORS[idx] }}
              ></div>
              <div className="wu-color-text">{x.name}</div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default AverageExperienceCategory;
