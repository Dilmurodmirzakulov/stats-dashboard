import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { RootState } from "../../../store";
import { getGenders, getGendersLatest } from "../../../api";
import { setGenders } from "../../../store/slices/EmployeeOverview/genderSlice";

const StaffByGender: FC = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [filteredMonth, setFilteredMonth] = useState("");
  const [data, setData] = useState<null | any>();
  const { genders } = useSelector((state: RootState) => state.gendersReducer);

  useEffect(() => {
    if (!genders) return;
    setData(
      genders.map((x) => ({
        name: `${x.gender == 1 ? "Male" : ""}${x.gender == 2 ? "Female" : ""}`,
        value: x.value,
      }))
    );
  }, [genders]);

  const handleGetGenders = async (filteredMonth: string = "") => {
    try {
      let res = await getGenders(filteredMonth);
      dispatch(setGenders(res.data));
    } catch (error) {
      console.log("error getGenders: ", error);
    }
  };

  useEffect(() => {
    handleGetGenders(filteredMonth);
  }, [filteredMonth]);

  const handleGetLastReports = async () => {
    try {
      const res = await getGendersLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getGendersLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    const checkMobileSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobileSize();

    window.addEventListener("resize", checkMobileSize);

    return () => window.removeEventListener("resize", checkMobileSize);
  }, []);

  const [xAxisPadding, setXAxisPadding] = useState({ left: 120, right: 120 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        // 576px is a common breakpoint for 'sm' devices
        setXAxisPadding({ left: 60, right: 60 });
      } else {
        setXAxisPadding({ left: 120, right: 120 });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="d-md-flex align-items-center justify-content-between mb-3">
        <h4>Staff by Gender</h4>
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
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
            barSize={50}
          >
            <XAxis dataKey="name" scale="point" padding={xAxisPadding} />
            <YAxis dataKey={"value"} />
            <Tooltip />

            {/* <Bar
              dataKey="Persentage"
              fill="#C7293F"
              background={{ fill: "#eee" }}
            /> */}
            <Bar dataKey="value" fill="#C7293F" background={{ fill: "#eee" }}>
              <LabelList
                dataKey="value"
                position="top"
                content={({ x, y, width, value }) => {
                  return (
                    <text
                      x={x}
                      y={y}
                      fill="#000"
                      textAnchor="right"
                      dominantBaseline="bottom"
                    >
                      {value + "%"}
                    </text>
                  );
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default StaffByGender;
