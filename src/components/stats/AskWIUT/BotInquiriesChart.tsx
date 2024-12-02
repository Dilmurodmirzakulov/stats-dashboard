import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  BarChart,
  Bar,
  LabelList,
  LabelProps,
  YAxis,
} from "recharts";
import { RootState } from "../../../store";
import { getBotInquiries } from "../../../api";
import { setBotInquiries } from "../../../store/slices/AskWIUT/BotInquiriesSlice";
import { getBotInquiriesLatest } from "../../../api/AskWIUT/BotInquiries/latest";

const BotInquiriesChart = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { botInquiries } = useSelector(
    (state: RootState) => state.botInquiriesReducer
  );
  const handleGetBotInquiries = async (filteredMonth: string = "") => {
    try {
      let res = await getBotInquiries(filteredMonth);
      dispatch(setBotInquiries(res.data));
    } catch (error) {
      console.log("error getBotInquiries: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getBotInquiriesLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getActiveUserLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetBotInquiries(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!botInquiries) return;
    setData(
      botInquiries.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [botInquiries]);

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
      <text x={0} y={0} dy={5} textAnchor="end" fill="#666" fontWeight={700}>
        {payload.value}
      </text>
    </g>
  );

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
      <div className="d-flex justify-content-center">
        <ResponsiveContainer
          width="100%"
          height="100%"
          aspect={isMobile ? 1 : 1.8}
        >
          <BarChart
            layout="vertical"
            data={data}
            margin={{
              top: 30,
              left: 80,
              right: 40,
            }}
          >
            <Tooltip />
            <Bar dataKey="value" fill="#C7293F">
              {/* <LabelList dataKey="value" content={renderCustomizedLabel} /> */}
              <LabelList
                dataKey="value"
                position="right"
                style={{ fill: "#666" }}
              />
            </Bar>
            <XAxis type="number" />
            <YAxis
              type="category"
              dataKey="name"
              tick={(props) => <CustomizedAxisTick {...props} />}
              interval={0}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default BotInquiriesChart;
