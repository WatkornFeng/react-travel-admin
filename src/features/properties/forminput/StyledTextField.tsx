import { TextField, styled } from "@mui/material";

export const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    color: "primary.constrast",
    fontWeight: "bold",

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "primary.constrast",
      borderWidth: "0.2rem",
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "lightgreen",
        borderWidth: "3px",
      },
    },
  },
});
