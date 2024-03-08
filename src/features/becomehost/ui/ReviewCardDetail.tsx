import { Box, Stack, Typography } from "@mui/material";
import CountStarsIcon from "./CountStarsIcon";
import PlaceIcon from "@mui/icons-material/Place";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";

function ReviewCardDetail() {
  const {
    state: {
      amenities,
      propertyName,
      location: { province },
    },
  } = useBecomeHost() as IBecomeHostContext;

  const modifiedProvince = province && province.replace("Province", "");
  const sliceAmenities =
    amenities && amenities.length > 3 ? amenities.slice(0, 3) : amenities;
  const name =
    propertyName && propertyName.length > 20
      ? propertyName.slice(0, 20) + "..."
      : propertyName;
  return (
    <Box sx={{ height: "70%" }}>
      <Stack spacing={2}>
        <Typography fontWeight="bold" fontSize="2rem" color="black">
          {name}
        </Typography>
        <Stack direction="row">
          <CountStarsIcon star={2} color="#e6c200" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <PlaceIcon sx={{ fontSize: "24px", color: "red" }} />
          <Typography fontWeight="normal" color="black">
            {modifiedProvince}
          </Typography>
        </Stack>
        <Stack direction="row">
          {sliceAmenities?.map((amenity, index) => (
            <Box key={index}>
              <Typography
                fontWeight="normal"
                display="inline-block"
                marginRight="4px"
                color="black"
              >
                {amenity}
              </Typography>
              {index + 1 < sliceAmenities.length && index + 1 < 3 && (
                <Typography
                  color="black"
                  fontWeight="normal"
                  display="inline-block"
                  marginRight="4px"
                >
                  ,
                </Typography>
              )}
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default ReviewCardDetail;
