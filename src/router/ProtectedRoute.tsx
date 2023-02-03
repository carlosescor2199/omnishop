import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
}
