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
  LabelProps,
  Line,
  ComposedChart,
} from "recharts";
import { RootState } from "../../../store";
import { getTopTenSignedPersonel } from "../../../api";
import { setTopTenSignedPersonel } from "../../../store/slices/DMS/topTenSignedPersonelSlice";
import { getTopTenSignedPersonelLatest } from "../../../api/DMS/TopTenSignedPersonel/latest";

const TopTenSignedPersonelChart: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { topTenSignedPersonel } = useSelector(
    (state: RootState) => state.topTenSignedPersonelReducer
  );
  const handleGetTopTenSignedPersonel = async (filteredMonth: string = "") => {
    try {
      let res = await getTopTenSignedPersonel(filteredMonth);
      dispatch(setTopTenSignedPersonel(res.data));
    } catch (error) {
      console.log("error getTopTenSignedPersonel: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getTopTenSignedPersonelLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getTopTenSignedPersonelLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetTopTenSignedPersonel(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!topTenSignedPersonel) return;
    setData(
      topTenSignedPersonel.map((x) => ({
        name: x.name,
        value: x.value,
        time: x.time,
      }))
    );
  }, [topTenSignedPersonel]);

  useEffect(() => {
    const checkMobileSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobileSize();

    window.addEventListener("resize", checkMobileSize);

    return () => window.removeEventListener("resize", checkMobileSize);
  }, []);

  const renderCustomizedLabel = (props: LabelProps) => {
    const { x, y, width, height, value } = props;
    const radius = 10;

    // make sure to handle possibly undefined values appropriately
    if (
      typeof x === "number" &&
      typeof y === "number" &&
      typeof width === "number" &&
      typeof height === "number" &&
      value
    ) {
      return (
        <g>
          <text
            x={x + width / 2}
            y={y - radius}
            fill="#000"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {value}
          </text>
        </g>
      );
    }

    return null;
  };

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
        fontWeight={700}
      >
        {payload.value}
      </text>
    </g>
  );

  return (
    <>
      <div className="d-md-flex align-items-center justify-content-between mb-3">
        <h4>Top 10 Signed Personnel</h4>
        <input
          onChange={(e) => setFilteredMonth(e.target.value)}
          value={filteredMonth}
          className="form-control wu-lg-50"
          type="month"
        />
      </div>
      <div className="d-flex justify-content-center">
        <ResponsiveContainer
          width="100%"
          height="90%"
          aspect={isMobile ? 1 : 1.8}
        >
          <ComposedChart
            width={150}
            height={40}
            data={data}
            margin={{
              left: 50,
              right: 20,
              bottom: 120,
            }}
          >
            <Tooltip />
            <Bar dataKey="value" fill="#C7293F">
              <LabelList dataKey="value" content={renderCustomizedLabel} />
              {/* <LabelList
                dataKey="name"
                position="bottom"
                style={{ fill: "#C7293F" }}
              /> */}
            </Bar>
            <Line
              type="monotone"
              dataKey={"time"}
              yAxisId="right"
              stroke="#ff7300"
            >
              <LabelList dataKey="time" content={renderCustomizedLabel} />
            </Line>
            <XAxis
              dataKey={"name"}
              tick={(props) => <CustomizedAxisTick {...props} />}
              interval={0}
            />
            <YAxis dataKey={"value"} />
            <YAxis
              dataKey={"time"}
              orientation="right"
              yAxisId="right"
              stroke="#ff7300"
              label={{
                value: "Time",
                angle: -90,
                position: "insideRight",
                offset: 0,
                style: { textAnchor: "middle", fill: "#ff7300" },
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default TopTenSignedPersonelChart;
