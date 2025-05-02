import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import url from "../assets/logo/logo.png";
const StyledDialog = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 2,
  top: "50%",
  left: "50%",
  backgroundColor: `${theme.palette.primary.main}`,
  transform: "translate(-50%, -50%)",
  padding: "1rem",
  border: `2px solid ${theme.palette.primary.constrast}`,
}));

const StyledBackDrop = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${url})`,
  filter: "blur(30px)",
  backgroundColor: "rgba(0, 0, 0, 0.281)",
  alignSelf: "stretch",
  width: "100%",
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "50%",
});
function NoProperty() {
  const navigate = useNavigate();
  return (
    <Box sx={{ position: "relative" }}>
      <StyledBackDrop />
      <StyledDialog>
        <Typography variant="subtitle2">
          You are not create property yet. Please create your property here!
        </Typography>
        <Button
          onClick={() => navigate("/become-a-host")}
          sx={{
            bgcolor: "red",
            "&:hover,&.active": {
              bgcolor: "yellow",
            },
          }}
        >
          Create Property
        </Button>
      </StyledDialog>
    </Box>
  );
}

export default NoProperty;
