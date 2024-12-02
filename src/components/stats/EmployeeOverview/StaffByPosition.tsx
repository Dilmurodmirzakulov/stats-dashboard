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
} from "recharts";
import { RootState } from "../../../store";
import { getPositionProportions } from "../../../api/EmployeeOverview/positionProportion/getPositionProportions";
import { setPositionProportions } from "../../../store/slices/EmployeeOverview/positionProportionsSlice";
import { getPositionProportionsLatest, getPositions } from "../../../api";
import { setPositions } from "../../../store/slices/EmployeeOverview/positionsSlice";

const StaffByPosition: FC = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");
  const { positions } = useSelector(
    (state: RootState) => state.positionsReducer
  );
  const { positionProportions } = useSelector(
    (state: RootState) => state.positionProportionsReducer
  );

  const handleGetPositions = async () => {
    try {
      const res = await getPositions();
      dispatch(setPositions(res.data));
    } catch (error) {
      console.log("getPositions error:", error);
    }
  };

  const handleGetPosProps = async (filteredMonth: string = "") => {
    try {
      let res = await getPositionProportions(filteredMonth);
      dispatch(setPositionProportions(res.data));
    } catch (error) {
      console.log("error getPositionProportions: ", error);
    }
  };

  useEffect(() => {
    handleGetPosProps(filteredMonth);
  }, [filteredMonth]);

  const handleGetLastReports = async () => {
    try {
      const res = await getPositionProportionsLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getPositionProportionsLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    setData(
      positionProportions.map((x) => ({
        name: positions.find((y) => y.id == x.position_id)?.name,
        Quantity: x.value,
      }))
    );
  }, [positionProportions, positions]);

  useEffect(() => {
    handleGetPositions();
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
        <h4>Staff proportion by position</h4>
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
          <BarChart
            layout="vertical"
            width={isMobile ? 300 : 450}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" hide={isMobile} />
            <Tooltip />
            {/* <Legend /> */}

            <Bar dataKey="Quantity" fill="#C7293F">
              <LabelList
                dataKey="Quantity"
                position="right"
                style={{ fill: "#C7293F" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default StaffByPosition;
