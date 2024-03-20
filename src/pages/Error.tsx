import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography color="red" fontSize="2rem">
        Something went wrong, Please Try again
      </Typography>

      <Button
        onClick={() => navigate("/dashboard")}
        variant="outlined"
        color="error"
      >
        Back
      </Button>
    </Box>
  );
}

export default Error;
