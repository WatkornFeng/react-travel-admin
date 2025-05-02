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
  types: ISVG[];
}
export async function getPropertyType(): Promise<ISVG[]> {
  const response = await fetch(API_HOST_URL + ROUTE_PROPERTY_TYPE, {
    headers: { "Content-Type": "application/json" },
  });

  if (response.status === 404) {
    throw new Error("Data Not Found");
  }

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  let json: IResponsePropertyType;
  try {
    json = await response.json();
    return json.types;
  } catch {
    throw new Error("Invalid JSON response");
  }
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

export async function createNewProperty({
  formData,
  token,
}: {
  formData: FormData;
  token: string;
}) {
  const response = await fetch(API_HOST_URL + ROUTE_HOTEL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await response.json();
  return data;
}
