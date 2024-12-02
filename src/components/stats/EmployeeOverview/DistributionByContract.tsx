import React, { FC, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { getContractDists, getContractDistsLatest } from "../../../api";
import { setContractDists } from "../../../store/slices/EmployeeOverview/contractDistributionSlice";

interface DataItem {
  name: string;
  value: number;
}

const data: DataItem[] = [
  { name: "Regular contract", value: 87 },
  { name: "Labor contract", value: 13 },
];
const COLORS = ["#264F9E", "#C72A3F"];

const DistributionByContract: FC = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [filteredMonth, setFilteredMonth] = useState("");
  const [data, setData] = useState<null | any>();
  const { contractDists } = useSelector(
    (state: RootState) => state.contractDistributionReducer
  );

  const handleGetContractDists = async (filteredMonth: string = "") => {
    try {
      let res = await getContractDists(filteredMonth);
      dispatch(setContractDists(res.data));
    } catch (error) {
      console.log("error getContractDists: ", error);
    }
  };

  useEffect(() => {
    handleGetContractDists(filteredMonth);
  }, [filteredMonth]);

  const handleGetLastReports = async () => {
    try {
      const res = await getContractDistsLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getContractDistsLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    setData(
      contractDists.map((x) => ({
        name: `${x.contract_type == 1 ? "Male" : ""}${
          x.contract_type == 2 ? "Female" : ""
        }`,
        value: x.value,
      }))
    );
  }, [contractDists]);

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
        <h4>Distribution by contract</h4>
        <input
          onChange={(e) => setFilteredMonth(e.target.value)}
          value={filteredMonth}
          className="form-control wu-lg-50"
          type="month"
        />
      </div>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
        <ResponsiveContainer
          width="100%"
          height={250}
          aspect={isMobile ? 1.2 : 2}
        >
          <PieChart width={250} height={250}>
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
                data.map((_entry: any, index: number) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default DistributionByContract;
