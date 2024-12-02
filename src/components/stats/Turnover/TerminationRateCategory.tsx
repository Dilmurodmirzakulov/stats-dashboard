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
import {
  getTerminationRateCategory,
  getTerminationRateCategoryLatest,
} from "../../../api";
import { setTerminationRateCategory } from "../../../store/slices/Turnover/terminationRateCategorySlice";

const TerminationRateCategory: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");
  const { terminationRateCategory } = useSelector(
    (state: RootState) => state.terminationRateCategoryReducer
  );
  const handleGetTerminationRateCategory = async (
    filteredMonth: string = ""
  ) => {
    try {
      let res = await getTerminationRateCategory(filteredMonth);
      dispatch(setTerminationRateCategory(res.data));
    } catch (error) {
      console.log("error getTerminationRateCategory: ", error);
    }
  };

  useEffect(() => {
    handleGetTerminationRateCategory(filteredMonth);
  }, [filteredMonth]);

  const handleGetLastReports = async () => {
    try {
      const res = await getTerminationRateCategoryLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getTerminationRateCategoryLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!terminationRateCategory) return;
    setData(
      terminationRateCategory.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [terminationRateCategory]);

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

  return (
    <>
      <div className="d-md-flex align-items-center justify-content-between mb-3">
        <h4>Termination rate by category</h4>
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
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="value" fill="#C7293F">
              <LabelList dataKey="value" content={renderCustomizedLabel} />
              {/* <LabelList
                dataKey="name"
                position="bottom"
                style={{ fill: "#C7293F" }}
              /> */}
            </Bar>
            <XAxis dataKey={"name"} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default TerminationRateCategory;
