import React, { useEffect, useState } from "react";
import Chart3 from "./chart3";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  getWeeklyCallsCenter,
  getWeeklyCallsCenterLatest,
  getYearlyCallsCenter,
  getYearlyCallsCenterLatest,
  getYearlyTotalMinCalls,
  getYearlyTotalMinCallsLatest,
} from "../../api";
import { setYearlyCallsCenter } from "../../store/slices/AskWIUT/YearlyCallsCenterSlice";
import { setYearlyTotalMinCalls } from "../../store/slices/AskWIUT/YearlyTotalMinCallsSlice";
import { setWeeklyCallsCenter } from "../../store/slices/AskWIUT/WeeklyCallsCenterSlice";

const AskwiutStatsDashboard = () => {
  const dispatch = useDispatch();
  const [filteredMonth, setFilteredMonth] = useState("");
  const [filteredMonth1, setFilteredMonth1] = useState("");
  const [filteredMonth2, setFilteredMonth2] = useState("");

  const { yearlyCallsCenter } = useSelector(
    (state: RootState) => state.yearlyCallsCenterReducer
  );
  const { yearlyTotalMinCalls } = useSelector(
    (state: RootState) => state.yearlyTotalMinCallsReducer
  );
  const { weeklyCallsCenter } = useSelector(
    (state: RootState) => state.weeklyCallsCenterReducer
  );

  const handleGetWeeklyCallsCenter = async (filteredMonth: string = "") => {
    try {
      let res = await getWeeklyCallsCenter(filteredMonth);
      dispatch(setWeeklyCallsCenter(res.data));
    } catch (error) {
      console.log("error getWeeklyCallsCenter: ", error);
    }
  };

  const handleGetLastReportsWeeklyCalls = async () => {
    try {
      const res = await getWeeklyCallsCenterLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth2(res.data[0].calculated_date);
      setFilteredMonth2("");
    } catch (error) {
      console.log("error getWeeklyCallsCenterLatest: ", error);
    }
  };
  const handleGetYearlyCallsCenter = async (filteredMonth: string = "") => {
    try {
      let res = await getYearlyCallsCenter(filteredMonth);
      dispatch(setYearlyCallsCenter(res.data));
    } catch (error) {
      console.log("error getYearlyCallsCenter: ", error);
    }
  };

  const handleGetLastReportsCallsCenter = async () => {
    try {
      const res = await getYearlyCallsCenterLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth1(res.data[0].calculated_date);
      setFilteredMonth1("");
    } catch (error) {
      console.log("error getYearlyCallsCenterLatest: ", error);
    }
  };

  const handleGetYearlyTotalMinCalls = async (filteredMonth: string = "") => {
    try {
      let res = await getYearlyTotalMinCalls(filteredMonth);
      dispatch(setYearlyTotalMinCalls(res.data));
    } catch (error) {
      console.log("error getYearlyTotalMinCalls: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getYearlyTotalMinCallsLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getYearlyTotalMinCallsLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
    handleGetLastReportsCallsCenter();
    handleGetLastReportsWeeklyCalls();
  }, []);

  useEffect(() => {
    handleGetYearlyCallsCenter(filteredMonth1);
  }, [filteredMonth1]);

  useEffect(() => {
    handleGetYearlyTotalMinCalls(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetWeeklyCallsCenter(filteredMonth2);
  }, [filteredMonth2]);

  const lastYearCalls = yearlyCallsCenter
    .slice()
    .sort((x, y) => parseInt(y.name) - parseInt(x.name))[0];
  const lastYearCallsMin = yearlyTotalMinCalls
    .slice()
    .sort((x, y) => parseInt(y.name) - parseInt(x.name))[0];
  let sumCallsWeekly = 0;
  for (let index = 0; index < weeklyCallsCenter.length; index++) {
    sumCallsWeekly = weeklyCallsCenter[index].value + sumCallsWeekly;
  }

  return (
    <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
      <div className="row">
        <div className="col-6 mb-4">
          {lastYearCalls && (
            <div className="card">
              <div className="card-body">
                <div className="card-title d-flex align-items-start justify-content-between">
                  <div className="avatar flex-shrink-0">
                    <span className="avatar-initial rounded bg-label-info">
                      <i className="bx bxs-phone-incoming"></i>
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
                      <Dropdown.Item href="/askwiut-stats">
                        View chart
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <span className="d-block mb-1">Yearly Number of Calls</span>
                <h3 className="card-title text-nowrap mb-2">
                  {lastYearCalls.value}
                </h3>
                <small className="text-info fw-medium">
                  {lastYearCalls.name}
                </small>
              </div>
            </div>
          )}
        </div>
        {lastYearCallsMin && (
          <div className="col-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title d-flex align-items-start justify-content-between">
                  <div className="avatar flex-shrink-0">
                    <span className="avatar-initial rounded bg-label-warning">
                      <i className="bx bxs-time-five"></i>
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
                      <Dropdown.Item href="/askwiut-stats">
                        View chart
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <span className="fw-medium d-block mb-1">
                  Yearly Total Minutes
                </span>
                <h3 className="card-title mb-2">{lastYearCallsMin.value}</h3>
                <small className="text-warning fw-medium">
                  {lastYearCallsMin.name}
                </small>
              </div>
            </div>
          </div>
        )}

        {weeklyCallsCenter && weeklyCallsCenter.length > 0 && (
          <div className="col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between flex-sm-row flex-column gap-3 relative">
                  <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                    <div className="card-title">
                      <h5 className="text-nowrap mb-2">
                        Weekly calls for <br />
                        the Call Center
                      </h5>
                      <span className="badge bg-label-warning rounded-pill">
                        Date: {weeklyCallsCenter[0]?.calculated_date}
                      </span>
                    </div>
                    <div className="mt-sm-auto d-flex align-items-end">
                      <h3 className="mb-0">{sumCallsWeekly}</h3>
                    </div>
                  </div>
                  <Chart3 weeklyCallsCenter={weeklyCallsCenter} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AskwiutStatsDashboard;
