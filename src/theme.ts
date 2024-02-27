import { blue, grey, lightBlue } from "@mui/material/colors";
import { IModePalette } from "./context/ColorModeContext";
export const themeColors = (mode: IModePalette) => ({
  typography: {
    fontFamily: `"Nunito Sans", "Helvetica", "Arial", sans-serif`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#A9B9B7ff",
            // white: "#fff",
          },
          text: {
            primary: "#3A2C24ff",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#142B2Fff",
            // white: "#003366",
          },
          text: {
            primary: "#D0D1C6ff",
            // midNightBlue: "#2196f3",
          },
          background: {
            // default: "#1e1e1e",
          },
        }),
  },
});

// palette: {
//   primary: {
//     main: "#142B2Fff",
//     dark: "#2A474Cff",
//     light: "#A9B9B7ff",
//   },
//   secondary: {
//     main: "#3A2C24ff",
//     dark: " #BAB7ACff",
//     light: "#D0D1C6ff",
//   },
// },
