import { Box, Button, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import StyledBackgroundImage from "../components/BackgroundImage";

function Welcome() {
  const navigate = useNavigate();
  return (
    <>
      <StyledBackgroundImage />
      <Box
        sx={{
          maxWidth: "80%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          right: 0,

          transform: "translate(-12.5%,-50% )",
          gap: 5,
        }}
      >
        <Typography
          // color="white"
          fontWeight="bold"
          fontSize="3rem"
          sx={{ opacity: 1 }}
        >
          Raise your business to new standards
        </Typography>
        <Typography
          fontWeight="normal"
          fontSize="1.5rem"
          // color="white"
        >
          Create your property and expose your business to millions of potential
          guests. <strong>SmileTravel</strong> also lets you manage your
          accommodation in an easy way, no hassle and no fuss.
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ minWidth: "500px", minHeight: "70px" }}
          onClick={() => navigate("/become-a-host")} // should go to login route
        >
          <Typography fontWeight="bold">Register Now</Typography>
        </Button>
      </Box>
    </>
  );
}

export default Welcome;
