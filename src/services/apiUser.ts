import { API_HOST_URL, ROUTE_USER } from "./constants";
export interface IAmenities {
  // _id: string;
  name: string;
  svg: string;
}
export interface IImages {
  _id: string;
  url: string;
  cloudinary_id: string;
}
export interface ILocation {
  coordinates: number[];
}

export interface IPropertyType {
  _id: string;
  name: string;
  base64Url: string;
}

export interface IProperty {
  _id: string;
  amenities: IAmenities[];
  bedsQuantity: number;
  guestsQuantity: number;
  images: IImages[];
  location: ILocation;
  name: string;
  price: number;
  propertyType: IPropertyType;
  stars: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  description: string;
}
export interface IUser {
  email: string;
  locale?: string;
  name: string;
  _id: string;
  property: IProperty[];
}
export interface IGetUserResponse {
  status: string;
  data: IUser;
}
export async function getUser() {
  const userId = "65d0d5639e5e821d43f476b7";
  const response = await fetch(API_HOST_URL + ROUTE_USER + "/" + userId);
  const data: IGetUserResponse = await response.json();

  return data;
}
