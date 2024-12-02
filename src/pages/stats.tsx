import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import Chart1 from "../components/dashboard/chart1";
import Chart2 from "../components/dashboard/chart2";
import Chart3 from "../components/dashboard/chart3";
import Chart4 from "../components/dashboard/chart4";
import Chart5 from "../components/dashboard/chart5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getEmployeeStats, getStaffNationality } from "../api";
import { setStaffNationality } from "../store/slices/EmployeeDemographics/staffNationalitySlice";
import { setEmployeeStats } from "../store/slices/EmployeeOverview/employeeStatsSlice";
import Chart6 from "../components/dashboard/chart6";
import StaffByPostionDashboard from "../components/dashboard/StaffByPostionDashboard";
import StaffByGenderDashboard from "../components/dashboard/StaffByGenderDashboard";
import AskwiutStatsDashboard from "../components/dashboard/AskwiutStatsDashboard";
import Chart7 from "../components/dashboard/chart7";
import DocumentsStatusDistDashboard from "../components/dashboard/DocumentsStatusDistDashboard";

const Stats = () => {
  const dispatch = useDispatch();
  const { staffNationality } = useSelector(
    (state: RootState) => state.staffNationalityReducer
  );
  const { employeeStats } = useSelector(
    (state: RootState) => state.employeeStatsReducer
  );

  const handleGetStaffNationality = async () => {
    try {
      let res = await getStaffNationality();
      dispatch(setStaffNationality(res.data));
    } catch (error) {
      console.log("getStaffNationality error:", error);
    }
  };

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
    handleGetStaffNationality();
  }, []);

  console.log("employee stats", staffNationality);
  return (
    <div>
      <div className="row">
        <div className="col-lg-8 mb-4 order-0">
          <div className="card">
            <div className="d-flex align-items-end row">
              <div className="col-sm-7">
                <div className="card-body">
                  <h5 className="card-title text-primary">Welcome</h5>
                  <p className="mb-3">
                    Today is a great day. Please navigate through the sections
                    in the main menu to access detailed charts for each
                    corresponding section.
                  </p>
                  {/* <button className="btn btn-sm btn-outline-primary">
                    Go to all charts
                  </button> */}
                </div>
              </div>
              <div className="col-sm-5 text-center text-sm-left">
                <div className="card-body pb-0 px-0 px-md-4">
                  <img
                    src={require("../assets/img/girsl.png")}
                    alt=""
                    height={140}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <StaffByGenderDashboard />
        <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
          <div className="card">
            <div className="row row-bordered g-0">
              <div className="col-md-8">
                <h5 className="card-header m-0 me-2 pb-3">
                  Top 10 Signed Personnel
                </h5>
                <Chart1 />
              </div>
              <div className="col-md-4">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="m-0 me-2">Documents by Type</h5>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant=""
                        className="btn p-0 without-icon"
                        id="dropdown-basic"
                      >
                        <i className="bx bx-dots-vertical-rounded"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/dm-s">View chart</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <Chart7 />

                  <DocumentsStatusDistDashboard />
                </div>
              </div>
            </div>
          </div>
        </div>
        <AskwiutStatsDashboard />
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
          <div className="card h-100">
            <div className="card-header d-flex align-items-center justify-content-between pb-0">
              <div className="card-title mb-0">
                <h5 className="m-0 me-2">Staffs Statistics</h5>
              </div>
              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  className="btn p-0 without-icon"
                  id="dropdown-basic"
                >
                  <i className="bx bx-dots-vertical-rounded"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/employee-demographics">
                    View chart
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3 position-relative">
                <div className="d-flex flex-column align-items-center gap-1">
                  <h2 className="mb-2">
                    {employeeStats &&
                      employeeStats.length > 0 &&
                      employeeStats.slice().sort((x, y) => y.value - x.value)[0]
                        .value}
                  </h2>
                  <span>Total Staffs</span>
                </div>
                <Chart4 />
              </div>
              <ul className="p-0 m-0">
                {staffNationality &&
                  staffNationality.length > 0 &&
                  staffNationality
                    .slice() // Create a shallow copy of the array
                    .sort((x, y) => y.value - x.value)
                    .map((x, idx) => (
                      <li
                        key={"staff-statistics-main-page-item-" + x.id}
                        className="d-flex mb-4 pb-1"
                      >
                        <div className="avatar flex-shrink-0 me-3">
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
                            {x.name.slice(0, 2).toUpperCase()}
                          </span>
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">{x.name}</h6>
                            <small className="text-muted">Staffs</small>
                          </div>
                          <div className="user-progress">
                            <small className="fw-medium">{x.value} %</small>
                          </div>
                        </div>
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 order-1 mb-4">
          <div className="card h-100">
            <div className="card-header d-flex align-items-center justify-content-between">
              <div className="card-title mb-0">
                <h5 className="m-0 me-2">Termination</h5>
              </div>
              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  className="btn p-0 without-icon"
                  id="dropdown-basic"
                >
                  <i className="bx bx-dots-vertical-rounded"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/employee-demographics">
                    View chart
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="card-body">
              <Chart5 />
              <Chart6 />
            </div>
          </div>
        </div>
        <StaffByPostionDashboard />
      </div>
    </div>
  );
};

export default Stats;
