import React, { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  // if (token) {
  //   // Redirect them to the /login page, but save the current location they were trying to go to
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  return <Outlet />;
};

export default RequireAuth;
