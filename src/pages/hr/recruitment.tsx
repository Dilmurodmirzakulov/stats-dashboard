import React from "react";
import OpenPositions from "../../components/stats/Recruitment/OpenPositions";
import Offers from "../../components/stats/Recruitment/Offers";
import TimeHireByCategory from "../../components/stats/Recruitment/TimeHireByCategory";
import InterviewsByCategory from "../../components/stats/Recruitment/InterviewsByCategory";
import HiredCandidates from "../../components/stats/Recruitment/HiredCandidates";
import OffersAcceptance from "../../components/stats/Recruitment/OffersAcceptance";
import PositionFilledByCategory from "../../components/stats/Recruitment/PositionFilledByCategory";
import ReadvertisedPositions from "../../components/stats/Recruitment/ReadvertisedPositions";

const Recruitment = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Recruitment</h4>
      </div>
      <div className="row">
        <div className="col-6 col-lg-2 mb-4">
          <div className="card card-border-shadow-primary h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2 pb-1">
                <div className="avatar me-2">
                  <span className="avatar-initial rounded bg-label-primary">
                    <i className="bx bx-group"></i>
                  </span>
                </div>
                <h4 className="ms-1 mb-0">459</h4>
              </div>
              <p className="mb-0">Total Employeers</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-2 mb-4">
          <div className="card card-border-shadow-warning h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2 pb-1">
                <div className="avatar me-2">
                  <span className="avatar-initial rounded bg-label-warning">
                    <i className="bx bx-group"></i>
                  </span>
                </div>
                <h4 className="ms-1 mb-0">21</h4>
              </div>
              <p className="mb-0">Management Staff</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-2 mb-4">
          <div className="card card-border-shadow-danger h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2 pb-1">
                <div className="avatar me-2">
                  <span className="avatar-initial rounded bg-label-danger">
                    <i className="bx bx-group"></i>
                  </span>
                </div>
                <h4 className="ms-1 mb-0">136</h4>
              </div>
              <p className="mb-0">Academic Staff</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-2 mb-4">
          <div className="card card-border-shadow-danger h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2 pb-1">
                <div className="avatar me-2">
                  <span className="avatar-initial rounded bg-label-danger">
                    <i className="bx bx-group"></i>
                  </span>
                </div>
                <h4 className="ms-1 mb-0">153</h4>
              </div>
              <p className="mb-0">Professional Support</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-2 mb-4">
          <div className="card card-border-shadow-info h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2 pb-1">
                <div className="avatar me-2">
                  <span className="avatar-initial rounded bg-label-info">
                    <i className="bx bx-group"></i>
                  </span>
                </div>
                <h4 className="ms-1 mb-0">149</h4>
              </div>
              <p className="mb-0">Technical Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <OpenPositions />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <Offers />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <TimeHireByCategory />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <InterviewsByCategory />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <HiredCandidates />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <OffersAcceptance />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <PositionFilledByCategory />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <ReadvertisedPositions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
