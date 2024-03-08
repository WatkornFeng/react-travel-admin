import { Box, Typography } from "@mui/material";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";

function ReviewCardPrice() {
  const {
    state: { prices },
  } = useBecomeHost() as IBecomeHostContext;
  return (
    <Box
      sx={{
        height: "30%",
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography fontWeight="bold" fontSize="3rem" color="black">
          $
        </Typography>
        <Typography fontWeight="bold" fontSize="3rem" color="black">
          {prices}
        </Typography>
      </Box>
    </Box>
  );
}

export default ReviewCardPrice;
