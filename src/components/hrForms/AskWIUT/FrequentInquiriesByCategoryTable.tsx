import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  FrequentInquiriesByCategoryData,
  createFrequentInquiriesByCategory,
  deleteFrequentInquiriesByCategory,
  getFrequentInquiriesByCategoryLatest,
  getFrequentInquiriesByCategory,
  updateFrequentInquiriesByCategory,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setFrequentInquiriesByCategory } from "../../../store/slices/AskWIUT/FrequentInquiriesByCategorySlice";
import { formatDate } from "../../../utils/custom";

const FrequentInquiriesByCategoryTable = () => {
  const dispatch = useDispatch();
  const { frequentInquiriesByCategory } = useSelector(
    (state: RootState) => state.frequentInquiriesByCategoryReducer
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

  const handleCreateFrequentInquiriesByCategory = async () => {
    if (!statsName || !statsValue || !statsDate) return;
    try {
      await createFrequentInquiriesByCategory({
        name: statsName,
        value: statsValue,
        calculated_date: statsDate,
      });
      setStatsName(null);
      setStatsDate(null);
      setStatsValue(null);
      handleGetFrequentInquiriesByCategory(filteredMonth);
    } catch (error) {
      console.log("createFrequentInquiriesByCategory error:", error);
    }
  };

  const handleGetFrequentInquiriesByCategory = async (
    filteredMonth: string = ""
  ) => {
    try {
      let res = await getFrequentInquiriesByCategory(filteredMonth);
      dispatch(setFrequentInquiriesByCategory(res.data));
    } catch (error) {
      console.log("getFrequentInquiriesByCategory error:", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getFrequentInquiriesByCategoryLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getFrequentInquiriesByCategoryLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  const handleDeleteFrequentInquiriesByCategory = async (id: number) => {
    try {
      await deleteFrequentInquiriesByCategory(id);
      handleGetFrequentInquiriesByCategory(filteredMonth);
    } catch (error) {
      console.log("deleteFrequentInquiriesByCategory error:", error);
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
      await updateFrequentInquiriesByCategory({
        id: updateStatsId,
        name: updateStatsName,
        value: updateStatsValue,
        calculated_date: updateStatsDate,
      });
      setUpdateStatsId(null);
      setUpdateStatsName(null);
      setUpdateStatsValue(null);
      setUpdateStatsDate(null);
      handleGetFrequentInquiriesByCategory(filteredMonth);
    } catch (error) {
      console.log("updateFrequentInquiriesByCategory error:", error);
    }
  };

  const handleUpdateClick = (x: FrequentInquiriesByCategoryData) => {
    setUpdateStatsName(x.name);
    setUpdateStatsValue(x.value);
    setUpdateStatsDate(x.calculated_date);
    setUpdateStatsId(x.id);
  };

  useEffect(() => {
    handleGetFrequentInquiriesByCategory(filteredMonth);
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
        {!!frequentInquiriesByCategory &&
          !!(frequentInquiriesByCategory.length > 0) &&
          frequentInquiriesByCategory.map((x, idx) => (
            <tr key={"frequentInquiriesByCategory-id-" + x.id}>
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
                  onClick={() => handleDeleteFrequentInquiriesByCategory(x.id)}
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
              onClick={handleCreateFrequentInquiriesByCategory}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default FrequentInquiriesByCategoryTable;
