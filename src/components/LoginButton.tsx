import { useAuth0 } from "@auth0/auth0-react";
import { Button, Typography } from "@mui/material";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="contained"
      color="success"
      sx={{ minWidth: "500px", minHeight: "70px" }}
      onClick={() => loginWithRedirect()} // should go to login route
    >
      <Typography fontWeight="bold">Register Now</Typography>
    </Button>
  );
};

export default LoginButton;
