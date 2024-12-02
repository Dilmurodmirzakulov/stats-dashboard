import React, { useEffect } from "react";
import StaffByDepartment from "../../components/stats/EmployeeOverview/StaffByDepartment";
import StaffByPosition from "../../components/stats/EmployeeOverview/StaffByPosition";
import DistributionByContract from "../../components/stats/EmployeeOverview/DistributionByContract";
import DistributionByShift from "../../components/stats/EmployeeOverview/DistributionByShift";
import AverageStaffAge from "../../components/stats/EmployeeOverview/AverageStaffAge";
import StaffByGender from "../../components/stats/EmployeeOverview/StaffByGender";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getEmployeeStats } from "../../api";
import { setEmployeeStats } from "../../store/slices/EmployeeOverview/employeeStatsSlice";

const EmployeeOverview = () => {
  const dispatch = useDispatch();
  const { employeeStats } = useSelector(
    (state: RootState) => state.employeeStatsReducer
  );

  const handleGetEmployeeStats = async () => {
    try {
      let res = await getEmployeeStats();
      dispatch(setEmployeeStats(res.data));
    } catch (error) {
      console.log("getEmployeeStats error:", error);
    }
  };

  useEffect(() => {
    handleGetEmployeeStats();
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Employee Overview</h4>
      </div>
      <div className="row">
        {employeeStats &&
          employeeStats.map((x, idx) => (
            <div
              className="col-6 col-lg-2 mb-4"
              key={"employee-stats-header-id-" + x.id}
            >
              <div className="card card-border-shadow-primary h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2 pb-1">
                    <div className="avatar me-2">
                      <span
                        className={`avatar-initial rounded bg-label-${
                          (idx == 0 && "primary") ||
                          (idx == 1 && "warning") ||
                          (idx == 2 && "danger") ||
                          (idx == 3 && "info") ||
                          (idx == 4 && "primary") ||
                          (idx == 5 && "warning") ||
                          (idx > 5 && "danger")
                        }`}
                      >
                        <i className="bx bx-group"></i>
                      </span>
                    </div>
                    <h4 className="ms-1 mb-0">{x.value}</h4>
                  </div>
                  <p className="mb-0">{x.name}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="row g-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <StaffByDepartment />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <StaffByPosition />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <DistributionByContract />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <DistributionByShift />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <AverageStaffAge />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <StaffByGender />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeOverview;
