import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  TrendYearsNamesData,
  createTrendYearsNames,
  deleteTrendYearsNames,
  getTrendYearsNamesLatest,
  getTrendYearsNames,
  updateTrendYearsNames,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setTrendYearsNames } from "../../../store/slices/AskWIUT/TrendYearsNamesSlice";
import { formatDate } from "../../../utils/custom";

const TrendYearsNamesTable = () => {
  const dispatch = useDispatch();
  const { trendYearsNames } = useSelector(
    (state: RootState) => state.trendYearsNamesReducer
  );
  const [filteredMonth, setFilteredMonth] = useState("");

  const [statsName1, setStatsName1] = useState<null | string>(null);
  const [statsName2, setStatsName2] = useState<null | string>(null);
  const [statsName3, setStatsName3] = useState<null | string>(null);
  const [statsDate, setStatsDate] = useState<null | string>(null);

  const [updateStatsId, setUpdateStatsId] = useState<null | number>(null);
  const [updateStatsName1, setUpdateStatsName1] = useState<null | string>(null);
  const [updateStatsName2, setUpdateStatsName2] = useState<null | string>(null);
  const [updateStatsName3, setUpdateStatsName3] = useState<null | string>(null);
  const [updateStatsDate, setUpdateStatsDate] = useState<null | string>(null);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handleCreateTrendYearsNames = async () => {
    if (!statsName1 || !statsName2 || !statsName3 || !statsDate) return;
    try {
      await createTrendYearsNames({
        name1: statsName1,
        name2: statsName2,
        name3: statsName3,
        calculated_date: statsDate,
      });
      setStatsName1(null);
      setStatsName2(null);
      setStatsName3(null);
      setStatsDate(null);
      handleGetTrendYearsNames(filteredMonth);
    } catch (error) {
      console.log("createTrendYearsNames error:", error);
    }
  };

  const handleGetTrendYearsNames = async (filteredMonth: string = "") => {
    try {
      let res = await getTrendYearsNames(filteredMonth);
      dispatch(setTrendYearsNames(res.data));
    } catch (error) {
      console.log("getTrendYearsNames error:", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getTrendYearsNamesLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getTrendYearsNamesLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  const handleDeleteTrendYearsNames = async (id: number) => {
    try {
      await deleteTrendYearsNames(id);
      handleGetTrendYearsNames(filteredMonth);
    } catch (error) {
      console.log("deleteTrendYearsNames error:", error);
    }
  };

  const handleUpdateStats = async () => {
    if (
      !updateStatsId ||
      !updateStatsDate ||
      !updateStatsName1 ||
      !updateStatsName2 ||
      !updateStatsName3
    )
      return;
    try {
      await updateTrendYearsNames({
        id: updateStatsId,
        name1: updateStatsName1,
        name2: updateStatsName2,
        name3: updateStatsName3,
        calculated_date: updateStatsDate,
      });
      setUpdateStatsId(null);
      setUpdateStatsName1(null);
      setUpdateStatsName2(null);
      setUpdateStatsName3(null);
      setUpdateStatsDate(null);
      handleGetTrendYearsNames(filteredMonth);
    } catch (error) {
      console.log("updateTrendYearsNames error:", error);
    }
  };

  const handleUpdateClick = (x: TrendYearsNamesData) => {
    setUpdateStatsName1(x.name1);
    setUpdateStatsName2(x.name2);
    setUpdateStatsName3(x.name3);
    setUpdateStatsDate(x.calculated_date);
    setUpdateStatsId(x.id);
  };

  useEffect(() => {
    handleGetTrendYearsNames(filteredMonth);
  }, [filteredMonth]);

  return (
    <Table striped hover responsive className="mb-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Name1</th>
          <th>Name2</th>
          <th>Name3</th>
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
        {!!trendYearsNames &&
          !!(trendYearsNames.length > 0) &&
          trendYearsNames.map((x, idx) => (
            <tr key={"trendYearsNames-id-" + x.id}>
              <td>{idx + 1}</td>
              <td>
                {!(updateStatsId == x.id) ? (
                  <span>{x.name1}</span>
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    value={updateStatsName1 || ""}
                    onChange={(e) => setUpdateStatsName1(e.target.value)}
                  />
                )}
              </td>
              <td>
                {!(updateStatsId == x.id) ? (
                  <span>{x.name2}</span>
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    value={updateStatsName2 || ""}
                    onChange={(e) => setUpdateStatsName2(e.target.value)}
                  />
                )}
              </td>
              <td>
                {!(updateStatsId == x.id) ? (
                  <span>{x.name3}</span>
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    value={updateStatsName3 || ""}
                    onChange={(e) => setUpdateStatsName3(e.target.value)}
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
                  onClick={() => handleDeleteTrendYearsNames(x.id)}
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
              onChange={(e) => setStatsName1(e.target.value)}
              value={statsName1 || ""}
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setStatsName2(e.target.value)}
              value={statsName2 || ""}
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setStatsName3(e.target.value)}
              value={statsName3 || ""}
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
              onClick={handleCreateTrendYearsNames}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TrendYearsNamesTable;
