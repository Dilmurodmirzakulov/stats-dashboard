import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  createPosition,
  deletePosition,
  getPositions,
  updatePosition,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setPositions } from "../../../store/slices/EmployeeOverview/positionsSlice";

const PositionsTable = () => {
  const dispatch = useDispatch();
  const { positions } = useSelector(
    (state: RootState) => state.positionsReducer
  );
  const [posName, setPosName] = useState<null | string>(null);
  const [positionId, setPositionId] = useState<null | number>(null);
  const [updatePos, setUpdatePos] = useState("");
  const handleCreatePsotion = async () => {
    if (!posName) return;
    try {
      await createPosition({
        name: posName,
      });
      setPosName("");
      handleGetPositions();
    } catch (error) {
      console.log("createPosition error:", error);
    }
  };

  const handleGetPositions = async () => {
    try {
      const res = await getPositions();
      dispatch(setPositions(res.data));
    } catch (error) {
      console.log("getPositions error:", error);
    }
  };

  const handleDeletePosition = async (id: number) => {
    try {
      await deletePosition(id);
      handleGetPositions();
    } catch (error) {
      console.log("deletePosition error:", error);
    }
  };

  const handleUpdatePosition = async () => {
    if (!positionId) return;
    try {
      await updatePosition({
        id: positionId,
        name: updatePos,
      });
      handleGetPositions();
      setPositionId(null);
      setUpdatePos("");
    } catch (error) {
      console.log("updatePosition error:", error);
    }
  };

  return (
    <Table striped hover responsive className="mb-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Position name</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {!!positions &&
          !!(positions.length > 0) &&
          positions.map((position, idx) => (
            <tr key={"position-id-" + position.id}>
              <td>{idx + 1}</td>
              <td>
                {!(positionId == position.id) ? (
                  <span>{position.name}</span>
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
                {!(positionId == position.id) ? (
                  <button
                    className="btn p-1"
                    onClick={() => {
                      setPositionId(position.id);
                      setUpdatePos(position.name);
                    }}
                  >
                    <i className="bx bxs-pencil"></i>
                  </button>
                ) : (
                  <button className="btn p-1" onClick={handleUpdatePosition}>
                    <i className="bx bx-check"></i>
                  </button>
                )}
                <button
                  className="btn p-1"
                  onClick={() => handleDeletePosition(position.id)}
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

export default PositionsTable;
