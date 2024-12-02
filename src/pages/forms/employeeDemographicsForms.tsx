import React from "react";
import StaffNationalityTable from "../../components/hrForms/EmployeeDemographics/StaffNationalityTable";
import StaffPositionTable from "../../components/hrForms/EmployeeDemographics/StaffPositionTable";
import StaffCategoryGenderTable from "../../components/hrForms/EmployeeDemographics/StaffCategoryGenderTable";
import AgeGroupsTable from "../../components/hrForms/EmployeeDemographics/AgeGroupsTable";
import StaffByCategoryTable from "../../components/hrForms/EmployeeDemographics/StaffByCategoryTable";

const EmployeeDemographicsForms = () => {
  return (
    <>
      <div className="row g-4">
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Staff by nationality</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <StaffNationalityTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Staff Category by Gender</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <StaffCategoryGenderTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Staff by position</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <StaffPositionTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Age Groups</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <AgeGroupsTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Staff by Category</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <StaffByCategoryTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDemographicsForms;
