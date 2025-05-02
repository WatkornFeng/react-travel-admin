import { Box, Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import CountStarsIcon from "./CountStarsIcon";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";
import Icon from "../../../components/Icon";

function ReviewCardDetail() {
  const {
    state: {
      propertyAmenities: amenities,
      propertyName,
      propertyLocation: { province },
      propertyStars,
    },
  } = useBecomeHost() as IBecomeHostContext;

  const modifiedProvince = province && province.replace("Province", "");

  const filterAmenities: string[][] = [];
  amenities?.forEach((e) => {
    const parts = e.split(" ");
    filterAmenities.push([parts[0], parts[1]]);
  });

  const sliceAmenities =
    amenities && amenities.length > 3
      ? filterAmenities.slice(0, 3)
      : filterAmenities;

  const name =
    propertyName && propertyName.length > 20
      ? propertyName.slice(0, 20) + "..."
      : propertyName;
  return (
    <Box sx={{ height: "70%" }}>
      <Stack spacing={2}>
        <Typography fontWeight="bold" fontSize="1.5rem" color="black">
          {name}
        </Typography>
        <Stack direction="row">
          {propertyStars && (
            <CountStarsIcon star={propertyStars} color="#e6c200" />
          )}
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <PlaceIcon sx={{ fontSize: "24px", color: "red" }} />
          <Typography fontWeight="normal" color="black" fontSize="1rem">
            {modifiedProvince}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          {sliceAmenities?.map((amenity, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography
                fontWeight="normal"
                marginRight="4px"
                color="black"
                fontSize="0.8rem"
              >
                {amenity[0]}
              </Typography>
              <Icon base64Url={amenity[1]} size="1rem" />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default ReviewCardDetail;
