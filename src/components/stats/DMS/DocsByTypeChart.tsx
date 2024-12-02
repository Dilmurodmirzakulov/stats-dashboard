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
import { getDocsByType } from "../../../api";
import { setDocsByType } from "../../../store/slices/DMS/docsByTypeSlice";
import { getDocsByTypeLatest } from "../../../api/DMS/DocsByType/latest";

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

const DocsByTypeChart: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { docsByType } = useSelector(
    (state: RootState) => state.docsByTypeReducer
  );
  const handleGetDocsByType = async (filteredMonth: string = "") => {
    try {
      let res = await getDocsByType(filteredMonth);
      dispatch(setDocsByType(res.data));
    } catch (error) {
      console.log("error getPositionProportions: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getDocsByTypeLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getDocsByTypeLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetDocsByType(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!docsByType) return;
    setData(
      docsByType.map((x) => ({
        name: x.name,
        value: x.value,
      }))
    );
  }, [docsByType]);

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
        <h4 id="doc-by-type">Documents by Type</h4>
        <input
          onChange={(e) => setFilteredMonth(e.target.value)}
          value={filteredMonth}
          className="form-control wu-lg-50"
          type="month"
        />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between">
        <ResponsiveContainer width="100%" aspect={!isMobile ? 1.8 : 1}>
          <PieChart>
            <Pie
              data={data}
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

export default DocsByTypeChart;
