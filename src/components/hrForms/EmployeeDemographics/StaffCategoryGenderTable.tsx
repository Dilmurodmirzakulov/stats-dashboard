import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  StaffCategoryGenderData,
  createStaffCategoryGender,
  deleteStaffCategoryGender,
  getStaffCategoryGender,
  getStaffCategoryGenderLatest,
  updateStaffCategoryGender,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setStaffCategoryGender } from "../../../store/slices/EmployeeDemographics/staffCategoryGenderSlice";
import { formatDate } from "../../../utils/custom";

const StaffCategoryGenderTable = () => {
  const dispatch = useDispatch();
  const { staffCategoryGender } = useSelector(
    (state: RootState) => state.staffCategoryGenderReducer
  );
  const [filteredMonth, setFilteredMonth] = useState("");

  const [statsName, setStatsName] = useState<null | string>(null);
  const [statsValue1, setStatsValue1] = useState<null | number>(null);
  const [statsValue2, setStatsValue2] = useState<null | number>(null);
  const [statsDate, setStatsDate] = useState<null | string>(null);

  const [updateStatsId, setUpdateStatsId] = useState<null | number>(null);
  const [updateStatsName, setUpdateStatsName] = useState<null | string>(null);
  const [updateStatsValue1, setUpdateStatsValue1] = useState<null | number>(
    null
  );
  const [updateStatsValue2, setUpdateStatsValue2] = useState<null | number>(
    null
  );
  const [updateStatsDate, setUpdateStatsDate] = useState<null | string>(null);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handleCreateStaffCategoryGender = async () => {
    if (!statsName || !statsValue1 || !statsValue2 || !statsDate) return;
    try {
      await createStaffCategoryGender({
        name: statsName,
        male: statsValue1,
        female: statsValue2,
        calculated_date: statsDate,
      });
      setStatsName(null);
      setStatsDate(null);
      setStatsValue1(null);
      setStatsValue2(null);
      handleGetStaffCategoryGender(filteredMonth);
    } catch (error) {
      console.log("createStaffCategoryGender error:", error);
    }
  };

  const handleGetStaffCategoryGender = async (filteredMonth: string = "") => {
    try {
      let res = await getStaffCategoryGender(filteredMonth);
      dispatch(setStaffCategoryGender(res.data));
    } catch (error) {
      console.log("getStaffCategoryGender error:", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getStaffCategoryGenderLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getStaffCategoryGenderLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  const handleDeleteStaffCategoryGender = async (id: number) => {
    try {
      await deleteStaffCategoryGender(id);
      handleGetStaffCategoryGender(filteredMonth);
    } catch (error) {
      console.log("deleteStaffCategoryGender error:", error);
    }
  };

  const handleUpdateStats = async () => {
    if (
      !updateStatsId ||
      !updateStatsDate ||
      !updateStatsValue1 ||
      !updateStatsValue2 ||
      !updateStatsName
    )
      return;
    try {
      await updateStaffCategoryGender({
        id: updateStatsId,
        name: updateStatsName,
        male: updateStatsValue1,
        female: updateStatsValue2,
        calculated_date: updateStatsDate,
      });
      setUpdateStatsId(null);
      setUpdateStatsName(null);
      setUpdateStatsValue1(null);
      setUpdateStatsValue2(null);
      setUpdateStatsDate(null);
      handleGetStaffCategoryGender(filteredMonth);
    } catch (error) {
      console.log("updateStaffCategoryGender error:", error);
    }
  };

  const handleUpdateClick = (x: StaffCategoryGenderData) => {
    setUpdateStatsName(x.name);
    setUpdateStatsValue1(x.male);
    setUpdateStatsValue2(x.female);
    setUpdateStatsDate(x.calculated_date);
    setUpdateStatsId(x.id);
  };

  useEffect(() => {
    handleGetStaffCategoryGender(filteredMonth);
  }, [filteredMonth]);

  return (
    <Table striped hover responsive className="mb-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Male</th>
          <th>Female</th>
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
        {!!staffCategoryGender &&
          !!(staffCategoryGender.length > 0) &&
          staffCategoryGender.map((x, idx) => (
            <tr key={"staffCategoryGender-id-" + x.id}>
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
                  <span>{x.male}</span>
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
                  <span>{x.female}</span>
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
                  onClick={() => handleDeleteStaffCategoryGender(x.id)}
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
              className="form-control"
              onChange={(e) => setStatsValue1(parseFloat(e.target.value))}
              value={statsValue1 || ""}
            />
          </td>
          <td>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setStatsValue2(parseFloat(e.target.value))}
              value={statsValue2 || ""}
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
              onClick={handleCreateStaffCategoryGender}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default StaffCategoryGenderTable;
