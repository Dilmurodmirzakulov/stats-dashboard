import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  WeeklyCustomersCenterTrendData,
  createWeeklyCustomersCenterTrend,
  deleteWeeklyCustomersCenterTrend,
  getWeeklyCustomersCenterTrendLatest,
  getWeeklyCustomersCenterTrend,
  updateWeeklyCustomersCenterTrend,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setWeeklyCustomersCenterTrend } from "../../../store/slices/AskWIUT/WeeklyCustomersCenterTrendSlice";
import { formatDate } from "../../../utils/custom";

const WeeklyCustomersCenterTrendTable = () => {
  const dispatch = useDispatch();
  const { weeklyCustomersCenterTrend } = useSelector(
    (state: RootState) => state.weeklyCustomersCenterTrendReducer
  );
  const [filteredMonth, setFilteredMonth] = useState("");

  const [statsName, setStatsName] = useState<null | string>(null);
  const [statsValue1, setStatsValue1] = useState<null | number>(null);
  const [statsValue2, setStatsValue2] = useState<null | number>(null);
  const [statsValue3, setStatsValue3] = useState<null | number>(null);
  const [statsDate, setStatsDate] = useState<null | string>(null);

  const [updateStatsId, setUpdateStatsId] = useState<null | number>(null);
  const [updateStatsName, setUpdateStatsName] = useState<null | string>(null);
  const [updateStatsValue1, setUpdateStatsValue1] = useState<null | number>(
    null
  );
  const [updateStatsValue2, setUpdateStatsValue2] = useState<null | number>(
    null
  );
  const [updateStatsValue3, setUpdateStatsValue3] = useState<null | number>(
    null
  );
  const [updateStatsDate, setUpdateStatsDate] = useState<null | string>(null);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handleCreateWeeklyCustomersCenterTrend = async () => {
    if (
      !statsName ||
      !statsValue1 ||
      !statsValue2 ||
      !statsValue3 ||
      !statsDate
    )
      return;
    try {
      await createWeeklyCustomersCenterTrend({
        name: statsName,
        value1: statsValue1,
        value2: statsValue2,
        value3: statsValue3,
        calculated_date: statsDate,
      });
      setStatsName(null);
      setStatsDate(null);
      setStatsValue1(null);
      setStatsValue2(null);
      setStatsValue3(null);
      handleGetWeeklyCustomersCenterTrend(filteredMonth);
    } catch (error) {
      console.log("createWeeklyCustomersCenterTrend error:", error);
    }
  };

  const handleGetWeeklyCustomersCenterTrend = async (
    filteredMonth: string = ""
  ) => {
    try {
      let res = await getWeeklyCustomersCenterTrend(filteredMonth);
      dispatch(setWeeklyCustomersCenterTrend(res.data));
    } catch (error) {
      console.log("getWeeklyCustomersCenterTrend error:", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getWeeklyCustomersCenterTrendLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getWeeklyCustomersCenterTrendLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  const handleDeleteWeeklyCustomersCenterTrend = async (id: number) => {
    try {
      await deleteWeeklyCustomersCenterTrend(id);
      handleGetWeeklyCustomersCenterTrend(filteredMonth);
    } catch (error) {
      console.log("deleteWeeklyCustomersCenterTrend error:", error);
    }
  };

  const handleUpdateStats = async () => {
    if (
      !updateStatsId ||
      !updateStatsDate ||
      !updateStatsValue1 ||
      !updateStatsValue2 ||
      !updateStatsValue3 ||
      !updateStatsName
    )
      return;
    try {
      await updateWeeklyCustomersCenterTrend({
        id: updateStatsId,
        name: updateStatsName,
        value1: updateStatsValue1,
        value2: updateStatsValue2,
        value3: updateStatsValue3,
        calculated_date: updateStatsDate,
      });
      setUpdateStatsId(null);
      setUpdateStatsName(null);
      setUpdateStatsValue1(null);
      setUpdateStatsValue2(null);
      setUpdateStatsValue3(null);
      setUpdateStatsDate(null);
      handleGetWeeklyCustomersCenterTrend(filteredMonth);
    } catch (error) {
      console.log("updateWeeklyCustomersCenterTrend error:", error);
    }
  };

  const handleUpdateClick = (x: WeeklyCustomersCenterTrendData) => {
    setUpdateStatsName(x.name);
    setUpdateStatsValue1(x.value1);
    setUpdateStatsValue2(x.value2);
    setUpdateStatsValue3(x.value3);
    setUpdateStatsDate(x.calculated_date);
    setUpdateStatsId(x.id);
  };

  useEffect(() => {
    handleGetWeeklyCustomersCenterTrend(filteredMonth);
  }, [filteredMonth]);

  return (
    <Table striped hover responsive className="mb-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Value1</th>
          <th>Value2</th>
          <th>Value3</th>
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
        {!!weeklyCustomersCenterTrend &&
          !!(weeklyCustomersCenterTrend.length > 0) &&
          weeklyCustomersCenterTrend.map((x, idx) => (
            <tr key={"weeklyCustomersCenterTrend-id-" + x.id}>
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
                  <span>{x.value1}</span>
                ) : (
                  <input
                    type="number"
                    step="any"
                    className="form-control"
                    value={updateStatsValue1 || ""}
                    onChange={(e) =>
                      setUpdateStatsValue1(parseFloat(e.target.value))
                    }
                  />
                )}
              </td>
              <td>
                {!(updateStatsId == x.id) ? (
                  <span>{x.value2}</span>
                ) : (
                  <input
                    type="number"
                    step="any"
                    className="form-control"
                    value={updateStatsValue2 || ""}
                    onChange={(e) =>
                      setUpdateStatsValue2(parseFloat(e.target.value))
                    }
                  />
                )}
              </td>
              <td>
                {!(updateStatsId == x.id) ? (
                  <span>{x.value3}</span>
                ) : (
                  <input
                    type="number"
                    step="any"
                    className="form-control"
                    value={updateStatsValue3 || ""}
                    onChange={(e) =>
                      setUpdateStatsValue3(parseFloat(e.target.value))
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
                  onClick={() => handleDeleteWeeklyCustomersCenterTrend(x.id)}
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
              onChange={(e) => setStatsValue1(parseFloat(e.target.value))}
              value={statsValue1 || ""}
            />
          </td>
          <td>
            <input
              type="number"
              step="any"
              className="form-control"
              onChange={(e) => setStatsValue2(parseFloat(e.target.value))}
              value={statsValue2 || ""}
            />
          </td>
          <td>
            <input
              type="number"
              step="any"
              className="form-control"
              onChange={(e) => setStatsValue3(parseFloat(e.target.value))}
              value={statsValue3 || ""}
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
              onClick={handleCreateWeeklyCustomersCenterTrend}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default WeeklyCustomersCenterTrendTable;