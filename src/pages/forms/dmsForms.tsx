import React from "react";
import ActiveUsersTable from "../../components/hrForms/DMS/ActiveUsersTable";
import AverageTimeApproveTable from "../../components/hrForms/DMS/AverageTimeApproveTable";
import DocsByTypeTable from "../../components/hrForms/DMS/DocsByTypeTable";
import DocsPendingApprovalTable from "../../components/hrForms/DMS/DocsPendingApprovalTable";
import DocsStatusDistTable from "../../components/hrForms/DMS/DocsStatusDistTable";
import TopTenSignedPersonelTable from "../../components/hrForms/DMS/TopTenSignedPersonelTable";
import TotalDocsPerMonthTable from "../../components/hrForms/DMS/TotalDocsPerMonthTable";
import TotalDocsPerYearTable from "../../components/hrForms/DMS/TotalDocsPerYearTable";

const DmsForms = () => {
  return (
    <>
      <div className="row g-4">
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Active Users</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <ActiveUsersTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Average Time Per Approval Step</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <AverageTimeApproveTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Documents by Type</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <DocsByTypeTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Documents Pending Approval</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <DocsPendingApprovalTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Document Status Distribution</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <DocsStatusDistTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Top 10 Signed Personnel</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <TopTenSignedPersonelTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">
              Total Number of Documents Processed Per Month
            </h4>
          </div>
          <div className="card">
            <div className="card-body">
              <TotalDocsPerMonthTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">
              Total Number of Documents Processed Per Year
            </h4>
          </div>
          <div className="card">
            <div className="card-body">
              <TotalDocsPerYearTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DmsForms;
