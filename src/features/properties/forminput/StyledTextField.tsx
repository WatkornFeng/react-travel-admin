import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const StyledTextField = styled(TextField)(
  ({ theme, property: TextFieldWidth }) => ({
    "& .MuiOutlinedInput-root": {
      color: "black",
      fontWeight: "bold",
      maxWidth: TextFieldWidth,
      "& > fieldset": {
        border: "1px solid #1e1e1e",
        borderRadius: "20px",
      },
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        border: "3px solid #1e1e1e",
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        border: "3px solid #1e1e1e",
      },
    },
  })
);
