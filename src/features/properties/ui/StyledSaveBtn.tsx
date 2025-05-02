import { Button, styled } from "@mui/material";

const StyledSaveBtn = styled(Button)(({ theme }) => ({
  bgcolor: theme.palette.primary.main,
  color: theme.palette.primary.constrast,
  fontWeight: "bold",
  "&.Mui-disabled": {
    pointerEvents: "unset",
    background: "#e2e2e2",
    cursor: "not-allowed",
    color: "grey",
  },
}));

export default StyledSaveBtn;
