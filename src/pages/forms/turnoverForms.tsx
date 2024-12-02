import React from "react";
import TerminationYearsTable from "../../components/hrForms/Turnover/terminationYearsTable";
import TerminationMonthsTable from "../../components/hrForms/Turnover/terminationMonthsTable";
import TerminationRateCategoryTable from "../../components/hrForms/Turnover/TerminationRateCategoryTable";
import TerminationReasonTable from "../../components/hrForms/Turnover/TerminationReasonTable";

const TurnoverForms = () => {
  return (
    <>
      <div className="row g-4">
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Termination by year</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <TerminationYearsTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Termination by month</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <TerminationMonthsTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Termination rate by category</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <TerminationRateCategoryTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Termination by reason</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <TerminationReasonTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TurnoverForms;
