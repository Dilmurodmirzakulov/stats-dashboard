import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  GenderData,
  createGender,
  deleteGender,
  getGenders,
  getGendersLatest,
  updateGender,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setGenders } from "../../../store/slices/EmployeeOverview/genderSlice";
import { formatDate } from "../../../utils/custom";

const StaffByGenderTable = () => {
  const dispatch = useDispatch();
  const { genders } = useSelector((state: RootState) => state.gendersReducer);

  const [gender, setGender] = useState<null | string>(null);
  const [genderValue, setGenderValue] = useState<null | number>(null);
  const [genderValueReport, setGenderValueReport] = useState<null | string>(
    null
  );

  const [genderIdUpdate, setGenderIdUpdate] = useState<null | number>(null);
  const [genderUpdate, setGenderUpdate] = useState<null | number>(null);
  const [genderValueUpdate, setGenderValueUpdate] = useState<null | number>(
    null
  );
  const [genderReportUpdate, setGenderReportUpdate] = useState<null | string>(
    null
  );

  const [filteredMonth, setFilteredMonth] = useState("");

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handleGetGenders = async (filteredMonth: string = "") => {
    try {
      let res = await getGenders(filteredMonth);
      dispatch(setGenders(res.data));
    } catch (error) {
      console.log("error getGenders: ", error);
    }
  };

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

  const handleCreateGenderValue = async () => {
    if (!gender || !genderValueReport || !genderValue) return;
    try {
      await createGender({
        calculated_date: genderValueReport,
        gender: parseInt(gender),
        value: genderValue,
      });
      setGender("");
      setGenderValue(null);
      setGenderValueReport(null);
      handleGetGenders(filteredMonth);
    } catch (error) {
      console.log("error createGender: ", error);
    }
  };

  const handleUpdateClick = (x: GenderData) => {
    setGenderUpdate(x.gender);
    setGenderReportUpdate(x.calculated_date);
    setGenderValueUpdate(x.value);
    setGenderIdUpdate(x.id);
  };

  const handleUpdateGender = async () => {
    if (
      !genderUpdate ||
      !genderReportUpdate ||
      !genderValueUpdate ||
      !genderIdUpdate
    )
      return;
    try {
      await updateGender({
        id: genderIdUpdate,
        calculated_date: genderReportUpdate,
        gender: genderUpdate,
        value: genderValueUpdate,
      });
      setGenderUpdate(null);
      setGenderIdUpdate(null);
      setGenderValueUpdate(null);
      setGenderReportUpdate(null);
      handleGetGenders(filteredMonth);
    } catch (error) {
      console.log("error updateGender: ", error);
    }
  };

  const handleDeleteGender = async (id: number) => {
    try {
      await deleteGender(id);
      handleGetGenders(filteredMonth);
    } catch (error) {
      console.log("deleteGender error:", error);
    }
  };

  useEffect(() => {
    handleGetGenders(filteredMonth);
  }, [filteredMonth]);

  console.log("genderUpdate", genderUpdate);
  return (
    <Table striped hover responsive className="mb-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Gender</th>
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
        {genders &&
          !!(genders.length > 0) &&
          genders.map((x, idx) => (
            <tr key={"proportion-by-shift-distribution-id-" + x.id}>
              <td>{idx + 1}</td>
              <td>
                {!(genderIdUpdate == x.id) ? (
                  <span>
                    {x.gender == 1 && "Male"}
                    {x.gender == 2 && "Female"}
                  </span>
                ) : (
                  <select
                    className="form-select"
                    value={genderUpdate || ""}
                    onChange={(e) => setGenderUpdate(parseInt(e.target.value))}
                  >
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                  </select>
                )}
              </td>

              <td>
                {!(genderIdUpdate == x.id) ? (
                  <span>{x.value}</span>
                ) : (
                  <input
                    type="number"
                    className="form-control"
                    value={genderValueUpdate || ""}
                    onChange={(e) =>
                      setGenderValueUpdate(parseInt(e.target.value))
                    }
                  />
                )}
              </td>
              <td>
                {!(genderIdUpdate == x.id) ? (
                  <span>{x.calculated_date}</span>
                ) : (
                  <input
                    type="month"
                    className="form-control"
                    value={genderReportUpdate || ""}
                    onChange={(e) => setGenderReportUpdate(e.target.value)}
                  />
                )}
              </td>
              <td>
                <span>{formatDate(x.created_at)}</span>
              </td>
              <td>
                {!(genderIdUpdate == x.id) ? (
                  <button
                    className="btn p-1"
                    onClick={() => handleUpdateClick(x)}
                  >
                    <i className="bx bxs-pencil"></i>
                  </button>
                ) : (
                  <button className="btn p-1" onClick={handleUpdateGender}>
                    <i className="bx bx-check"></i>
                  </button>
                )}
                <button
                  className="btn p-1"
                  onClick={() => handleDeleteGender(x.id)}
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
              onChange={(e) => setGender(e.target.value)}
              value={gender?.toString()}
            >
              <option value=""></option>
              <option value={1}>Male</option>
              <option value={2}>Female</option>
            </select>
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setGenderValue(parseInt(e.target.value))}
              value={genderValue || ""}
            />
          </td>
          <td>
            <input
              type="month"
              onChange={(e) => setGenderValueReport(e.target.value)}
              min={`${currentYear}-${currentMonth < 9 ? "0" : ""}${
                currentMonth + 1
              }`}
              className="form-control"
              value={genderValueReport || ""}
            />
          </td>
          <td>{/* <input type="date" className="form-control" /> */}</td>
          <td>
            <button
              className="btn p-1 btn-icon btn-success"
              onClick={handleCreateGenderValue}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default StaffByGenderTable;
