import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const StyledTextField = styled(TextField)(
  ({ theme, property: TextFieldWidth }) => ({
    "& .MuiOutlinedInput-root": {
      color: theme.palette.text.primary,
      fontWeight: "bold",
      // maxWidth: TextFieldWidth,,
      width: TextFieldWidth,
      "& > fieldset": {
        border: `3px solid ${theme.palette.text.primary}`,
        // border: `1px solid ${theme.palette.primary.contrast}`,
        borderRadius: "20px",
      },
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        // border: "3px solid #1e1e1e",
        border: `2px solid ${theme.palette.text.primary}`,
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        border: `1px solid ${theme.palette.text.primary}`,
        // border: "3px solid #1e1e1e",
      },
    },
  })
);
