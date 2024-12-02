import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  PositionProportionData,
  createPositionProportion,
  deletePositionProportion,
  getPositionProportions,
  getPositionProportionsLatest,
  getPositions,
  updatePositionProportion,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setPositionProportions } from "../../../store/slices/EmployeeOverview/positionProportionsSlice";
import { setPositions } from "../../../store/slices/EmployeeOverview/positionsSlice";
import { formatDate } from "../../../utils/custom";

const PositionProportionTable = () => {
  const dispatch = useDispatch();
  const { positions } = useSelector(
    (state: RootState) => state.positionsReducer
  );
  const { positionProportions } = useSelector(
    (state: RootState) => state.positionProportionsReducer
  );

  const [posId, setPosId] = useState<null | string>(null);
  const [posProp, setPosProp] = useState<null | number>(null);
  const [posPropReport, setPosPropReport] = useState<null | string>(null);

  const [propIdUpdate, setPropIdUpdate] = useState<null | number>(null);
  const [posIdUpdate, setPosIdUpdate] = useState<null | number>(null);
  const [posPropUpdate, setPosPropUpdate] = useState<null | number>(null);
  const [posPropReportUpdate, setPosPropReportUpdate] = useState<null | string>(
    null
  );

  const [filteredMonth, setFilteredMonth] = useState("");

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handleGetPosProps = async (filteredMonth: string = "") => {
    try {
      let res = await getPositionProportions(filteredMonth);
      dispatch(setPositionProportions(res.data));
    } catch (error) {
      console.log("error getPositionProportions: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getPositionProportionsLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getPositionProportionsLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  const handleGetPositions = async () => {
    try {
      const res = await getPositions();
      dispatch(setPositions(res.data));
    } catch (error) {
      console.log("getPositions error:", error);
    }
  };

  const handleCreatePosProp = async () => {
    if (!posId || !posPropReport || !posProp) return;
    try {
      await createPositionProportion({
        calculated_date: posPropReport,
        position_id: parseInt(posId),
        value: posProp,
      });
      setPosId("");
      setPosProp(null);
      setPosPropReport(null);
      handleGetPosProps(filteredMonth);
    } catch (error) {
      console.log("error createPositionProportion: ", error);
    }
  };

  const handleUpdateClick = (x: PositionProportionData) => {
    setPosIdUpdate(x.position_id);
    setPosPropReportUpdate(x.calculated_date);
    setPosPropUpdate(x.value);
    setPropIdUpdate(x.id);
  };

  const handleUpdatePosProp = async () => {
    if (!posIdUpdate || !posPropReportUpdate || !posPropUpdate || !propIdUpdate)
      return;
    try {
      await updatePositionProportion({
        id: propIdUpdate,
        calculated_date: posPropReportUpdate,
        position_id: posIdUpdate,
        value: posPropUpdate,
      });
      setPosIdUpdate(null);
      setPropIdUpdate(null);
      setPosPropUpdate(null);
      setPosPropReportUpdate(null);
      handleGetPosProps(filteredMonth);
    } catch (error) {
      console.log("error updatePositionProportion: ", error);
    }
  };

  const handleDeletPosProp = async (id: number) => {
    try {
      await deletePositionProportion(id);
      handleGetPosProps(filteredMonth);
    } catch (error) {
      console.log("deletePositionProportion error:", error);
    }
  };

  useEffect(() => {
    handleGetPosProps(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetPositions();
  }, []);

  return (
    <Table striped hover responsive className="mb-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Position name</th>
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
        {positionProportions &&
          !!(positionProportions.length > 0) &&
          positionProportions.map((x) => (
            <tr key={"proportion-by-position-id-" + x.id}>
              <td>1</td>
              <td>
                {!(propIdUpdate == x.id) ? (
                  <span>
                    {positions.find((y) => y.id == x.position_id)?.name}
                  </span>
                ) : (
                  <select
                    className="form-select"
                    value={posIdUpdate || ""}
                    onChange={(e) => setPosIdUpdate(parseInt(e.target.value))}
                  >
                    {positions &&
                      !!(positions.length > 0) &&
                      positions.map((x) => (
                        <option
                          value={x.id}
                          key={"positions-select-option-id-" + x.id}
                        >
                          {x.name}
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
                    value={posPropUpdate || ""}
                    onChange={(e) => setPosPropUpdate(parseInt(e.target.value))}
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
                    value={posPropReportUpdate || ""}
                    onChange={(e) => setPosPropReportUpdate(e.target.value)}
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
                  <button className="btn p-1" onClick={handleUpdatePosProp}>
                    <i className="bx bx-check"></i>
                  </button>
                )}
                <button
                  className="btn p-1"
                  onClick={() => handleDeletPosProp(x.id)}
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
              onChange={(e) => setPosId(e.target.value)}
              value={posId?.toString()}
            >
              <option value=""></option>
              {positions &&
                !!(positions.length > 0) &&
                positions.map((x) => (
                  <option
                    value={x.id}
                    key={"positions-select-option-id-" + x.id}
                  >
                    {x.name}
                  </option>
                ))}
            </select>
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPosProp(parseInt(e.target.value))}
              value={posProp || ""}
            />
          </td>
          <td>
            <input
              type="month"
              onChange={(e) => setPosPropReport(e.target.value)}
              min={`${currentYear}-${currentMonth < 9 ? "0" : ""}${
                currentMonth + 1
              }`}
              className="form-control"
              value={posPropReport || ""}
            />
          </td>
          <td>{/* <input type="date" className="form-control" /> */}</td>
          <td>
            <button
              className="btn p-1 btn-icon btn-success"
              onClick={handleCreatePosProp}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default PositionProportionTable;
