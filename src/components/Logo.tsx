import { Box, Typography } from "@mui/material";
import src from "../assets/logo/logo.png";

function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={src}
        alt="logo"
        style={{
          height: "auto",
          width: "auto",
          maxWidth: "70px",
          maxHeight: "100px",
        }}
      />
      <Typography fontWeight="bold" textTransform="uppercase" variant="body1">
        Smile Travel
      </Typography>
    </Box>
  );
}

export default Logo;
