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
  LineChart,
  Legend,
  Line,
} from "recharts";
import { RootState } from "../../../store";
import {
  getReadvertisedPositions,
  getReadvertisedPositionsLatest,
} from "../../../api";
import { setReadvertisedPositions } from "../../../store/slices/Recruitment/readvertisedPositionsSlice";

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

const ReadvertisedPositions: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [series, setSeries] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");
  const { readvertisedPositions } = useSelector(
    (state: RootState) => state.readvertisedPositionsReducer
  );

  const handleGetReadvertisedPositions = async (filteredMonth: string = "") => {
    try {
      let res = await getReadvertisedPositions(filteredMonth);
      dispatch(setReadvertisedPositions(res.data));
    } catch (error) {
      console.log("error getReadvertisedPositions: ", error);
    }
  };

  useEffect(() => {
    handleGetReadvertisedPositions(filteredMonth);
  }, [filteredMonth]);

  const handleGetLastReports = async () => {
    try {
      const res = await getReadvertisedPositionsLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getReadvertisedPositionsLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!readvertisedPositions) return;
    setSeries(
      readvertisedPositions.map((x) => ({
        name: "Termination",
        data: [{ category: x.name, value: x.value }],
      }))
    );
  }, [readvertisedPositions]);

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
        <h4>Number of re-advertised positions by month</h4>
        <input
          onChange={(e) => setFilteredMonth(e.target.value)}
          value={filteredMonth}
          className="form-control wu-lg-50"
          type="month"
        />
      </div>
      <div className="d-flex justify-content-center">
        <ResponsiveContainer width="100%" aspect={!isMobile ? 1.6 : 0.8}>
          <LineChart
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 20,
            }}
          >
            <XAxis
              dataKey="category"
              type="category"
              allowDuplicatedCategory={false}
              interval={0}
              tick={(props) => <CustomizedAxisTick {...props} />}
            />
            <YAxis dataKey="value" />
            <Tooltip />
            {series &&
              series.map((s: { data: any; name: string }) => (
                <Line
                  dataKey="value"
                  label
                  data={s.data}
                  name={s.name}
                  key={s.name}
                />
              ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ReadvertisedPositions;
