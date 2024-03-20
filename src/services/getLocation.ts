export async function getLocationFromLatLng(lat: number, lng: number) {
  // Use reverse geocoding to get the location from the coordinates

  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=en`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch location data");
  }

  const data = await response.json();
  // console.log(data);

  // Extract the location from the response
  // const location = data.display_name;
  // const { display_name } = data;

  // return location;
  return data;
}

export async function searchLocation(query: string | null) {
  // Use reverse geocoding to get the location from the coordinates
  if (!query) return null;
  const response = await fetch(
    // `https://nominatim.openstreetmap.org/search?countrycodes=th&accept-language=en&limit=5&q=r`
    `https://nominatim.openstreetmap.org/search?addressdetails=1&countrycodes=th&q=${query}&format=jsonv2&limit=5&accept-language=en`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch location data");
  }

  const data = await response.json();
  // console.log(data);

  // Extract the location from the response
  // const location = data.display_name;
  // const { display_name } = data;

  // return location;
  return data;
}
