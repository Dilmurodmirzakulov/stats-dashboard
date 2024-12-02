import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  ShiftDistData,
  createShiftDist,
  deleteShiftDist,
  getShiftDists,
  getShiftDistsLatest,
  updateShiftDist,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setShiftDists } from "../../../store/slices/EmployeeOverview/shiftDistributionSlice";
import { formatDate } from "../../../utils/custom";

const DistributionByShiftTable = () => {
  const dispatch = useDispatch();
  const { shiftDists } = useSelector(
    (state: RootState) => state.shiftDistributionReducer
  );

  const [shiftDist, setShiftDist] = useState<null | string>(null);
  const [shiftDistValue, setShiftDistValue] = useState<null | number>(null);
  const [shiftDistValueReport, setShiftDistValueReport] = useState<
    null | string
  >(null);

  const [shiftDistIdUpdate, setShiftDistIdUpdate] = useState<null | number>(
    null
  );
  const [shiftDistUpdate, setShiftDistUpdate] = useState<null | number>(null);
  const [shiftDistValueUpdate, setShiftDistValueUpdate] = useState<
    null | number
  >(null);
  const [shiftDistReportUpdate, setShiftDistReportUpdate] = useState<
    null | string
  >(null);

  const [filteredMonth, setFilteredMonth] = useState("");

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handleGetShiftDists = async (filteredMonth: string = "") => {
    try {
      let res = await getShiftDists(filteredMonth);
      dispatch(setShiftDists(res.data));
    } catch (error) {
      console.log("error getShiftDists: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getShiftDistsLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getShiftDistsLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  const handleCreateShiftDistValue = async () => {
    if (!shiftDist || !shiftDistValueReport || !shiftDistValue) return;
    try {
      await createShiftDist({
        calculated_date: shiftDistValueReport,
        shift_type: parseInt(shiftDist),
        value: shiftDistValue,
      });
      setShiftDist("");
      setShiftDistValue(null);
      setShiftDistValueReport(null);
      handleGetShiftDists(filteredMonth);
    } catch (error) {
      console.log("error createShiftDist: ", error);
    }
  };

  const handleUpdateClick = (x: ShiftDistData) => {
    setShiftDistUpdate(x.shift_type);
    setShiftDistReportUpdate(x.calculated_date);
    setShiftDistValueUpdate(x.value);
    setShiftDistIdUpdate(x.id);
  };

  const handleUpdateShiftDist = async () => {
    if (
      !shiftDistUpdate ||
      !shiftDistReportUpdate ||
      !shiftDistValueUpdate ||
      !shiftDistIdUpdate
    )
      return;
    try {
      await updateShiftDist({
        id: shiftDistIdUpdate,
        calculated_date: shiftDistReportUpdate,
        shift_type: shiftDistUpdate,
        value: shiftDistValueUpdate,
      });
      setShiftDistUpdate(null);
      setShiftDistIdUpdate(null);
      setShiftDistValueUpdate(null);
      setShiftDistReportUpdate(null);
      handleGetShiftDists(filteredMonth);
    } catch (error) {
      console.log("error updateShiftDist: ", error);
    }
  };

  const handleDeleteShiftDist = async (id: number) => {
    try {
      await deleteShiftDist(id);
      handleGetShiftDists(filteredMonth);
    } catch (error) {
      console.log("deleteShiftDist error:", error);
    }
  };

  useEffect(() => {
    handleGetShiftDists(filteredMonth);
  }, [filteredMonth]);

  console.log("shiftDistUpdate", shiftDistUpdate);
  return (
    <Table striped hover responsive className="mb-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Shift type</th>
          <th>Value</th>
          <th>Report month</th>
          <th>Created at</th>
          <th>&nbsp;</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <input
              onChange={(e) => setFilteredMonth(e.target.value)}
              value={filteredMonth}
              className="form-control"
              type="month"
            />
          </td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {shiftDists &&
          !!(shiftDists.length > 0) &&
          shiftDists.map((x, idx) => (
            <tr key={"proportion-by-shift-distribution-id-" + x.id}>
              <td>{idx + 1}</td>
              <td>
                {!(shiftDistIdUpdate == x.id) ? (
                  <span>
                    {x.shift_type == 1 && "0.25 shift"}
                    {x.shift_type == 2 && "0.5 shift"}
                    {x.shift_type == 3 && "0.75 shift"}
                    {x.shift_type == 4 && "1 shift"}
                  </span>
                ) : (
                  <select
                    className="form-select"
                    value={shiftDistUpdate || ""}
                    onChange={(e) =>
                      setShiftDistUpdate(parseInt(e.target.value))
                    }
                  >
                    <option value={1}>0.25 shift</option>
                    <option value={2}>0.5 shift</option>
                    <option value={3}>0.75 shift</option>
                    <option value={4}>1 shift</option>
                  </select>
                )}
              </td>

              <td>
                {!(shiftDistIdUpdate == x.id) ? (
                  <span>{x.value}</span>
                ) : (
                  <input
                    type="number"
                    className="form-control"
                    value={shiftDistValueUpdate || ""}
                    onChange={(e) =>
                      setShiftDistValueUpdate(parseInt(e.target.value))
                    }
                  />
                )}
              </td>
              <td>
                {!(shiftDistIdUpdate == x.id) ? (
                  <span>{x.calculated_date}</span>
                ) : (
                  <input
                    type="month"
                    className="form-control"
                    value={shiftDistReportUpdate || ""}
                    onChange={(e) => setShiftDistReportUpdate(e.target.value)}
                  />
                )}
              </td>
              <td>
                <span>{formatDate(x.created_at)}</span>
              </td>
              <td>
                {!(shiftDistIdUpdate == x.id) ? (
                  <button
                    className="btn p-1"
                    onClick={() => handleUpdateClick(x)}
                  >
                    <i className="bx bxs-pencil"></i>
                  </button>
                ) : (
                  <button className="btn p-1" onClick={handleUpdateShiftDist}>
                    <i className="bx bx-check"></i>
                  </button>
                )}
                <button
                  className="btn p-1"
                  onClick={() => handleDeleteShiftDist(x.id)}
                >
                  <i className="bx bxs-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        <tr>
          <td> </td>
          <td>
            <select
              className="form-select"
              onChange={(e) => setShiftDist(e.target.value)}
              value={shiftDist?.toString()}
            >
              <option value=""></option>
              <option value={1}>0.25 shift</option>
              <option value={2}>0.5 shift</option>
              <option value={3}>0.75 shift</option>
              <option value={4}>1 shift</option>
            </select>
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setShiftDistValue(parseInt(e.target.value))}
              value={shiftDistValue || ""}
            />
          </td>
          <td>
            <input
              type="month"
              onChange={(e) => setShiftDistValueReport(e.target.value)}
              min={`${currentYear}-${currentMonth < 9 ? "0" : ""}${
                currentMonth + 1
              }`}
              className="form-control"
              value={shiftDistValueReport || ""}
            />
          </td>
          <td>{/* <input type="date" className="form-control" /> */}</td>
          <td>
            <button
              className="btn p-1 btn-icon btn-success"
              onClick={handleCreateShiftDistValue}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DistributionByShiftTable;
