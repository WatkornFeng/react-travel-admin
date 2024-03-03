import { Box } from "@mui/material";

function WelcomeText() {
  return (
    <Box fontSize={"72px"} fontWeight="bold" flexWrap={"wrap"}>
      <Box
        component="span"
        sx={{
          mr: "16px",
          padding: "10px",
          backgroundColor: "lightseagreen",
        }}
      >
        JOIN
      </Box>
      US IN
      <Box borderBottom="3px solid red">FEW STEPS !</Box>
    </Box>
  );
}
export default WelcomeText;
