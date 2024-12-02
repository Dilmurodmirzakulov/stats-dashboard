import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  ContractDistData,
  createContractDist,
  deleteContractDist,
  getContractDists,
  getContractDistsLatest,
  updateContractDist,
} from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setContractDists } from "../../../store/slices/EmployeeOverview/contractDistributionSlice";
import { formatDate } from "../../../utils/custom";

const DistributionByContractTable = () => {
  const dispatch = useDispatch();
  const { contractDists } = useSelector(
    (state: RootState) => state.contractDistributionReducer
  );

  const [contractDist, setContractDist] = useState<null | string>(null);
  const [contractDistValue, setContractDistValue] = useState<null | number>(
    null
  );
  const [contractDistValueReport, setContractDistValueReport] = useState<
    null | string
  >(null);

  const [contractDistIdUpdate, setContractDistIdUpdate] = useState<
    null | number
  >(null);
  const [contractDistUpdate, setContractDistUpdate] = useState<null | number>(
    null
  );
  const [contractDistValueUpdate, setContractDistValueUpdate] = useState<
    null | number
  >(null);
  const [contractDistReportUpdate, setContractDistReportUpdate] = useState<
    null | string
  >(null);

  const [filteredMonth, setFilteredMonth] = useState("");

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handleGetContrasctDists = async (filteredMonth: string = "") => {
    try {
      let res = await getContractDists(filteredMonth);
      dispatch(setContractDists(res.data));
    } catch (error) {
      console.log("error getContractDists: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getContractDistsLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getContractDistsLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetLastReports();
  }, []);

  const handleCreatecontractDistValue = async () => {
    if (!contractDist || !contractDistValueReport || !contractDistValue) return;
    try {
      await createContractDist({
        calculated_date: contractDistValueReport,
        contract_type: parseInt(contractDist),
        value: contractDistValue,
      });
      setContractDist("");
      setContractDistValue(null);
      setContractDistValueReport(null);
      handleGetContrasctDists(filteredMonth);
    } catch (error) {
      console.log("error createContractDist: ", error);
    }
  };

  const handleUpdateClick = (x: ContractDistData) => {
    setContractDistUpdate(x.contract_type);
    setContractDistReportUpdate(x.calculated_date);
    setContractDistValueUpdate(x.value);
    setContractDistIdUpdate(x.id);
  };

  const handleUpdateContractDist = async () => {
    if (
      !contractDistUpdate ||
      !contractDistReportUpdate ||
      !contractDistValueUpdate ||
      !contractDistIdUpdate
    )
      return;
    try {
      await updateContractDist({
        id: contractDistIdUpdate,
        calculated_date: contractDistReportUpdate,
        contract_type: contractDistUpdate,
        value: contractDistValueUpdate,
      });
      setContractDistUpdate(null);
      setContractDistIdUpdate(null);
      setContractDistValueUpdate(null);
      setContractDistReportUpdate(null);
      handleGetContrasctDists(filteredMonth);
    } catch (error) {
      console.log("error updateContractDist: ", error);
    }
  };

  const handleDeleteContractDist = async (id: number) => {
    try {
      await deleteContractDist(id);
      handleGetContrasctDists(filteredMonth);
    } catch (error) {
      console.log("deleteContractDist error:", error);
    }
  };

  useEffect(() => {
    handleGetContrasctDists(filteredMonth);
  }, [filteredMonth]);

  console.log("contractDistUpdate", contractDistUpdate);
  return (
    <Table striped hover responsive className="mb-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Contract type</th>
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
        {contractDists &&
          !!(contractDists.length > 0) &&
          contractDists.map((x, idx) => (
            <tr key={"proportion-by-contract-distribution-id-" + x.id}>
              <td>{idx + 1}</td>
              <td>
                {!(contractDistIdUpdate == x.id) ? (
                  <span>
                    {x.contract_type == 1 && "Regular"}
                    {x.contract_type == 2 && "Labor"}
                  </span>
                ) : (
                  <select
                    className="form-select"
                    value={contractDistUpdate || ""}
                    onChange={(e) =>
                      setContractDistUpdate(parseInt(e.target.value))
                    }
                  >
                    <option value={1}>Regular</option>
                    <option value={2}>Labor</option>
                  </select>
                )}
              </td>

              <td>
                {!(contractDistIdUpdate == x.id) ? (
                  <span>{x.value}</span>
                ) : (
                  <input
                    type="number"
                    className="form-control"
                    value={contractDistValueUpdate || ""}
                    onChange={(e) =>
                      setContractDistValueUpdate(parseInt(e.target.value))
                    }
                  />
                )}
              </td>
              <td>
                {!(contractDistIdUpdate == x.id) ? (
                  <span>{x.calculated_date}</span>
                ) : (
                  <input
                    type="month"
                    className="form-control"
                    value={contractDistReportUpdate || ""}
                    onChange={(e) =>
                      setContractDistReportUpdate(e.target.value)
                    }
                  />
                )}
              </td>
              <td>
                <span>{formatDate(x.created_at)}</span>
              </td>
              <td>
                {!(contractDistIdUpdate == x.id) ? (
                  <button
                    className="btn p-1"
                    onClick={() => handleUpdateClick(x)}
                  >
                    <i className="bx bxs-pencil"></i>
                  </button>
                ) : (
                  <button
                    className="btn p-1"
                    onClick={handleUpdateContractDist}
                  >
                    <i className="bx bx-check"></i>
                  </button>
                )}
                <button
                  className="btn p-1"
                  onClick={() => handleDeleteContractDist(x.id)}
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
              onChange={(e) => setContractDist(e.target.value)}
              value={contractDist?.toString()}
            >
              <option value=""></option>
              <option value={1}>Regular</option>
              <option value={2}>Labor</option>
            </select>
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setContractDistValue(parseInt(e.target.value))}
              value={contractDistValue || ""}
            />
          </td>
          <td>
            <input
              type="month"
              onChange={(e) => setContractDistValueReport(e.target.value)}
              min={`${currentYear}-${currentMonth < 9 ? "0" : ""}${
                currentMonth + 1
              }`}
              className="form-control"
              value={contractDistValueReport || ""}
            />
          </td>
          <td>{/* <input type="date" className="form-control" /> */}</td>
          <td>
            <button
              className="btn p-1 btn-icon btn-success"
              onClick={handleCreatecontractDistValue}
            >
              <i className="bx bx-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DistributionByContractTable;
