import React from "react";
import OpenPositionsTable from "../../components/hrForms/Recruitment/OpenPositionsTable";
import OffersTable from "../../components/hrForms/Recruitment/OffersTable";
import TimeHireByCategoryTable from "../../components/hrForms/Recruitment/TimeHireByCategoryTable";
import InterviewsByCategoryTable from "../../components/hrForms/Recruitment/InterviewsByCategoryTable";
import HiredCandidatesTable from "../../components/hrForms/Recruitment/HiredCandidatesTable";
import OffersAcceptanceTable from "../../components/hrForms/Recruitment/OffersAcceptanceTable";
import PositionFilledByCategoryTable from "../../components/hrForms/Recruitment/PositionFilledByCategoryTable";
import ReadvertisedPositionsTable from "../../components/hrForms/Recruitment/ReadvertisedPositionsTable";

const RecruitmentForms = () => {
  return (
    <>
      <div className="row g-4">
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Number of open positions by month</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <OpenPositionsTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Number of offers by month</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <OffersTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Time to hire by category</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <TimeHireByCategoryTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Interviews conducted by category </h4>
          </div>
          <div className="card">
            <div className="card-body">
              <InterviewsByCategoryTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Number of hired candidates by month</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <HiredCandidatesTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Offers Acceptance ratio</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <OffersAcceptanceTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Number of positions filled by category</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <PositionFilledByCategoryTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Number of re-advertised positions by month</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <ReadvertisedPositionsTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecruitmentForms;
