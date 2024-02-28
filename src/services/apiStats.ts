//localhost:3000/api/v1/hotels/hotel-stats

import { API_HOST_URL } from "./Constants";

interface IHotelStats {
  avgPrice: number;
  avgRating: number;
  maxPrice: number;
  minPrice: number;
  numHotels: number;
}

export async function getHotelStats(): Promise<IHotelStats[]> {
  const response = await fetch(API_HOST_URL + "/api/v1/hotels/hotel-stats");

  if (!response.ok) {
    // console.error(error);
    throw new Error("Hotel stats not found");
  }

  const { data: stats } = await response.json();

  return stats;
}
