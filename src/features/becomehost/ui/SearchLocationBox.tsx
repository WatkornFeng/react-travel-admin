import { Box, Typography } from "@mui/material";

function SearchLocationBox() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 10,
        right: "50%",
        transform: "translate(50%,0)",
        bgcolor: "red",
        color: "white",
        zIndex: 999,
        border: "1px solid white",
        boxShadow: "10px 10px 103px 11px rgba(0,0,0,0.59)",
      }}
    >
      <Typography>SEARCH</Typography>
    </Box>
  );
}

export default SearchLocationBox;
