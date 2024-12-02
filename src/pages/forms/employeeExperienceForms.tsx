import React from "react";
import YearsWithUniversityTable from "../../components/hrForms/EmployeeExperiance/YearsWithUniversityTable";
import AverageExperienceDepartmentTable from "../../components/hrForms/EmployeeExperiance/AverageExperienceDepartmentTable";
import AverageExperienceCategoryTable from "../../components/hrForms/EmployeeExperiance/AverageExperienceCategoryTable";

const EmployeeExperienceForms = () => {
  return (
    <>
      <div className="row g-4">
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Years with University</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <YearsWithUniversityTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Average Years of Experience by department</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <AverageExperienceDepartmentTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Average Years of Experience by category</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <AverageExperienceCategoryTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeExperienceForms;
