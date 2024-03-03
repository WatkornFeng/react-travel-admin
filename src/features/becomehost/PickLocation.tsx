import React, { useEffect, useState } from "react";
import Title from "./ui/Title";
import Map from "../../components/Map/Map";
import { LatLng, LatLngExpression } from "leaflet";
import { getLocationFromLatLng } from "../../utils/getLocation";
import { Box, Stack, Typography } from "@mui/material";
import BouncingDotsLoader from "../../components/BouncingDotsLoader";
import ErrorMessage from "../../components/ErrorMessage";
import PlaceIcon from "@mui/icons-material/Place";
import SearchLocationBox from "./ui/SearchLocationBox";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";
import { SELECT_LOCATION } from "../../context/constant";
const locationBangkok = [13.736717, 100.523186] as LatLngExpression;
function PickLocation() {
  const {
    dispatch,
    state: {
      location: { latlng, countryCode },
    },
  } = useBecomeHost() as IBecomeHostContext;

  //   const [latlng, setLatLng] = useState<LatLng | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (latlng === null) return;
    const locationString = async () => {
      const { lat, lng } = latlng;
      try {
        setIsloading(true);

        const {
          display_name: location,
          address: { country_code, state },
        } = await getLocationFromLatLng(lat, lng);

        // console.log(location);
        dispatch({
          type: SELECT_LOCATION,
          payload: {
            latlng,
            province: state,
            countryCode: country_code,
          },
        });
        // console.log(country_code, state);
        setLocation(location);
        setIsloading(false);
        setIsError(false);
      } catch (err) {
        setIsloading(false);
        setIsError(true);
      }
    };
    locationString();
  }, [latlng, dispatch]);
  return (
    <Stack spacing={5}>
      <Title title="Where's your place located?" />
      <Box
        sx={{
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Map defaultLocation={locationBangkok} />
        <SearchLocationBox />
      </Box>

      {isLoading && <BouncingDotsLoader />}
      {!isLoading && isError && (
        <ErrorMessage text="Not Found location, Please try again" />
      )}
      {!isLoading && !isError && countryCode && countryCode === "th" && (
        <Stack direction="row" spacing={1}>
          <PlaceIcon color="error" />
          <Typography variant="subtitle2" color="black">
            {location}
          </Typography>
        </Stack>
      )}
      {!isLoading && !isError && countryCode && countryCode !== "th" && (
        <ErrorMessage text="Please select area in Thailand" />
      )}
      {!isLoading && !isError && location === null && (
        <Typography variant="subtitle2" color="black" fontWeight="bold">
          Please select your location by click on the map.
        </Typography>
      )}
    </Stack>
  );
}

export default PickLocation;
