//localhost:3000/api/v1/hotels/hotel-stats

import { API_HOST_URL, ROUTE_HOTEL, ROUTE_HOTEL_STATS } from "./constants";

interface ICreateHotel {
  status: string;
}

export async function getHotelStats() {
  const response = await fetch(API_HOST_URL + ROUTE_HOTEL_STATS);

  const res = await response.json();

  return res;
}

export type INewData = string;

export async function updateProperty(
  fieldName: string,
  newData: INewData,
  id: string
) {
  const response = await fetch(API_HOST_URL + ROUTE_HOTEL + "/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ [fieldName]: newData }),
  });

  const res = await response.json();

  return res;
}
