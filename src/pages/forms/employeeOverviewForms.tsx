import React from "react";
import DepartmentTable from "../../components/hrForms/EmployeeOverview/DepartmentTable";
import DepartmentProportionTable from "../../components/hrForms/EmployeeOverview/DepartmentProportionTable";
import PositionsTable from "../../components/hrForms/EmployeeOverview/PositionsTable";
import PositionProportionTable from "../../components/hrForms/EmployeeOverview/PositionProportionTable";
import DistributionByContractTable from "../../components/hrForms/EmployeeOverview/DistributionByContractTable";
import DistributionByShiftTable from "../../components/hrForms/EmployeeOverview/DistributionByShiftTable";
import AgesTable from "../../components/hrForms/EmployeeOverview/AgesTable";
import AverageAgeTable from "../../components/hrForms/EmployeeOverview/AverageAgeTable";
import StaffByGender from "../../components/hrForms/EmployeeOverview/StaffByGenderTable";
import EmployeeStatsTable from "../../components/hrForms/EmployeeOverview/EmployeeStatsTable";

const EmployeeOverviewForms = () => {
  return (
    <>
      <div className="row g-4">
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Employee Stats</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <EmployeeStatsTable />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Departments</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
                <div className="mb-2 mb-md-0">Showing entries 1-43 of 100</div>
              </div>
              <DepartmentTable />
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Staff Proportion by Department</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
                <div className="mb-2 mb-md-0">Showing entries 1-43 of 100</div>
              </div>
              <DepartmentProportionTable />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Positions</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
                <div className="mb-2 mb-md-0">Showing entries 1-43 of 100</div>
              </div>
              <PositionsTable />
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Staff Proportion by Position</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
                <div className="mb-2 mb-md-0">Showing entries 1-43 of 100</div>
              </div>
              <PositionProportionTable />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Distribution by contract</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
                <div className="mb-2 mb-md-0">Showing entries 1-43 of 100</div>
              </div>
              <DistributionByContractTable />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Distribution by shift</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
                <div className="mb-2 mb-md-0">Showing entries 1-43 of 100</div>
              </div>
              <DistributionByShiftTable />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Ages</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
                <div className="mb-2 mb-md-0">Showing entries 1-43 of 100</div>
              </div>
              <AgesTable />
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Average Staff Age</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
                <div className="mb-2 mb-md-0">Showing entries 1-43 of 100</div>
              </div>
              <AverageAgeTable />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Staff by Gender</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
                <div className="mb-2 mb-md-0">Showing entries 1-43 of 100</div>
              </div>
              <StaffByGender />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeOverviewForms;
