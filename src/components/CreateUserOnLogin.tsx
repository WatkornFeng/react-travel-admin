import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  API_HOST_URL,
  ROUTE_SIGNUP_USER,
  ROUTE_USER_BY_EMAIL,
} from "../services/constants";

export default function CreateUserOnLogin() {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      const syncUser = async () => {
        try {
          const token = await getAccessTokenSilently();

          const res = await fetch(
            API_HOST_URL + ROUTE_USER_BY_EMAIL + `/${user.email}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (res.status === 404) {
            // Only create user if not found
            await fetch(API_HOST_URL + ROUTE_SIGNUP_USER, {
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
          }
        } catch (error) {
          console.error("Error syncing user", error);
        }
      };

      syncUser();
    }
  }, [isAuthenticated, user, getAccessTokenSilently]);

  return null;
}
