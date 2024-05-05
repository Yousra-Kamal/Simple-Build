/* eslint-disable react/prop-types */
import { Outlet, Navigate } from "react-router-dom";

import Auth from "../utils/auth";

export default function ProtectedRoute() {
  if (Auth.loggedIn() === false) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
