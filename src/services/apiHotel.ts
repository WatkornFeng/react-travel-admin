import { IProperty } from "./apiUser";
import {
  API_HOST_URL,
  ROUTE_HOTEL,
  ROUTE_HOTEL_STATS,
  ROUTE_USER,
} from "./constants";

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
  const response = await fetch(API_HOST_URL + ROUTE_HOTEL + "/myHotels/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ [fieldName]: newData }),
  });

  const res = await response.json();

  return res;
}

export interface IGetHotelResponse {
  status: string;
  data: {
    hotel: IProperty;
  };
}
export async function getHotel(propertyId: string) {
  const response = await fetch(
    API_HOST_URL + ROUTE_HOTEL + "/myHotels/" + propertyId
  );

  const res: IGetHotelResponse = await response.json();

  return res;
}
export interface IProperties {
  _id: string;
  name: string;
  ratingsAverage: number;

  guestsQuantity: number;
  price: number;
  propertyType: {
    name: string;
  };
}
export interface IGetHotelsOnUserResponse {
  status: string;
  data: {
    hotels: IProperties[];
  };

  length: number;
}
export async function getHotelsOnUser(userId: string) {
  const response = await fetch(
    API_HOST_URL + ROUTE_USER + "/" + userId + "/hotels"
  );

  const res: IGetHotelsOnUserResponse = await response.json();

  return res;
}
