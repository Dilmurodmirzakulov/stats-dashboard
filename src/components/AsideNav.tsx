import React, { useEffect, useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

interface AsideNavProps {
  setIsShowAside: React.Dispatch<React.SetStateAction<boolean>>;
}

const AsideNav: React.FC<AsideNavProps> = ({ setIsShowAside }) => {
  const location = useLocation();
  const [openHRCollapse, setOpenHRCollapse] = useState(false);
  const [openHRformsCollapse, setOpenHRformsCollapse] = useState(false);
  const [isHRActive, setIsHRActive] = useState(false);
  const [isHrFormsActive, setIsHrFormsActive] = useState(false);
  useEffect(() => {
    setIsHRActive(
      location.pathname.includes("employee-overview") ||
        location.pathname.includes("employee-experience") ||
        location.pathname.includes("employee-demographics") ||
        location.pathname.includes("employee-absence-rate") ||
        location.pathname.includes("recruitment") ||
        location.pathname.includes("turnover")
    );
    setIsHrFormsActive(
      location.pathname.includes("employee-forms-overview") ||
        location.pathname.includes("employee-forms-experience") ||
        location.pathname.includes("employee-forms-demographics") ||
        location.pathname.includes("recruitmenforms") ||
        location.pathname.includes("turnoveforms") ||
        location.pathname.includes("dms-forms") ||
        location.pathname.includes("askwiut-forms")
    );
  }, [location.pathname]);
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo justify-content-start">
        <Link to="/" className="app-brand-link">
          <span className="app-brand-text demo menu-text fw-bolder text-uppercase text-gray">
            WIUT Reports
          </span>
        </Link>
        <a
          onClick={() => setIsShowAside(false)}
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        {/* <!-- Internal --> */}
        <li className={`menu-item ${isHRActive && "active"}`}>
          <div
            onClick={() => setOpenHRCollapse(!openHRCollapse)}
            aria-controls="hr-collapse-text"
            aria-expanded={openHRCollapse}
            className={`menu-link menu-toggle ${
              openHRCollapse ? "active" : ""
            }`}
            // style={{width: "-webkit-fill-available"}}
          >
            <i className="menu-icon tf-icons bx bx-briefcase-alt"></i>
            <div>HR</div>
          </div>
          <Collapse in={openHRCollapse}>
            <div id="hr-collapse-text">
              <ul className="menu-sub">
                <li
                  className={`menu-item ${
                    location.pathname.includes("employee-overview") && "active"
                  }`}
                >
                  <Link to="/employee-overview" className="menu-link">
                    Employee Overview
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname.includes("employee-experience") &&
                    "active"
                  }`}
                >
                  <Link to="/employee-experience" className="menu-link">
                    Employee experience
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname.includes("employee-demographics") &&
                    "active"
                  }`}
                >
                  <Link to="/employee-demographics" className="menu-link">
                    Employee Demographics
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname.includes("employee-absence-rate") &&
                    "active"
                  }`}
                >
                  <Link to="/employee-absence-rate" className="menu-link">
                    Employee Absence rate
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname.includes("recruitment") && "active"
                  }`}
                >
                  <Link to="/recruitment" className="menu-link">
                    Recruitment
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname.includes("turnover") && "active"
                  }`}
                >
                  <Link to="/turnover" className="menu-link">
                    Turnover
                  </Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        {/* <!-- dms --> */}
        <li
          className={`menu-item ${
            (location.pathname === "/dm-s" ||
              location.pathname.includes("dm-s")) &&
            "active"
          }`}
        >
          <Link to={"/dm-s"} className="menu-link">
            <i className="menu-icon tf-icons bx bxs-file-doc"></i>
            <div>DMS</div>
          </Link>
        </li>
        {/* <!-- AskWIUT --> */}
        <li
          className={`menu-item ${
            (location.pathname === "/askwiut-stats" ||
              location.pathname.includes("askwiut-stats")) &&
            "active"
          }`}
        >
          <Link to={"/askwiut-stats"} className="menu-link">
            <i className="menu-icon tf-icons bx bxs-file-doc"></i>
            <div>Information and Customer Services</div>
          </Link>
        </li>
        {/* FORMS */}

        <li className={`menu-item ${isHrFormsActive && "active"}`}>
          <div
            onClick={() => setOpenHRformsCollapse(!openHRformsCollapse)}
            aria-controls="hr-forms-collapse-text"
            aria-expanded={openHRformsCollapse}
            className={`menu-link menu-toggle ${
              openHRformsCollapse ? "active" : ""
            }`}
            // style={{width: "-webkit-fill-available"}}
          >
            <i className="menu-icon tf-icons bx bx-list-plus"></i>
            <div>Forms</div>
          </div>
          <Collapse in={openHRformsCollapse}>
            <div id="employee-overview-forms-collapse-text">
              <ul className="menu-sub">
                <li
                  className={`menu-item ${
                    location.pathname.includes("employee-forms-overview") &&
                    "active"
                  }`}
                >
                  <Link to="/employee-forms-overview" className="menu-link">
                    Employee Overview
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname.includes("employee-forms-experience") &&
                    "active"
                  }`}
                >
                  <Link to="/employee-forms-experience" className="menu-link">
                    Employee Experience
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname.includes("employee-forms-demographics") &&
                    "active"
                  }`}
                >
                  <Link to="/employee-forms-demographics" className="menu-link">
                    Employee Demographics
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname.includes("recruitmenforms") && "active"
                  }`}
                >
                  <Link to="/recruitmenforms" className="menu-link">
                    Recruitment
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname.includes("turnoveforms") && "active"
                  }`}
                >
                  <Link to="/turnoveforms" className="menu-link">
                    Turnover
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname.includes("dms-forms") && "active"
                  }`}
                >
                  <Link to="/dms-forms" className="menu-link">
                    DMS
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname.includes("askwiut-forms") && "active"
                  }`}
                >
                  <Link to="/askwiut-forms" className="menu-link">
                    Information and Customer Services
                  </Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
      </ul>
    </aside>
  );
};

export default AsideNav;
