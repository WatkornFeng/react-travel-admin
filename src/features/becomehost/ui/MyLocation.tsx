import { Box, Typography } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import useGeoLocation from "../../../hooks/useGeoLocation";

function MyLocation() {
  const { getLocation } = useGeoLocation();
  //   console.log(geolocationPosition);

  return (
    <Box
      onClick={getLocation}
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
