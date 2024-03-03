import { blue, grey, lightBlue } from "@mui/material/colors";
import { IModePalette } from "./context/ColorModeContext";
import { createTheme } from "@mui/material";
createTheme;
export const themeColors = (mode: IModePalette) => ({
  typography: {
    fontFamily: `"Nunito Sans", "Helvetica", "Arial", sans-serif`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         "&.Mui-disabled": {
  //           // pointerEvents: "unset",
  //           cursor: "not-allowed",
  //         },
  //       },
  //     },
  //   },
  // },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#A9B9B7ff",
            constrast: "#142B2Fff",
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
            constrast: "#A9B9B7ff",
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
// mui form react : https://www.youtube.com/watch?v=nt8NTuUbuG4
// example dashboard Airbnb : https://www.youtube.com/watch?v=O0Mjowmu7Js
// React Hook Form - Controller ex https://codesandbox.io/p/sandbox/react-hook-form-v7-controller-5h1q5?file=%2Fsrc%2FButtonsResult.js
