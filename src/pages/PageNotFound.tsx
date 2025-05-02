import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import StyledBackgroundImage from "../components/BackgroundImage";
import src from "../assets/logo/logo.png";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <StyledBackgroundImage />
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          gap: 2,
        }}
      >
        <img src={src} height="450px" width="350px" />
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
          <WarningAmberIcon color="warning" />
          <Typography fontSize="2rem" fontWeight="bold">
            Error 404, Page not found.
          </Typography>
        </Stack>
        <Button
          onClick={() => navigate("/dashboard")}
          variant="contained"
          color="warning"
        >
          Back
        </Button>
      </Box>
    </>
  );
}

export default PageNotFound;
