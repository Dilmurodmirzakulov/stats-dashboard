import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
} from "recharts";
import { RootState } from "../../../store";
import { getAges, getAverageAges, getAverageAgesLatest } from "../../../api";
import { setAges } from "../../../store/slices/EmployeeOverview/agesSlice";
import { setAverageAges } from "../../../store/slices/EmployeeOverview/averageAgesSlice";

const COLORS = ["#264F9E", "#C72A3F"];
interface CustomizedAxisTickProps {
  x: number;
  y: number;
  stroke?: string;
  payload: any; // Define a more specific type if possible
}
const CustomizedAxisTick: React.FC<CustomizedAxisTickProps> = ({
  x,
  y,
  stroke,
  payload,
}) => (
  <g transform={`translate(${x},${y})`}>
    <text
      x={0}
      y={0}
      dy={16}
      textAnchor="end"
      fill="#666"
      transform="rotate(-35)"
    >
      {payload.value}
    </text>
  </g>
);

const AverageStaffAge: FC = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { ages } = useSelector((state: RootState) => state.agesReducer);
  const { averageAges } = useSelector(
    (state: RootState) => state.averageAgesReducer
  );
  const handleGetAges = async () => {
    try {
      const res = await getAges();
      dispatch(setAges(res.data));
    } catch (error) {
      console.log("getAges error:", error);
    }
  };
  const handleGetAverageAges = async (filteredMonth: string = "") => {
    try {
      let res = await getAverageAges(filteredMonth);
      dispatch(setAverageAges(res.data));
    } catch (error) {
      console.log("error getAverageAges: ", error);
    }
  };

  useEffect(() => {
    handleGetAverageAges(filteredMonth);
  }, [filteredMonth]);

  const handleGetLastReports = async () => {
    try {
      const res = await getAverageAgesLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getAverageAgesLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    setData(
      averageAges
        .map((x) => ({
          name: ages.find((y) => y.id == x.age_id)?.name,
          age: x.value,
        }))
        .sort((a, b) => {
          if (!a.name && !b.name) return 0;
          if (!a.name) return 1;
          if (!b.name) return -1;
          return parseInt(a.name, 10) - parseInt(b.name, 10);
        })
    );
  }, [averageAges, ages]);

  useEffect(() => {
    handleGetAges();
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
        <h4>Average Staff Age</h4>
        <input
          onChange={(e) => setFilteredMonth(e.target.value)}
          value={filteredMonth}
          className="form-control wu-lg-50"
          type="month"
        />
      </div>
      <div className="d-flex justify-content-center">
        <ResponsiveContainer
          width={isMobile ? 300 : 450}
          height={270}
          aspect={isMobile ? 1 : 1.6}
        >
          <AreaChart
            width={isMobile ? 300 : 450}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 40,
            }}
          >
            <XAxis
              dataKey="name"
              interval={0}
              tick={(props) => <CustomizedAxisTick {...props} />}
            />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="age"
              stroke="#8AC8FF"
              fill="#8AC8FF"
              label
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default AverageStaffAge;
