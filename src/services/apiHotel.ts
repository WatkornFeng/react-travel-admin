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
  id: string,
  token: string
) {
  const response = await fetch(API_HOST_URL + ROUTE_HOTEL + "/myHotels/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ [fieldName]: newData }),
  });

  const res = await response.json();
  if (res.status === "fail") {
    throw new Error(res.message);
  }
  return res;
}

export interface IGetHotelResponse {
  status: string;
  data: {
    hotel: IProperty;
  };
  message?: string;
}
export async function getHotel(propertyId: string, token: string) {
  const response = await fetch(
    API_HOST_URL + ROUTE_HOTEL + "/myHotels/" + propertyId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const res: IGetHotelResponse = await response.json();
  if (res.status === "fail") {
    throw new Error(res.message);
  }

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
export async function getHotelsOnUser(userId: string, token: string) {
  const response = await fetch(
    API_HOST_URL + ROUTE_USER + "/" + userId + "/hotels",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const res: IGetHotelsOnUserResponse = await response.json();

  return res;
}
export interface IDeleteHotelResponse {
  status: string;
  message?: string;
}
export async function deleteHotel(propertyId: string, token: string) {
  const response = await fetch(
    API_HOST_URL + ROUTE_HOTEL + "/myHotels/" + propertyId,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const res: IGetHotelResponse = await response.json();
  if (res.status === "fail") {
    throw new Error(res.message);
  }

  return res;
}
