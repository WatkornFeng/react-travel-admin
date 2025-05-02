import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const StyledTextField = styled(TextField)(
  ({ theme, property: TextFieldWidth }) => ({
    "& .MuiOutlinedInput-root": {
      color: theme.palette.text.primary,
      fontWeight: "bold",

      width: TextFieldWidth,
      "& > fieldset": {
        border: `3px solid ${theme.palette.text.primary}`,

        borderRadius: "20px",
      },
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        border: `2px solid ${theme.palette.text.primary}`,
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        border: `1px solid ${theme.palette.text.primary}`,
      },
    },
  })
);
