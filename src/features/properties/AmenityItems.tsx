import { Stack, Box, Typography } from "@mui/material";
import AmenityIcon from "./AmenityIcon";
import { IAmenities } from "../../services/apiUser";

interface IProps {
  urls: IAmenities[];
}

function AmenityItems({ urls }: IProps) {
  return (
    <Stack direction="row" spacing={4}>
      {urls.length === 0 && <Typography>No amenities.</Typography>}
      {urls.map(({ name, svg }, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography>{name}</Typography>
          <AmenityIcon svg={svg} />
        </Box>
      ))}
    </Stack>
  );
}

export default AmenityItems;
