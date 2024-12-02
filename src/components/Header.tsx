import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
interface HeaderProps {
  setIsShowAside: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<HeaderProps> = ({ setIsShowAside }) => {
  return (
    <nav
      className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <button
          className="btn nav-item nav-link px-0 me-xl-4"
          onClick={() => setIsShowAside(true)}
        >
          <i className="bx bx-menu bx-sm"></i>
        </button>
      </div>

      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* <!-- User --> */}
          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <Dropdown>
              <Dropdown.Toggle
                variant="none"
                className="wu-dropdown-user"
                id="dropdown-basic"
              >
                <div className="avatar avatar-online">
                  <img
                    src={require("../assets/img/no-photo.webp")}
                    alt=""
                    className="w-px-40 h-auto rounded-circle"
                  />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className="dropdown-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3 wu-dropdown-user">
                      <div className="avatar avatar-online">
                        <img
                          src={require("../assets/img/no-photo.webp")}
                          alt=""
                          className="w-px-40 h-auto rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <span className="fw-semibold d-block">
                        Zarina Ochilova
                      </span>
                    </div>
                  </div>
                </div>
                {/* <Link to={"/profile"} className="dropdown-item">
                  <i className="bx bx-user me-2"></i>
                  <span className="align-middle">My Profile</span>
                </Link> */}
                <div className="dropdown-divider"></div>
                <Link to={"/"} className="dropdown-item">
                  <i className="bx bx-power-off me-2"></i>
                  <span className="align-middle">Log Out</span>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          {/* <!--/ User --> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
