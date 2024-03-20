import { IBecomeHostState } from "../context/BecomeHostContext";
import {
  API_HOST_URL,
  ROUTE_AMENITY,
  ROUTE_HOTEL,
  ROUTE_PROPERTY_TYPE,
} from "./constants";
export interface ISVG {
  name: string;
  svg: string;
  _id: string;
}
interface IResponsePropertyType {
  results: number;
  status: string;
  data: {
    types: ISVG[];
  };
}
export async function getPropertyType(): Promise<ISVG[]> {
  const response = await fetch(API_HOST_URL + ROUTE_PROPERTY_TYPE);
  if (response.status === 404) {
    throw new Error("Data Not Found");
  }
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const {
    data: { types },
  } = (await response.json()) as IResponsePropertyType;

  return types;
}

interface IResponseAmenity {
  results: number;
  status: string;
  data: {
    amenities: ISVG[];
  };
}
export async function getAmenities(): Promise<ISVG[]> {
  const response = await fetch(API_HOST_URL + ROUTE_AMENITY);

  const {
    data: { amenities },
  } = (await response.json()) as IResponseAmenity;

  return amenities;
}

export async function createNewProperty(formData: FormData) {
  const response = await fetch(API_HOST_URL + ROUTE_HOTEL, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  console.log(data);
}
