import React from "react";
import { Link, useLocation } from "react-router-dom";

const MobileTabs = () => {
  const location = useLocation();
  return (
    <div className="mobile-nav d-lg-none">
      <ul className="nav">
        <li className="nav-item">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" && "active"}`}
          >
            <i className="bx bxs-file-doc"></i>
            <span className="menu-title">Internal</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/ijro"
            className={`nav-link ${location.pathname === "/ijro" && "active"}`}
          >
            <i className="bx bx-home-circle"></i>
            <span className="menu-title">Ijro</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link" >
            <i className="bx bxs-file-plus"></i>
            <span className="menu-title">Create</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileTabs;
