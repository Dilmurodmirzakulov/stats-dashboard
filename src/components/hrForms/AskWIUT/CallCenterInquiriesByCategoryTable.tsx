import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  CallCenterInquiriesByCategoryData,
  createCallCenterInquiriesByCategory,
  deleteCallCenterInquiriesByCategory,
  getCallCenterInquiriesByCategoryLatest,
  getCallCenterInquiriesByCategory,
  updateCallCenterInquiriesByCategory,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setCallCenterInquiriesByCategory } from "../../../store/slices/AskWIUT/CallCenterInquiriesByCategorySlice";
import { formatDate } from "../../../utils/custom";

const CallCenterInquiriesByCategoryTable = () => {
  const dispatch = useDispatch();
  const { callCenterInquiriesByCategory } = useSelector(
    (state: RootState) => state.callCenterInquiriesByCategoryReducer
  );
  const [filteredMonth, setFilteredMonth] = useState("");

  const [statsName, setStatsName] = useState<null | string>(null);
  const [statsValue, setStatsValue] = useState<null | number>(null);
  const [statsDate, setStatsDate] = useState<null | string>(null);

  const [updateStatsId, setUpdateStatsId] = useState<null | number>(null);
  const [updateStatsName, setUpdateStatsName] = useState<null | string>(null);
  const [updateStatsValue, setUpdateStatsValue] = useState<null | number>(null);
  const [updateStatsDate, setUpdateStatsDate] = useState<null | string>(null);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handleCreateCallCenterInquiriesByCategory = async () => {
    if (!statsName || !statsValue || !statsDate) return;
    try {
      await createCallCenterInquiriesByCategory({
        name: statsName,
        value: statsValue,
        calculated_date: statsDate,
      });
      setStatsName(null);
      setStatsDate(null);
      setStatsValue(null);
      handleGetCallCenterInquiriesByCategory(filteredMonth);
    } catch (error) {
      console.log("createCallCenterInquiriesByCategory error:", error);
    }
  };

  const handleGetCallCenterInquiriesByCategory = async (
    filteredMonth: string = ""
  ) => {
    try {
      let res = await getCallCenterInquiriesByCategory(filteredMonth);
      dispatch(setCallCenterInquiriesByCategory(res.data));
    } catch (error) {
      console.log("getCallCenterInquiriesByCategory error:", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getCallCenterInquiriesByCategoryLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getCallCenterInquiriesByCategoryLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  const handleDeleteCallCenterInquiriesByCategory = async (id: number) => {
    try {
      await deleteCallCenterInquiriesByCategory(id);
      handleGetCallCenterInquiriesByCategory(filteredMonth);
    } catch (error) {
      console.log("deleteCallCenterInquiriesByCategory error:", error);
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
      await updateCallCenterInquiriesByCategory({
        id: updateStatsId,
        name: updateStatsName,
        value: updateStatsValue,
        calculated_date: updateStatsDate,
      });
      setUpdateStatsId(null);
      setUpdateStatsName(null);
      setUpdateStatsValue(null);
      setUpdateStatsDate(null);
      handleGetCallCenterInquiriesByCategory(filteredMonth);
    } catch (error) {
      console.log("updateCallCenterInquiriesByCategory error:", error);
    }
  };

  const handleUpdateClick = (x: CallCenterInquiriesByCategoryData) => {
    setUpdateStatsName(x.name);
    setUpdateStatsValue(x.value);
    setUpdateStatsDate(x.calculated_date);
    setUpdateStatsId(x.id);
  };

  useEffect(() => {
    handleGetCallCenterInquiriesByCategory(filteredMonth);
  }, [filteredMonth]);

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
        {!!callCenterInquiriesByCategory &&
          !!(callCenterInquiriesByCategory.length > 0) &&
          callCenterInquiriesByCategory.map((x, idx) => (
            <tr key={"callCenterInquiriesByCategory-id-" + x.id}>
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
                  onClick={() =>
                    handleDeleteCallCenterInquiriesByCategory(x.id)
                  }
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
              onClick={handleCreateCallCenterInquiriesByCategory}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CallCenterInquiriesByCategoryTable;
