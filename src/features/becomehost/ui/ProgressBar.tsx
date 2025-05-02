import { Box, LinearProgress, LinearProgressProps } from "@mui/material";

function ProgressBar(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            height: "10px",
            backgroundColor: "#e6e6e6",
            color: "primary.main",
          }}
        />
      </Box>
    </Box>
  );
}

export default ProgressBar;
