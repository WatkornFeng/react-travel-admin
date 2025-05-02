import { API_HOST_URL, ROUTE_USER_BY_EMAIL } from "./constants";
export interface IAmenities {
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
}
export interface IGetUserResponse {
  status: string;
  data: IUser;
}

export async function getUserByEmail(email: string) {
  const response = await fetch(
    API_HOST_URL + ROUTE_USER_BY_EMAIL + "/" + email
  );
  const data: IGetUserResponse = await response.json();

  return data;
}
