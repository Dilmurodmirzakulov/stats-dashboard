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
import { getTerminationReason } from "../../../api";
import { setTerminationReason } from "../../../store/slices/Turnover/terminationReasonSlice";
const COLORS = [
  "#4473C5",
  "#ED7D31",
  "#A5A5A5",
  "#FFC000",
  "#5A9BD5",
  "#71AD48",
  "#2C447A",
  "#9E480D",
];
const TerminationReason: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");
  const { terminationReason } = useSelector(
    (state: RootState) => state.terminationReasonReducer
  );
  const handleGetTerminationReason = async (filteredMonth: string = "") => {
    try {
      let res = await getTerminationReason(filteredMonth);
      dispatch(setTerminationReason(res.data));
    } catch (error) {
      console.log("error getPositionProportions: ", error);
    }
  };

  useEffect(() => {
    handleGetTerminationReason(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    if (!terminationReason) return;
    setData(
      terminationReason.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [terminationReason]);

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
        <h4>Termination by reason</h4>
        <input
          onChange={(e) => setFilteredMonth(e.target.value)}
          value={filteredMonth}
          className="form-control wu-lg-50"
          type="month"
        />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between">
        <ResponsiveContainer
          width="100%"
          height={400}
          aspect={!isMobile ? 1.8 : 0.8}
        >
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
            <Legend layout="horizontal" align="center" verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default TerminationReason;
