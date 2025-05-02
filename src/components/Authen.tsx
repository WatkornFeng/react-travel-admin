import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Authen({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (!isAuthenticated) {
    navigate("/");
  }

  return children;
}

export default Authen;
