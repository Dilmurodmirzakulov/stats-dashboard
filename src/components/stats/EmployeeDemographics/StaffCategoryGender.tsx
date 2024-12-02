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
import { getStaffCategoryGender } from "../../../api";
import { setStaffCategoryGender } from "../../../store/slices/EmployeeDemographics/staffCategoryGenderSlice";
import { getStaffCategoryGenderLatest } from "../../../api/EmployeeDemographics/StaffCategoryGender/latest";

const COLORS = ["#264F9E", "#C72A3F"];

const StaffCategoryGender: FC = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { staffCategoryGender } = useSelector(
    (state: RootState) => state.staffCategoryGenderReducer
  );

  const handleGetStaffCategoryGender = async (filteredMonth: string = "") => {
    try {
      let res = await getStaffCategoryGender(filteredMonth);
      dispatch(setStaffCategoryGender(res.data));
    } catch (error) {
      console.log("error getStaffCategoryGender: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getStaffCategoryGenderLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getStaffCategoryGenderLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetStaffCategoryGender(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetLastReports();
  }, []);

  useEffect(() => {
    if (!staffCategoryGender) return;
    setData(
      staffCategoryGender.map((x) => {
        return [
          {
            name: "Male",
            value: x.male,
          },
          {
            name: "Female",
            value: x.female,
          },
        ];
      })
    );
  }, [staffCategoryGender]);

  return (
    <>
      <div className="d-md-flex align-items-center justify-content-between mb-3">
        <h4>Staff Category by Gender</h4>
        <input
          onChange={(e) => setFilteredMonth(e.target.value)}
          value={filteredMonth}
          className="form-control wu-lg-50"
          type="month"
        />
      </div>
      <div className="row gy-3">
        {data &&
          data.map((x: any, idx: number) => (
            <div className="col-md-6" key={"chart-staff-category-index-" + idx}>
              <h6 className="mb-2 text-center">
                {staffCategoryGender[idx]?.name}
              </h6>
              <div className="d-flex align-items-center justify-content-center">
                <ResponsiveContainer width="100%" height={250} aspect={1.4}>
                  <PieChart width={260} height={100}>
                    <Pie
                      data={data[idx]}
                      innerRadius={25}
                      outerRadius={60}
                      fill="#8884d8"
                      paddingAngle={1}
                      dataKey="value"
                      label
                    >
                      {data[idx].map((entry: any, index: number) => (
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
            </div>
          ))}
      </div>
    </>
  );
};

export default StaffCategoryGender;
