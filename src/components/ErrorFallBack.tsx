import { Box, Button, Typography } from "@mui/material";
interface IProps {
  resetErrorBoundary: () => void;
}
function ErrorFallBack({ resetErrorBoundary }: IProps) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "white",
          gap: 3,
        }}
      >
        <Typography fontWeight="bold" fontSize="3rem">
          Something went wrong 🧐
        </Typography>
        <Button
          onClick={resetErrorBoundary}
          variant="outlined"
          sx={{
            border: "5px solid black",
            color: "black",
            "&:hover": {
              border: "5px solid black",
              backgroundColor: "red",
            },
          }}
        >
          <Typography fontWeight="bold" fontSize="2rem">
            Try Again
          </Typography>
        </Button>
      </Box>
    </>
  );
}

export default ErrorFallBack;
