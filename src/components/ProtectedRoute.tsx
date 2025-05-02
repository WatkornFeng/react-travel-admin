import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import Spinner from "./Spinner";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner size="2rem" thick={2} />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
