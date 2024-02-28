import { Box, Button, Typography } from "@mui/material";
import url from "../assets/logo/logo.png";
import { styled } from "@mui/system";
const StyledDialog = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 2,
  top: "50%",
  left: "50%",
  backgroundColor: `${theme.palette.primary.main}`,
  // bgcolor: "red",
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
  return (
    <Box sx={{ position: "relative" }}>
      <StyledBackDrop />
      <StyledDialog>
        <Typography variant="subtitle2">
          You are not create property yet. Please create your property here!
        </Typography>
        <Button
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
