import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getGenders, getGendersLatest } from "../../api";
import { setGenders } from "../../store/slices/EmployeeOverview/genderSlice";

const StaffByGenderDashboard = () => {
  const dispatch = useDispatch();
  const [filteredMonth, setFilteredMonth] = useState("");
  const { genders } = useSelector((state: RootState) => state.gendersReducer);

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

  console.log("genders", genders);

  return (
    <div className="col-lg-4 col-md-4 order-1">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-6 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title d-flex align-items-start justify-content-between">
                <div className="avatar flex-shrink-0">
                  <span className={`avatar-initial rounded bg-label-primary`}>
                    M
                  </span>
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
              <span className="fw-medium d-block mb-1">Staff by gender</span>
              <h3 className="card-title mb-2">
                {genders.find((x) => x.gender == 1)?.value}%
              </h3>
              <small className="text-primary fw-medium">Male</small>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-6 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title d-flex align-items-start justify-content-between">
                <div className="avatar flex-shrink-0">
                  <span className={`avatar-initial rounded bg-label-danger`}>
                    w
                  </span>
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
              <span className="fw-medium d-block mb-1">Staff by gender</span>
              <h3 className="card-title mb-2">
                {genders.find((x) => x.gender == 2)?.value}%
              </h3>
              <small className="text-danger fw-medium">Female</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffByGenderDashboard;
