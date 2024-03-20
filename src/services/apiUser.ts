import { API_HOST_URL, ROUTE_USER } from "./constants";

export async function getUser() {
  const userId = "65d0d5639e5e821d43f476b7";
  const response = await fetch(API_HOST_URL + ROUTE_USER + "/" + userId);

  const { user } = await response.json();
  //   console.log(res);
  return user;
}
