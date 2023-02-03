import { Navigate } from "react-router-dom";

export default function PublicRoute({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}) {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
