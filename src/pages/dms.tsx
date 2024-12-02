import React from "react";
import YearsWithUniversity from "../components/stats/EmployeeExperience/YearsWithUniversity";
import AverageExperienceDepartment from "../components/stats/EmployeeExperience/AverageExperienceDepartment";
import AverageExperienceCategory from "../components/stats/EmployeeExperience/AverageExperienceCategory";
import ActiveUsersChart from "../components/stats/DMS/ActiveUsersChart";
import TotalDocsPerYearChart from "../components/stats/DMS/TotalDocsPerYearChart";
import TotalDocsPerMonthChart from "../components/stats/DMS/TotalDocsPerMonthChart";
import DocsPendingApprovalChart from "../components/stats/DMS/DocsPendingApprovalChart";
import AverageTimeApproveChart from "../components/stats/DMS/AverageTimeApproveChart";
import DocsByTypeChart from "../components/stats/DMS/DocsByTypeChart";
import DocsStatusDistChart from "../components/stats/DMS/DocsStatusDistChart";
import TopTenSignedPersonelChart from "../components/stats/DMS/TopTenSignedPersonelChart";

const DmsCharts = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">DMS reports</h4>
        <a href="#doc-by-type">Test</a>
      </div>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <ActiveUsersChart />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <TotalDocsPerYearChart />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <TotalDocsPerMonthChart />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <AverageTimeApproveChart />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <DocsStatusDistChart />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <DocsPendingApprovalChart />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <DocsByTypeChart />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <TopTenSignedPersonelChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DmsCharts;
