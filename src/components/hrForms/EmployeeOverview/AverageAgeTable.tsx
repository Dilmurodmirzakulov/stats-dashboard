import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  AverageAgeData,
  createAverageAge,
  deleteAverageAge,
  getAverageAges,
  getAges,
  updateAverageAge,
  getAverageAgesLatest,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setAverageAges } from "../../../store/slices/EmployeeOverview/averageAgesSlice";
import { setAges } from "../../../store/slices/EmployeeOverview/agesSlice";
import { formatDate } from "../../../utils/custom";

const AverageAgeTable = () => {
  const dispatch = useDispatch();
  const { ages } = useSelector((state: RootState) => state.agesReducer);
  const { averageAges } = useSelector(
    (state: RootState) => state.averageAgesReducer
  );

  const [ageId, setAgeId] = useState<null | string>(null);
  const [averageAge, setAverageAge] = useState<null | number>(null);
  const [averageAgeReport, setAverageAgeReport] = useState<null | string>(null);

  const [avarageIdUpdate, setAvarageIdUpdate] = useState<null | number>(null);
  const [ageIdUpdate, setAgeIdUpdate] = useState<null | number>(null);
  const [averageAgeUpdate, setAverageAgeUpdate] = useState<null | number>(null);
  const [averageAgeReportUpdate, setAverageAgeReportUpdate] = useState<
    null | string
  >(null);

  const [filteredMonth, setFilteredMonth] = useState("");

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handleGetAverageAges = async (filteredMonth: string = "") => {
    try {
      let res = await getAverageAges(filteredMonth);
      dispatch(setAverageAges(res.data));
    } catch (error) {
      console.log("error getAverageAges: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getAverageAgesLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getAverageAgesLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  const handleGetAges = async () => {
    try {
      const res = await getAges();
      dispatch(setAges(res.data));
    } catch (error) {
      console.log("getAges error:", error);
    }
  };

  const handleCreateAverageAge = async () => {
    if (!ageId || !averageAgeReport || !averageAge) return;
    try {
      await createAverageAge({
        calculated_date: averageAgeReport,
        age_id: parseInt(ageId),
        value: averageAge,
      });
      setAgeId("");
      setAverageAge(null);
      setAverageAgeReport(null);
      handleGetAverageAges(filteredMonth);
    } catch (error) {
      console.log("error createAverageAge: ", error);
    }
  };

  const handleUpdateClick = (x: AverageAgeData) => {
    setAgeIdUpdate(x.age_id);
    setAverageAgeReportUpdate(x.calculated_date);
    setAverageAgeUpdate(x.value);
    setAvarageIdUpdate(x.id);
  };

  const handleUpdateAverageAge = async () => {
    if (
      !ageIdUpdate ||
      !averageAgeReportUpdate ||
      !averageAgeUpdate ||
      !avarageIdUpdate
    )
      return;
    try {
      await updateAverageAge({
        id: avarageIdUpdate,
        calculated_date: averageAgeReportUpdate,
        age_id: ageIdUpdate,
        value: averageAgeUpdate,
      });
      setAgeIdUpdate(null);
      setAvarageIdUpdate(null);
      setAverageAgeUpdate(null);
      setAverageAgeReportUpdate(null);
      handleGetAverageAges(filteredMonth);
    } catch (error) {
      console.log("error updateAverageAge: ", error);
    }
  };

  const handleDeletAverageAge = async (id: number) => {
    try {
      await deleteAverageAge(id);
      handleGetAverageAges(filteredMonth);
    } catch (error) {
      console.log("deleteAverageAge error:", error);
    }
  };

  useEffect(() => {
    handleGetAverageAges(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetAges();
  }, []);

  return (
    <Table striped hover responsive className="mb-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Age</th>
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
        {averageAges &&
          !!(averageAges.length > 0) &&
          averageAges.map((x) => (
            <tr key={"avarage-age-id-" + x.id}>
              <td>1</td>
              <td>
                {!(avarageIdUpdate == x.id) ? (
                  <span>{ages.find((y) => y.id == x.age_id)?.name}</span>
                ) : (
                  <select
                    className="form-select"
                    value={ageIdUpdate || ""}
                    onChange={(e) => setAgeIdUpdate(parseInt(e.target.value))}
                  >
                    {ages &&
                      !!(ages.length > 0) &&
                      ages.map((x) => (
                        <option
                          value={x.id}
                          key={"ages-select-option-id-" + x.id}
                        >
                          {x.name}
                        </option>
                      ))}
                  </select>
                )}
              </td>

              <td>
                {!(avarageIdUpdate == x.id) ? (
                  <span>{x.value}</span>
                ) : (
                  <input
                    type="number"
                    className="form-control"
                    value={averageAgeUpdate || ""}
                    onChange={(e) =>
                      setAverageAgeUpdate(parseInt(e.target.value))
                    }
                  />
                )}
              </td>
              <td>
                {!(avarageIdUpdate == x.id) ? (
                  <span>{x.calculated_date}</span>
                ) : (
                  <input
                    type="month"
                    className="form-control"
                    value={averageAgeReportUpdate || ""}
                    onChange={(e) => setAverageAgeReportUpdate(e.target.value)}
                  />
                )}
              </td>
              <td>
                <span>{formatDate(x.created_at)}</span>
              </td>
              <td>
                {!(avarageIdUpdate == x.id) ? (
                  <button
                    className="btn p-1"
                    onClick={() => handleUpdateClick(x)}
                  >
                    <i className="bx bxs-pencil"></i>
                  </button>
                ) : (
                  <button className="btn p-1" onClick={handleUpdateAverageAge}>
                    <i className="bx bx-check"></i>
                  </button>
                )}
                <button
                  className="btn p-1"
                  onClick={() => handleDeletAverageAge(x.id)}
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
              onChange={(e) => setAgeId(e.target.value)}
              value={ageId?.toString()}
            >
              <option value=""></option>
              {ages &&
                !!(ages.length > 0) &&
                ages.map((x) => (
                  <option value={x.id} key={"ages-select-option-id-" + x.id}>
                    {x.name}
                  </option>
                ))}
            </select>
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAverageAge(parseInt(e.target.value))}
              value={averageAge || ""}
            />
          </td>
          <td>
            <input
              type="month"
              onChange={(e) => setAverageAgeReport(e.target.value)}
              min={`${currentYear}-${currentMonth < 9 ? "0" : ""}${
                currentMonth + 1
              }`}
              className="form-control"
              value={averageAgeReport || ""}
            />
          </td>
          <td>{/* <input type="date" className="form-control" /> */}</td>
          <td>
            <button
              className="btn p-1 btn-icon btn-success"
              onClick={handleCreateAverageAge}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AverageAgeTable;
