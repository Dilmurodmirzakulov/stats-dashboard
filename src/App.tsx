import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Layout from "./layout/layout";
import PageNotFound from "./pages/404";
import "boxicons/css/boxicons.min.css";
import "./assets/css/boxicons.css";
import "./assets/css/core.css";
import "./assets/css/theme-default.css";
import "./assets/css/demo.css";
import "./assets/css/custom.css";
import RequireAuth from "./routes/RequireAuth";
import EmployeeOverview from "./pages/hr/employeeOverview";
import EmployeeExperience from "./pages/hr/employeeExperience";
import EmployeeDemographics from "./pages/hr/employeeDemographics";
import EmployeeAbsenceRate from "./pages/hr/employeeAbsenceRate";
import Recruitment from "./pages/hr/recruitment";
import Turnover from "./pages/hr/turnover";
import EmployeeOverviewForms from "./pages/forms/employeeOverviewForms";
import EmployeeExperienceForms from "./pages/forms/employeeExperienceForms";
import EmployeeDemographicsForms from "./pages/forms/employeeDemographicsForms";
import TurnoverForms from "./pages/forms/turnoverForms";
import DmsForms from "./pages/forms/dmsForms";
import DmsCharts from "./pages/dms";
import RecruitmentForms from "./pages/forms/recruitmentForms";
import AskWIUTForms from "./pages/forms/askWiutForms";
import AskWiut from "./pages/askWiut";
import Stats from "./pages/stats";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route path="/login" element={<Login />} />

          {/* we want to protect these routes */}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Stats />} />
              <Route path="/employee-overview" element={<EmployeeOverview />} />
              <Route
                path="/employee-experience"
                element={<EmployeeExperience />}
              />
              <Route
                path="/employee-demographics"
                element={<EmployeeDemographics />}
              />
              <Route
                path="/employee-absence-rate"
                element={<EmployeeAbsenceRate />}
              />
              <Route path="/recruitment" element={<Recruitment />} />
              <Route path="/turnover" element={<Turnover />} />
              <Route
                path="/employee-forms-overview"
                element={<EmployeeOverviewForms />}
              />
              <Route
                path="/employee-forms-experience"
                element={<EmployeeExperienceForms />}
              />
              <Route
                path="/employee-forms-demographics"
                element={<EmployeeDemographicsForms />}
              />
              <Route path="/recruitmenforms" element={<RecruitmentForms />} />
              <Route path="/turnoveforms" element={<TurnoverForms />} />
              <Route path="/dms-forms" element={<DmsForms />} />
              <Route path="/dm-s" element={<DmsCharts />} />
              <Route path="/askwiut-forms" element={<AskWIUTForms />} />
              <Route path="/askwiut-stats" element={<AskWiut />} />
              {/* <Route path="/signature/:id" element={<Signature />} />
              <Route path="/ijro" element={<Ijro />} />
              <Route path="/ijro/:id" element={<IjroDoc />} /> */}
            </Route>
          </Route>

          {/* catch all */}
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
