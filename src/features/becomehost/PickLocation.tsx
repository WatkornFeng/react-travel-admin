import { useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";
import { Box, Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";

import BouncingDotsLoader from "../../components/BouncingDotsLoader";
import ErrorMessage from "../../components/ErrorMessage";
import Map from "../../components/Map/Map";

import { getLocationFromLatLng } from "../../services/getLocation";
import { SELECT_LOCATION } from "../../context/constant";
import SearchLocationBox from "./ui/SearchLocationBox";
import Title from "./ui/Title";
const locationBangkok = [13.736717, 100.523186] as LatLngExpression;
function PickLocation() {
  const {
    dispatch,
    state: {
      propertyLocation: { latlng, countryCode, locationStr },
    },
  } = useBecomeHost() as IBecomeHostContext;

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
          address: { country_code, province, city },
        } = await getLocationFromLatLng(lat, lng);
        const res = await getLocationFromLatLng(lat, lng);

        dispatch({
          type: SELECT_LOCATION,
          payload: {
            latlng,
            province: province || city,
            countryCode: country_code,
            locationStr: location,
          },
        });

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

      {isLoading && <BouncingDotsLoader size="large" />}
      {!isLoading && isError && (
        <ErrorMessage text="Not Found location, Please try again" size="1rem" />
      )}
      {!isLoading && !isError && countryCode && countryCode === "th" && (
        <Stack direction="row" spacing={1}>
          <PlaceIcon color="error" />
          <Typography fontSize={"1rem"} color="black">
            {locationStr}
          </Typography>
        </Stack>
      )}
      {!isLoading && !isError && countryCode && countryCode !== "th" && (
        <ErrorMessage text="Please select area in Thailand" size="1rem" />
      )}
      {!isLoading && !isError && locationStr === null && (
        <Typography variant="subtitle2" color="black" fontWeight="bold">
          Please select your location by click on the map or enter your
          location.
        </Typography>
      )}
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
    </Stack>
  );
}

export default PickLocation;
