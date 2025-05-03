import { useAuth0 } from "@auth0/auth0-react";
import { Button, Stack, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="contained"
      color="success"
      sx={{ minWidth: "500px", minHeight: "70px" }}
      onClick={() => loginWithRedirect()} // should go to login route
    >
      <Stack direction="row" gap={2}>
        <LoginIcon />
        <Typography fontWeight="bold">Login</Typography>
      </Stack>
    </Button>
  );
};

export default LoginButton;
