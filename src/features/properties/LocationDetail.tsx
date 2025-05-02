import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import Spinner from "../../components/Spinner";
import ErrorMessage from "../../components/ErrorMessage";
import { getLocationFromLatLng } from "../../services/getLocation";

interface IProps {
  coordinates: number[];
}
function LocationDetail({ coordinates }: IProps) {
  const [location, setLocation] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const [lng, lat] = coordinates;
  useEffect(() => {
    const locationString = async () => {
      try {
        setIsloading(true);

        const { display_name } = await getLocationFromLatLng(lat, lng);

        setLocation(display_name);
        setIsloading(false);
      } catch (err) {
        setIsloading(false);
        setIsError(true);
      }
    };
    locationString();
  }, [coordinates, lat, lng]);
  return (
    <>
      {isLoading && <Spinner size="1rem" thick={4} />}
      {isError && <ErrorMessage text="Load location error" size="1rem" />}
      {!isLoading && !isError && <Typography>{location}</Typography>}
    </>
  );
}

export default LocationDetail;
