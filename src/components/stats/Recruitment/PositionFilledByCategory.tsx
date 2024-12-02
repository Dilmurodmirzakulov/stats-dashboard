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
} from "recharts";
import { RootState } from "../../../store";
import { getPositionFilledByCategory } from "../../../api";
import { setPositionFilledByCategory } from "../../../store/slices/Recruitment/positionFilledByCategorySlice";
import { getPositionFilledByCategoryLatest } from "../../../api";

const PositionFilledByCategory: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { positionFilledByCategory } = useSelector(
    (state: RootState) => state.positionFilledByCategoryReducer
  );
  const handleGetPositionFilledByCategory = async (
    filteredMonth: string = ""
  ) => {
    try {
      let res = await getPositionFilledByCategory(filteredMonth);
      dispatch(setPositionFilledByCategory(res.data));
    } catch (error) {
      console.log("error getPositionFilledByCategory: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getPositionFilledByCategoryLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getPositionFilledByCategoryLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetPositionFilledByCategory(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!positionFilledByCategory) return;
    setData(
      positionFilledByCategory.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [positionFilledByCategory]);

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
        <h4>Number of positions filled by category</h4>
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
          height="100%"
          aspect={isMobile ? 1 : 1.8}
        >
          <BarChart
            width={150}
            height={40}
            data={data}
            margin={{
              left: 50,
              right: 20,
              bottom: 100,
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
            <XAxis
              dataKey={"name"}
              tick={(props) => <CustomizedAxisTick {...props} />}
              interval={0}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default PositionFilledByCategory;
