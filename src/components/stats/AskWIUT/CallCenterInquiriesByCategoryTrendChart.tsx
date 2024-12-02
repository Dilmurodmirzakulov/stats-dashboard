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
  Legend,
} from "recharts";
import { RootState } from "../../../store";
import {
  getCallCenterInquiriesByCategoryTrend,
  getTrendYearsNames,
  getTrendYearsNamesLatest,
  TrendYearsNamesData,
} from "../../../api";
import { setCallCenterInquiriesByCategoryTrend } from "../../../store/slices/AskWIUT/CallCenterInquiriesByCategoryTrendSlice";
import { getCallCenterInquiriesByCategoryTrendLatest } from "../../../api/AskWIUT/CallCenterInquiriesByCategoryTrend/latest";

const CallCenterInquiriesByCategoryTrendChart: FC = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");
  const [filteredMonth1, setFilteredMonth1] = useState("");
  const [trendYearsNames, setTrendYearsNames] = useState<
    TrendYearsNamesData[] | null
  >(null);

  const { callCenterInquiriesByCategoryTrend } = useSelector(
    (state: RootState) => state.callCenterInquiriesByCategoryTrendReducer
  );
  const handleGetCallCenterInquiriesByCategoryTrend = async (
    filteredMonth: string = ""
  ) => {
    try {
      let res = await getCallCenterInquiriesByCategoryTrend(filteredMonth);
      dispatch(setCallCenterInquiriesByCategoryTrend(res.data));
    } catch (error) {
      console.log("error getCallCenterInquiriesByCategoryTrend: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getCallCenterInquiriesByCategoryTrendLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getActiveUserLatest: ", error);
    }
  };

  const handleGetLastTrendYearsNames = async () => {
    try {
      const res = await getTrendYearsNamesLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth1(res.data[0].calculated_date);
      setFilteredMonth1("");
    } catch (error) {
      console.log("error getActiveUserLatest: ", error);
    }
  };

  const handleGetTrendYearsNames = async (filteredMonth: string = "") => {
    try {
      let res = await getTrendYearsNames(filteredMonth);
      setTrendYearsNames(res.data);
    } catch (error) {
      console.log("error getTrendYearsNames: ", error);
    }
  };

  useEffect(() => {
    handleGetCallCenterInquiriesByCategoryTrend(filteredMonth);
    handleGetTrendYearsNames(filteredMonth1);
  }, [filteredMonth, filteredMonth1]);

  useEffect(() => {
    handleGetLastReports();
    handleGetLastTrendYearsNames();
  }, []);

  useEffect(() => {
    if (!callCenterInquiriesByCategoryTrend) {
      console.log("No bot inquiries trend data available");
      return;
    }
    if (!trendYearsNames || trendYearsNames.length === 0) {
      console.log("No trend years names data available");
      return;
    }

    setData(
      callCenterInquiriesByCategoryTrend.map((x) => ({
        name: x.name,
        [trendYearsNames[0].name1]: x.value1,
        [trendYearsNames[0].name2]: x.value2,
        [trendYearsNames[0].name3]: x.value3,
      }))
    );
  }, [callCenterInquiriesByCategoryTrend, trendYearsNames]);

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

  const legendFormatter = (value: string) => {
    if (!trendYearsNames || !(trendYearsNames.length > 0)) return;
    if (value === "value1") return trendYearsNames[0].name1;
    if (value === "value2") return trendYearsNames[0].name2;
    if (value === "value3") return trendYearsNames[0].name3;
    return value;
  };

  return (
    <>
      <div className="d-md-flex align-items-center justify-content-between mb-3">
        <div className="row w-100">
          <div className="col-md-6">
            <label className="form-label" htmlFor="calculated-month">
              Calculated month
            </label>
            <input
              id="calculated-month"
              onChange={(e) => setFilteredMonth(e.target.value)}
              value={filteredMonth}
              className="form-control"
              type="month"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="trend-years">
              Trend years
            </label>
            <input
              id="trend-years"
              onChange={(e) => setFilteredMonth1(e.target.value)}
              value={filteredMonth1}
              className="form-control"
              type="month"
            />
          </div>
        </div>
      </div>
      {!trendYearsNames || !(trendYearsNames.length > 0) ? (
        <div>Trend Years not found in the selected time</div>
      ) : (
        <div className="d-flex justify-content-center trend-chart">
          <ResponsiveContainer
            width="100%"
            height="100%"
            aspect={isMobile ? 1 : 1.8}
          >
            <BarChart
              data={data}
              margin={{
                top: 30,
                left: 80,
                right: 20,
                bottom: 120,
              }}
            >
              <Tooltip />
              <Bar dataKey={trendYearsNames[0].name1} fill="#264f9d">
                <LabelList
                  dataKey={trendYearsNames[0].name1}
                  content={renderCustomizedLabel}
                />
              </Bar>
              <Bar dataKey={trendYearsNames[0].name2} fill="#C7293f">
                <LabelList
                  dataKey={trendYearsNames[0].name2}
                  content={renderCustomizedLabel}
                />
              </Bar>
              <Bar dataKey={trendYearsNames[0].name3} fill="#26693a">
                <LabelList
                  dataKey={trendYearsNames[0].name3}
                  content={renderCustomizedLabel}
                />
              </Bar>
              <XAxis
                dataKey={"name"}
                tick={(props) => <CustomizedAxisTick {...props} />}
                interval={0}
              />
              <Legend
                layout="horizontal"
                align="center"
                verticalAlign="bottom"
                formatter={legendFormatter}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default CallCenterInquiriesByCategoryTrendChart;
