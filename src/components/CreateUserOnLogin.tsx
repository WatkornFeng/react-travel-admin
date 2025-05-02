import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { API_HOST_URL, ROUTE_SIGNUP_USER } from "../services/constants";

export default function CreateUserOnLogin() {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      const createUser = async () => {
        try {
          const token = await getAccessTokenSilently();
          const response = await fetch(API_HOST_URL + ROUTE_SIGNUP_USER, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              email: user.email,
              name: user.name,
            }),
          });
        } catch (error) {
          console.error("Error creating user", error);
        }
      };

      createUser();
    }
  }, [isAuthenticated, user]);

  return null;
}
