import { Box, Typography } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { SELECT_LOCATION } from "../../../context/constant";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";
import { useState } from "react";
import { LatLngLiteral } from "leaflet";
import toast from "react-hot-toast";

function MyLocation() {
  const {
    dispatch,
    state: {
      propertyLocation: { locationStr, province, countryCode },
    },
  } = useBecomeHost() as IBecomeHostContext;
  // const [myLocation, setMyLocation] = useState<LatLngLiteral | null>(null);
  const getMyLocation = () => {
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
          // setMyLocation({
          //   lat: position.coords.latitude,
          //   lng: position.coords.longitude,
          // });
        },
        (error) => {
          // console.error("Error getting geolocation:", error);
          toast.error(
            "We couldn’t find your location. Please enter your address or reset your permission.",
            {
              position: "top-center",
              duration: 7000,
            }
          );
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  return (
    <Box
      onClick={getMyLocation}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mt: "0.5rem",
        "&:hover": {
          backgroundColor: `primary.main`,
          cursor: "pointer",
          color: "primary.constrast",
        },
      }}
    >
      <MyLocationIcon
        sx={{
          fontSize: "1rem",
        }}
      />
      <Typography
        sx={{
          fontSize: "0.8rem",
          color: "black",
          width: "100%",
          "&:hover": {
            color: "primary.constrast",
          },
        }}
      >
        Use my current location
      </Typography>
    </Box>
  );
}

export default MyLocation;
