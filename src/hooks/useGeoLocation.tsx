import { LatLngLiteral } from "leaflet";
import { useState } from "react";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../context/BecomeHostContext";
import { SELECT_LOCATION } from "../context/constant";

function useGeoLocation() {
  const {
    dispatch,
    state: {
      location: { locationStr, province, countryCode },
    },
  } = useBecomeHost() as IBecomeHostContext;
  const [location, setLocation] = useState<LatLngLiteral | null>(null);
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch({
            type: SELECT_LOCATION,
            payload: {
              latlng: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
              locationStr,
              province,
              countryCode,
            },
          });
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  return { location, getLocation };
}

export default useGeoLocation;
