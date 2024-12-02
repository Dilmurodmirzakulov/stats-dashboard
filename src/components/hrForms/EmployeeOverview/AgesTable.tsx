import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { createAge, deleteAge, getAges, updateAge } from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setAges } from "../../../store/slices/EmployeeOverview/agesSlice";

const AgesTable = () => {
  const dispatch = useDispatch();
  const { ages } = useSelector((state: RootState) => state.agesReducer);
  const [ageName, setAgeName] = useState<null | string>(null);
  const [ageId, setAgeId] = useState<null | number>(null);
  const [updateAgeTitle, setUpdateAgeTitle] = useState("");
  const handleCreateAge = async () => {
    if (!ageName) return;
    try {
      await createAge({
        name: ageName,
      });
      setAgeName("");
      handleGetAges();
    } catch (error) {
      console.log("createAge error:", error);
    }
  };

  const handleGetAges = async () => {
    try {
      const res = await getAges();
      dispatch(setAges(res.data));
    } catch (error) {
      console.log("getAges error:", error);
    }
  };

  const handleDeleteAge = async (id: number) => {
    try {
      await deleteAge(id);
      handleGetAges();
    } catch (error) {
      console.log("deleteAge error:", error);
    }
  };

  const handleUpdateAge = async () => {
    if (!ageId) return;
    try {
      await updateAge({
        id: ageId,
        name: updateAgeTitle,
      });
      handleGetAges();
      setAgeId(null);
      setUpdateAgeTitle("");
    } catch (error) {
      console.log("updateAge error:", error);
    }
  };

  return (
    <Table striped hover responsive className="mb-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Age name</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {!!ages &&
          !!(ages.length > 0) &&
          ages.map((age, idx) => (
            <tr key={"age-id-" + age.id}>
              <td>{idx + 1}</td>
              <td>
                {!(ageId == age.id) ? (
                  <span>{age.name}</span>
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    value={updateAgeTitle}
                    onChange={(e) => setUpdateAgeTitle(e.target.value)}
                  />
                )}
              </td>
              <td className="text-end">
                {!(ageId == age.id) ? (
                  <button
                    className="btn p-1"
                    onClick={() => {
                      setAgeId(age.id);
                      setUpdateAgeTitle(age.name);
                    }}
                  >
                    <i className="bx bxs-pencil"></i>
                  </button>
                ) : (
                  <button className="btn p-1" onClick={handleUpdateAge}>
                    <i className="bx bx-check"></i>
                  </button>
                )}
                <button
                  className="btn p-1"
                  onClick={() => handleDeleteAge(age.id)}
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
              onChange={(e) => setAgeName(e.target.value)}
              value={ageName || ""}
            />
          </td>
          <td className="text-end">
            <button
              className="btn p-1 btn-icon btn-success"
              onClick={handleCreateAge}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AgesTable;
