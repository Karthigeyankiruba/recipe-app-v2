import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("token");
  const isStaticTokenValid = isAuthenticated === "9876543210";

  return isStaticTokenValid ? (
    <Outlet />
  ) : (
    <Navigate to="/home" replace={true} />
  );
}

export default ProtectedRoute;
