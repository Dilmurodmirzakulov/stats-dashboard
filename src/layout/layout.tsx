import React, { useEffect, useState } from "react";
import AsideNav from "../components/AsideNav";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import MobileTabs from "../components/MobileTabs";
import { getDepartments } from "../api";
import { setDepartments } from "../store/slices/EmployeeOverview/departmentsSlice";
import { useDispatch } from "react-redux";
import { getDepartmentProportions } from "../api/EmployeeOverview/departmentProportion/getDepartmentProportions";
import { setDepartmentProportions } from "../store/slices/EmployeeOverview/departmentProportionsSlice";

const Layout = () => {
  const dispatch = useDispatch();

  const [isShowAside, setIsShowAside] = useState(false);
  const handleGetDepartments = async () => {
    try {
      let res = await getDepartments();
      dispatch(setDepartments(res.data));
    } catch (error) {
      console.log("getDepartments error:", error);
    }
  };
  const handleGetDepartmentProportions = async () => {
    try {
      let res = await getDepartmentProportions();
      dispatch(setDepartmentProportions(res.data));
    } catch (error) {}
  };
  useEffect(() => {
    handleGetDepartments();
    handleGetDepartmentProportions();
  }, []);
  return (
    <div className={isShowAside ? "aside-mob-show" : ""}>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <AsideNav setIsShowAside={setIsShowAside} />
          {/* <!-- Layout container --> */}
          <div className="layout-page">
            <Header setIsShowAside={setIsShowAside} />
            {/* <!-- Content wrapper --> */}
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <Outlet />
              </div>
              <div className="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>

        {/* <!-- Overlay --> */}
        <div
          className="layout-overlay layout-menu-toggle"
          onClick={() => setIsShowAside(false)}
        ></div>
      </div>
      {/* <MobileTabs /> */}
    </div>
  );
};

export default Layout;
