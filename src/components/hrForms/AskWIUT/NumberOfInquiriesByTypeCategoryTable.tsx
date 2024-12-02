import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  createNumberOfInquiriesByTypeCategory,
  deleteNumberOfInquiriesByTypeCategory,
  getNumberOfInquiriesByTypeCategory,
  updateNumberOfInquiriesByTypeCategory,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setNumberOfInquiriesByTypeCategory } from "../../../store/slices/AskWIUT/NumberOfInquiriesByTypeCategorySlice";

const NumberOfInquiriesByTypeCategoryTable = () => {
  const dispatch = useDispatch();
  const { numberOfInquiriesByTypeCategory } = useSelector(
    (state: RootState) => state.numberOfInquiriesByTypeCategoryReducer
  );
  const [posName, setPosName] = useState<null | string>(null);
  const [numberOfInquiriesByTypeCategoryId, setNumberOfInquiriesByTypeCategoryId] = useState<null | number>(null);
  const [updatePos, setUpdatePos] = useState("");
  const handleCreatePsotion = async () => {
    if (!posName) return;
    try {
      await createNumberOfInquiriesByTypeCategory({
        name: posName,
      });
      setPosName("");
      handleGetNumberOfInquiriesByTypeCategory();
    } catch (error) {
      console.log("createNumberOfInquiriesByTypeCategory error:", error);
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

  const handleDeleteNumberOfInquiriesByTypeCategory = async (id: number) => {
    try {
      await deleteNumberOfInquiriesByTypeCategory(id);
      handleGetNumberOfInquiriesByTypeCategory();
    } catch (error) {
      console.log("deleteNumberOfInquiriesByTypeCategory error:", error);
    }
  };

  const handleUpdateNumberOfInquiriesByTypeCategory = async () => {
    if (!numberOfInquiriesByTypeCategoryId) return;
    try {
      await updateNumberOfInquiriesByTypeCategory({
        id: numberOfInquiriesByTypeCategoryId,
        name: updatePos,
      });
      handleGetNumberOfInquiriesByTypeCategory();
      setNumberOfInquiriesByTypeCategoryId(null);
      setUpdatePos("");
    } catch (error) {
      console.log("updateNumberOfInquiriesByTypeCategory error:", error);
    }
  };

  return (
    <Table striped hover responsive className="mb-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Category name</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {!!numberOfInquiriesByTypeCategory &&
          !!(numberOfInquiriesByTypeCategory.length > 0) &&
          numberOfInquiriesByTypeCategory.map((numberOfInquiriesByTypeCategory, idx) => (
            <tr key={"numberOfInquiriesByTypeCategory-id-" + numberOfInquiriesByTypeCategory.id}>
              <td>{idx + 1}</td>
              <td>
                {!(numberOfInquiriesByTypeCategoryId == numberOfInquiriesByTypeCategory.id) ? (
                  <span>{numberOfInquiriesByTypeCategory.name}</span>
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    value={updatePos}
                    onChange={(e) => setUpdatePos(e.target.value)}
                  />
                )}
              </td>
              <td className="text-end">
                {!(numberOfInquiriesByTypeCategoryId == numberOfInquiriesByTypeCategory.id) ? (
                  <button
                    className="btn p-1"
                    onClick={() => {
                      setNumberOfInquiriesByTypeCategoryId(numberOfInquiriesByTypeCategory.id);
                      setUpdatePos(numberOfInquiriesByTypeCategory.name);
                    }}
                  >
                    <i className="bx bxs-pencil"></i>
                  </button>
                ) : (
                  <button className="btn p-1" onClick={handleUpdateNumberOfInquiriesByTypeCategory}>
                    <i className="bx bx-check"></i>
                  </button>
                )}
                <button
                  className="btn p-1"
                  onClick={() => handleDeleteNumberOfInquiriesByTypeCategory(numberOfInquiriesByTypeCategory.id)}
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
              onChange={(e) => setPosName(e.target.value)}
              value={posName || ""}
            />
          </td>
          <td className="text-end">
            <button
              className="btn p-1 btn-icon btn-success"
              onClick={handleCreatePsotion}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default NumberOfInquiriesByTypeCategoryTable;
