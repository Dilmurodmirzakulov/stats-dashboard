import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  NumberOfInquiriesByTypeData,
  createNumberOfInquiriesByType,
  deleteNumberOfInquiriesByType,
  getNumberOfInquiriesByTypeLatest,
  getNumberOfInquiriesByType,
  updateNumberOfInquiriesByType,
  getNumberOfInquiriesByTypeCategory,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setNumberOfInquiriesByType } from "../../../store/slices/AskWIUT/NumberOfInquiriesByTypeSlice";
import { formatDate } from "../../../utils/custom";
import { setNumberOfInquiriesByTypeCategory } from "../../../store/slices/AskWIUT/NumberOfInquiriesByTypeCategorySlice";

const NumberOfInquiriesByTypeTable = () => {
  const dispatch = useDispatch();
  const { numberOfInquiriesByType } = useSelector(
    (state: RootState) => state.numberOfInquiriesByTypeReducer
  );
  const { numberOfInquiriesByTypeCategory } = useSelector(
    (state: RootState) => state.numberOfInquiriesByTypeCategoryReducer
  );
  const [filteredMonth, setFilteredMonth] = useState("");

  const [statsName, setStatsName] = useState<null | string>(null);
  const [statsCatId, setStatsCatId] = useState<null | number>(null);
  const [statsValue, setStatsValue] = useState<null | number>(null);
  const [statsDate, setStatsDate] = useState<null | string>(null);

  const [updateStatsId, setUpdateStatsId] = useState<null | number>(null);
  const [updateStatsName, setUpdateStatsName] = useState<null | string>(null);
  const [updateStatsCatId, setUpdateStatsCatId] = useState<null | number>(null);
  const [updateStatsValue, setUpdateStatsValue] = useState<null | number>(null);
  const [updateStatsDate, setUpdateStatsDate] = useState<null | string>(null);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handleCreateNumberOfInquiriesByType = async () => {
    if (!statsName || !statsCatId || !statsValue || !statsDate) return;
    try {
      await createNumberOfInquiriesByType({
        name: statsName,
        category_id: statsCatId,
        value: statsValue,
        calculated_date: statsDate,
      });
      setStatsName(null);
      setStatsCatId(null);
      setStatsDate(null);
      setStatsValue(null);
      handleGetNumberOfInquiriesByType(filteredMonth);
    } catch (error) {
      console.log("createNumberOfInquiriesByType error:", error);
    }
  };

  const handleGetNumberOfInquiriesByType = async (
    filteredMonth: string = ""
  ) => {
    try {
      let res = await getNumberOfInquiriesByType(filteredMonth);
      dispatch(setNumberOfInquiriesByType(res.data));
    } catch (error) {
      console.log("getNumberOfInquiriesByType error:", error);
    }
  };

  const handleGetNumberOfInquiriesByTypeCategory = async () => {
    try {
      const res = await getNumberOfInquiriesByTypeCategory();
      dispatch(setNumberOfInquiriesByTypeCategory(res.data));
    } catch (error) {
      console.log("getNumberOfInquiriesByTypeCategory error:", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getNumberOfInquiriesByTypeLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getNumberOfInquiriesByTypeLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
    handleGetNumberOfInquiriesByTypeCategory();
  }, []);

  const handleDeleteNumberOfInquiriesByType = async (id: number) => {
    try {
      await deleteNumberOfInquiriesByType(id);
      handleGetNumberOfInquiriesByType(filteredMonth);
    } catch (error) {
      console.log("deleteNumberOfInquiriesByType error:", error);
    }
  };

  const handleUpdateStats = async () => {
    if (
      !updateStatsId ||
      !updateStatsDate ||
      !updateStatsValue ||
      !updateStatsCatId ||
      !updateStatsName
    )
      return;
    try {
      await updateNumberOfInquiriesByType({
        id: updateStatsId,
        name: updateStatsName,
        category_id: updateStatsCatId,
        value: updateStatsValue,
        calculated_date: updateStatsDate,
      });
      setUpdateStatsId(null);
      setUpdateStatsName(null);
      setUpdateStatsCatId(null);
      setUpdateStatsValue(null);
      setUpdateStatsDate(null);
      handleGetNumberOfInquiriesByType(filteredMonth);
    } catch (error) {
      console.log("updateNumberOfInquiriesByType error:", error);
    }
  };

  const handleUpdateClick = (x: NumberOfInquiriesByTypeData) => {
    setUpdateStatsName(x.name);
    setUpdateStatsCatId(x.category_id);
    setUpdateStatsValue(x.value);
    setUpdateStatsDate(x.calculated_date);
    setUpdateStatsId(x.id);
  };

  useEffect(() => {
    handleGetNumberOfInquiriesByType(filteredMonth);
  }, [filteredMonth]);

  return (
    <Table striped hover responsive className="mb-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Category</th>
          <th>Value</th>
          <th>Report month</th>
          <th>Created at</th>
          <th>&nbsp;</th>
        </tr>
        <tr>
          <td></td>
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
        {!!numberOfInquiriesByType &&
          !!(numberOfInquiriesByType.length > 0) &&
          numberOfInquiriesByType.map((x, idx) => (
            <tr key={"numberOfInquiriesByType-id-" + x.id}>
              <td>{idx + 1}</td>
              <td>
                {!(updateStatsId == x.id) ? (
                  <span>{x.name}</span>
                ) : (
                  <select
                    className="form-select"
                    value={updateStatsName || ""}
                    onChange={(e) => setUpdateStatsName(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                  </select>
                )}
              </td>
              <td>
                {!(updateStatsId == x.id) ? (
                  <span>
                    {
                      numberOfInquiriesByTypeCategory.find(
                        (y) => y.id == x.category_id
                      )?.name
                    }
                  </span>
                ) : (
                  <select
                    className="form-select"
                    value={updateStatsCatId || ""}
                    onChange={(e) =>
                      setUpdateStatsCatId(parseInt(e.target.value))
                    }
                  >
                    <option value="">Select</option>
                    {numberOfInquiriesByTypeCategory.map((y) => (
                      <option value={y.id}>{y.name}</option>
                    ))}
                  </select>
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
                  onClick={() => handleDeleteNumberOfInquiriesByType(x.id)}
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
              onChange={(e) => setStatsName(e.target.value)}
              value={statsName || ""}
            >
              <option value="">Select</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
            </select>
          </td>
          <td>
            <select
              className="form-select"
              value={statsCatId || ""}
              onChange={(e) => setStatsCatId(parseInt(e.target.value))}
            >
              <option value="">Select</option>
              {numberOfInquiriesByTypeCategory.map((y) => (
                <option value={y.id}>{y.name}</option>
              ))}
            </select>
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
              onClick={handleCreateNumberOfInquiriesByType}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default NumberOfInquiriesByTypeTable;
