import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  EmployeeStats,
  createEmployeeStats,
  deleteEmployeeStats,
  getEmployeeStats,
  updateEmployeeStats,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setEmployeeStats } from "../../../store/slices/EmployeeOverview/employeeStatsSlice";
import { formatDate } from "../../../utils/custom";

const EmployeeStatsTable = () => {
  const dispatch = useDispatch();
  const { employeeStats } = useSelector(
    (state: RootState) => state.employeeStatsReducer
  );
  const [statsName, setStatsName] = useState<null | string>(null);
  const [statsValue, setStatsValue] = useState<null | number>(null);
  const [statsDate, setStatsDate] = useState<null | string>(null);

  const [updateStatsId, setUpdateStatsId] = useState<null | number>(null);
  const [updateStatsName, setUpdateStatsName] = useState<null | string>(null);
  const [updateStatsValue, setUpdateStatsValue] = useState<null | number>(null);
  const [updateStatsDate, setUpdateStatsDate] = useState<null | string>(null);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handleCreateEmployeeStats = async () => {
    if (!statsName || !statsValue || !statsDate) return;
    try {
      await createEmployeeStats({
        name: statsName,
        value: statsValue,
        calculated_date: statsDate,
      });
      setStatsName(null);
      setStatsDate(null);
      setStatsValue(null);
      handleGetEmployeeStats();
    } catch (error) {
      console.log("createEmployeeStats error:", error);
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

  const handleDeleteEmployeeStats = async (id: number) => {
    try {
      await deleteEmployeeStats(id);
      handleGetEmployeeStats();
    } catch (error) {
      console.log("deleteEmployeeStats error:", error);
    }
  };

  const handleUpdateStats = async () => {
    if (
      !updateStatsId ||
      !updateStatsDate ||
      !updateStatsValue ||
      !updateStatsName
    )
      return;
    try {
      await updateEmployeeStats({
        id: updateStatsId,
        name: updateStatsName,
        value: updateStatsValue,
        calculated_date: updateStatsDate,
      });
      setUpdateStatsId(null);
      setUpdateStatsName(null);
      setUpdateStatsValue(null);
      setUpdateStatsDate(null);
      handleGetEmployeeStats();
    } catch (error) {
      console.log("updateEmployeeStats error:", error);
    }
  };

  const handleUpdateClick = (x: EmployeeStats) => {
    setUpdateStatsName(x.name);
    setUpdateStatsValue(x.value);
    setUpdateStatsDate(x.calculated_date);
    setUpdateStatsId(x.id);
  };

  useEffect(() => {
    handleGetEmployeeStats();
  }, []);

  return (
    <Table striped hover responsive className="mb-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Value</th>
          <th>Report month</th>
          <th>Created at</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {!!employeeStats &&
          !!(employeeStats.length > 0) &&
          employeeStats.map((x, idx) => (
            <tr key={"employeeStats-id-" + x.id}>
              <td>{idx + 1}</td>
              <td>
                {!(updateStatsId == x.id) ? (
                  <span>{x.name}</span>
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    value={updateStatsName || ""}
                    onChange={(e) => setUpdateStatsName(e.target.value)}
                  />
                )}
              </td>
              <td>
                {!(updateStatsId == x.id) ? (
                  <span>{x.value}</span>
                ) : (
                  <input
                    type="number"
                    step="any"
                    className="form-control"
                    value={updateStatsValue || ""}
                    onChange={(e) =>
                      setUpdateStatsValue(parseFloat(e.target.value))
                    }
                  />
                )}
              </td>
              <td>
                {!(updateStatsId == x.id) ? (
                  <span>{x.calculated_date}</span>
                ) : (
                  <input
                    type="month"
                    className="form-control"
                    value={updateStatsDate || ""}
                    onChange={(e) => setUpdateStatsDate(e.target.value)}
                  />
                )}
              </td>
              <td>
                <span>{formatDate(x.created_at)}</span>
              </td>
              <td className="text-end">
                {!(updateStatsId == x.id) ? (
                  <button
                    className="btn p-1"
                    onClick={() => handleUpdateClick(x)}
                  >
                    <i className="bx bxs-pencil"></i>
                  </button>
                ) : (
                  <button className="btn p-1" onClick={handleUpdateStats}>
                    <i className="bx bx-check"></i>
                  </button>
                )}
                <button
                  className="btn p-1"
                  onClick={() => handleDeleteEmployeeStats(x.id)}
                >
                  <i className="bx bxs-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        <tr>
          <td> </td>
          <td>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setStatsName(e.target.value)}
              value={statsName || ""}
            />
          </td>
          <td>
            <input
              type="number"
              step="any"
              className="form-control"
              onChange={(e) => setStatsValue(parseFloat(e.target.value))}
              value={statsValue || ""}
            />
          </td>
          <td>
            <input
              type="month"
              onChange={(e) => setStatsDate(e.target.value)}
              min={`${currentYear}-${currentMonth < 9 ? "0" : ""}${
                currentMonth + 1
              }`}
              className="form-control"
              value={statsDate || ""}
            />
          </td>
          <td></td>
          <td className="text-end">
            <button
              className="btn p-1 btn-icon btn-success"
              onClick={handleCreateEmployeeStats}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default EmployeeStatsTable;
