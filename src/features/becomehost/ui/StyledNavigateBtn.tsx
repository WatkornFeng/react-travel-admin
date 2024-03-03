import { Button, styled } from "@mui/material";

export const StyledNavigateBtn = styled(Button)(({ theme }) => ({
  "&.Mui-disabled": {
    pointerEvents: "unset",
    background: "grey",
    color: "#c0c0c0",
    cursor: "not-allowed",
  },
  borderRadius: "10px",
  width: "5rem",
  background: "black",
  transition: "transform ease-out 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
    backgroundColor: "grey",
  },
}));
