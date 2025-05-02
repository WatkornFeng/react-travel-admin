import { Button, styled } from "@mui/material";

export const StyledNavigateBtn = styled(Button)(() => ({
  "&.MuiButton-root": {
    borderRadius: "10px",
    width: "5rem",
    background: "black",
    transition: "transform ease-out 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "black",
    },
  },
  "&.Mui-disabled": {
    pointerEvents: "unset",
    background: "#e2e2e2",

    cursor: "not-allowed",
    "&:hover": {
      transform: "scale(1)",
      backgroundColor: "#e2e2e2",
    },
  },
}));
