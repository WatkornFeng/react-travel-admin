//localhost:3000/api/v1/hotels/hotel-stats

import { API_HOST_URL } from "./constants";

interface ICreateHotel {
  status: string;
}

export async function getHotelStats() {
  const response = await fetch(API_HOST_URL + "/api/v1/hotels/hotel-stats");

  const res = await response.json();

  return res;
}
