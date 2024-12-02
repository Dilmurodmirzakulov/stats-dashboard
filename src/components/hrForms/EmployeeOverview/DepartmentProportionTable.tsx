import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  DepartmentProportionData,
  createDepartmentProportion,
  deleteDepartmentProportion,
  getDepartmentProportions,
  getDepartmentProportionsLatest,
  updateDepartmentProportion,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setDepartmentProportions } from "../../../store/slices/EmployeeOverview/departmentProportionsSlice";
import { formatDate } from "../../../utils/custom";

const DepartmentProportionTable = () => {
  const dispatch = useDispatch();
  const { departments } = useSelector(
    (state: RootState) => state.departmentsReducer
  );
  const { departmentProportions } = useSelector(
    (state: RootState) => state.departmentProportionsReducer
  );

  const [depId, setDepId] = useState<null | string>(null);
  const [depProp, setDepProp] = useState<null | number>(null);
  const [depPropReport, setDepPropReport] = useState<null | string>(null);

  const [propIdUpdate, setPropIdUpdate] = useState<null | number>(null);
  const [depIdUpdate, setDepIdUpdate] = useState<null | number>(null);
  const [depPropUpdate, setDepPropUpdate] = useState<null | number>(null);
  const [depPropReportUpdate, setDepPropReportUpdate] = useState<null | string>(
    null
  );

  const [filteredMonth, setFilteredMonth] = useState("");

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handleGetDepProps = async (filteredMonth: string = "") => {
    try {
      let res = await getDepartmentProportions(filteredMonth);
      dispatch(setDepartmentProportions(res.data));
    } catch (error) {
      console.log("error getDepartmentProportions: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getDepartmentProportionsLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getDepartmentProportionsLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  const handleCreateDepProp = async () => {
    if (!depId || !depPropReport || !depProp) return;
    try {
      await createDepartmentProportion({
        calculated_date: depPropReport,
        proportion_id: parseInt(depId),
        value: depProp,
      });
      setDepId("");
      setDepProp(null);
      setDepPropReport(null);
      handleGetDepProps(filteredMonth);
    } catch (error) {
      console.log("error createDepartmentProportion: ", error);
    }
  };

  const handleUpdateClick = (x: DepartmentProportionData) => {
    setDepIdUpdate(x.proportion_id);
    setDepPropReportUpdate(x.calculated_date);
    setDepPropUpdate(x.value);
    setPropIdUpdate(x.id);
  };

  const handleUpdateDepProp = async () => {
    if (!depIdUpdate || !depPropReportUpdate || !depPropUpdate || !propIdUpdate)
      return;
    try {
      await updateDepartmentProportion({
        id: propIdUpdate,
        calculated_date: depPropReportUpdate,
        proportion_id: depIdUpdate,
        value: depPropUpdate,
      });
      setDepIdUpdate(null);
      setPropIdUpdate(null);
      setDepPropUpdate(null);
      setDepPropReportUpdate(null);
      handleGetDepProps(filteredMonth);
    } catch (error) {
      console.log("error updateDepartmentProportion: ", error);
    }
  };

  const handleDeleteDepProp = async (id: number) => {
    try {
      await deleteDepartmentProportion(id);
      handleGetDepProps(filteredMonth);
    } catch (error) {
      console.log("deleteDepartment error:", error);
    }
  };

  useEffect(() => {
    handleGetDepProps(filteredMonth);
  }, [filteredMonth]);

  return (
    <Table striped hover responsive className="mb-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Department name</th>
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
        {departmentProportions &&
          !!(departmentProportions.length > 0) &&
          departmentProportions.map((x, idx) => (
            <tr key={"proportion-by-department-id-" + x.id}>
              <td>{idx + 1}</td>
              <td>
                {!(propIdUpdate == x.id) ? (
                  <span>
                    {
                      departments.find((y) => y.id == x.proportion_id)
                        ?.department
                    }
                  </span>
                ) : (
                  <select
                    className="form-select"
                    value={depIdUpdate || ""}
                    onChange={(e) => setDepIdUpdate(parseInt(e.target.value))}
                  >
                    {departments &&
                      !!(departments.length > 0) &&
                      departments.map((x) => (
                        <option
                          value={x.id}
                          key={"departments-select-option-id-" + x.id}
                        >
                          {x.department}
                        </option>
                      ))}
                  </select>
                )}
              </td>

              <td>
                {!(propIdUpdate == x.id) ? (
                  <span>{x.value}</span>
                ) : (
                  <input
                    type="number"
                    className="form-control"
                    value={depPropUpdate || ""}
                    onChange={(e) => setDepPropUpdate(parseInt(e.target.value))}
                  />
                )}
              </td>
              <td>
                {!(propIdUpdate == x.id) ? (
                  <span>{x.calculated_date}</span>
                ) : (
                  <input
                    type="month"
                    className="form-control"
                    value={depPropReportUpdate || ""}
                    onChange={(e) => setDepPropReportUpdate(e.target.value)}
                  />
                )}
              </td>
              <td>
                <span>{formatDate(x.created_at)}</span>
              </td>
              <td>
                {!(propIdUpdate == x.id) ? (
                  <button
                    className="btn p-1"
                    onClick={() => handleUpdateClick(x)}
                  >
                    <i className="bx bxs-pencil"></i>
                  </button>
                ) : (
                  <button className="btn p-1" onClick={handleUpdateDepProp}>
                    <i className="bx bx-check"></i>
                  </button>
                )}
                <button
                  className="btn p-1"
                  onClick={() => handleDeleteDepProp(x.id)}
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
              onChange={(e) => setDepId(e.target.value)}
              value={depId?.toString()}
            >
              <option value=""></option>
              {departments &&
                !!(departments.length > 0) &&
                departments.map((x) => (
                  <option
                    value={x.id}
                    key={"departments-select-option-id-" + x.id}
                  >
                    {x.department}
                  </option>
                ))}
            </select>
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setDepProp(parseInt(e.target.value))}
              value={depProp || ""}
            />
          </td>
          <td>
            <input
              type="month"
              onChange={(e) => setDepPropReport(e.target.value)}
              min={`${currentYear}-${currentMonth < 9 ? "0" : ""}${
                currentMonth + 1
              }`}
              className="form-control"
              value={depPropReport || ""}
            />
          </td>
          <td>{/* <input type="date" className="form-control" /> */}</td>
          <td>
            <button
              className="btn p-1 btn-icon btn-success"
              onClick={handleCreateDepProp}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DepartmentProportionTable;
