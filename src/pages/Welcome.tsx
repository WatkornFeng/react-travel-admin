import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Typography } from "@mui/material";

import StyledBackgroundImage from "../components/BackgroundImage";
import LoginButton from "../components/LoginButton";

function Welcome() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated, "Aut");
  console.log(isLoading, "loading");
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
        <Typography fontWeight="bold" fontSize="3rem" sx={{ opacity: 1 }}>
          Raise your business to new standards
        </Typography>
        <Typography fontWeight="normal" fontSize="1.5rem">
          Create your property and expose your business to millions of potential
          guests. <strong>SmileTravel</strong> also lets you manage your
          accommodation in an easy way, no hassle and no fuss.
        </Typography>

        {!isLoading && !isAuthenticated && <LoginButton />}
        {isAuthenticated && (
          <>
            <Button
              variant="contained"
              color="success"
              sx={{ minWidth: "500px", minHeight: "70px" }}
              onClick={() => navigate("/become-a-host")}
            >
              <Typography fontWeight="bold">Create your list Now</Typography>
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{ minWidth: "500px", minHeight: "70px" }}
              onClick={() => navigate("/dashboard")}
            >
              <Typography fontWeight="bold">Go to Dashboard</Typography>
            </Button>
          </>
        )}
      </Box>
    </>
  );
}

export default Welcome;
