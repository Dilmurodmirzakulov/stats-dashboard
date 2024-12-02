import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getStaffPosition, getStaffPositionLatest } from "../../api";
import { setStaffPosition } from "../../store/slices/EmployeeDemographics/staffPositionSlice";

const StaffByPostionDashboard = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { staffPosition } = useSelector(
    (state: RootState) => state.staffPositionReducer
  );
  const handleGetStaffPosition = async (filteredMonth: string = "") => {
    try {
      let res = await getStaffPosition(filteredMonth);
      dispatch(setStaffPosition(res.data));
    } catch (error) {
      console.log("error getStaffPosition: ", error);
    }
  };

  useEffect(() => {
    handleGetStaffPosition(filteredMonth);
  }, [filteredMonth]);

  const handleGetLastReports = async () => {
    try {
      const res = await getStaffPositionLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getStaffPositionLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  return (
    <div className="col-md-6 col-lg-4 order-2 mb-4">
      <div className="card h-100">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="card-title m-0 me-2">Staff by position</h5>
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
          <ul className="p-0 m-0">
            {staffPosition.map((x, idx) => (
              <li
                className="d-flex mb-4 pb-1"
                key={"staff-position-dashboard-item-" + idx}
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
                      (idx == 6 && "danger") ||
                      (idx == 7 && "primary") ||
                      (idx == 8 && "warning") ||
                      (idx == 9 && "danger") ||
                      (idx == 10 && "info") ||
                      (idx == 11 && "primary") ||
                      (idx == 12 && "warning") ||
                      (idx > 13 && "danger")
                    }`}
                  >
                    {x.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                  <div className="me-2">
                    <h6 className="mb-0">{x.name}</h6>
                  </div>
                  <div className="user-progress d-flex align-items-center gap-1">
                    <h6 className="mb-0">{x.value}</h6>{" "}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StaffByPostionDashboard;
