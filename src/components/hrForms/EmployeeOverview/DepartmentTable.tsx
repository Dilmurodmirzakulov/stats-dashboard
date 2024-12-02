import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  Department,
  createDepartment,
  deleteDepartment,
  getDepartments,
  updateDepartment,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setDepartments } from "../../../store/slices/EmployeeOverview/departmentsSlice";

const DepartmentTable = () => {
  const dispatch = useDispatch();
  const { departments } = useSelector(
    (state: RootState) => state.departmentsReducer
  );
  const [depName, setDepName] = useState<null | string>(null);
  const [departmentId, setDepartmentId] = useState<null | number>(null);
  const [updateDep, setUpdateDep] = useState("");
  const handleCreateDepartment = async () => {
    if (!depName) return;
    try {
      let res = await createDepartment({
        department: depName,
      });
      setDepName("");
      handleGetDepartments();
    } catch (error) {
      console.log("createDepartment error:", error);
    }
  };

  const handleGetDepartments = async () => {
    try {
      let res = await getDepartments();
      dispatch(setDepartments(res.data));
    } catch (error) {
      console.log("getDepartments error:", error);
    }
  };

  const handleDeleteDepartments = async (id: number) => {
    try {
      await deleteDepartment(id);
      handleGetDepartments();
    } catch (error) {
      console.log("deleteDepartment error:", error);
    }
  };

  const handleUpdateDepartment = async () => {
    if (!departmentId) return;
    try {
      let res = await updateDepartment({
        id: departmentId,
        department: updateDep,
      });
      handleGetDepartments();
      setDepartmentId(null);
      setUpdateDep("");
    } catch (error) {
      console.log("updateDepartment error:", error);
    }
  };

  return (
    <Table striped hover responsive className="mb-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Department name</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {!!departments &&
          !!(departments.length > 0) &&
          departments.map((department, idx) => (
            <tr key={"department-id-" + department.id}>
              <td>{idx + 1}</td>
              <td>
                {!(departmentId == department.id) ? (
                  <span>{department.department}</span>
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    value={updateDep}
                    onChange={(e) => setUpdateDep(e.target.value)}
                  />
                )}
              </td>
              <td className="text-end">
                {!(departmentId == department.id) ? (
                  <button
                    className="btn p-1"
                    onClick={() => {
                      setDepartmentId(department.id);
                      setUpdateDep(department.department);
                    }}
                  >
                    <i className="bx bxs-pencil"></i>
                  </button>
                ) : (
                  <button className="btn p-1" onClick={handleUpdateDepartment}>
                    <i className="bx bx-check"></i>
                  </button>
                )}
                <button
                  className="btn p-1"
                  onClick={() => handleDeleteDepartments(department.id)}
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
              onChange={(e) => setDepName(e.target.value)}
              value={depName || ""}
            />
          </td>
          <td className="text-end">
            <button
              className="btn p-1 btn-icon btn-success"
              onClick={handleCreateDepartment}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DepartmentTable;
