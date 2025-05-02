import { createTheme } from "@mui/material";
import { green, red, yellow } from "@mui/material/colors";
import { IModePalette } from "./context/ColorModeContext";
createTheme;
declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      primary: {
        main: string;
        dark: string;
        constrast: string;
      };
      customRed: {
        main: string;
        contrast: string;
      };
      customGreen: {
        main: string;
        contrast: string;
      };
      customGold: {
        main: string;
        contrast: string;
      };
      action: {
        hover: string;
      };
      common: {
        black: string;
        white: string;
      };
      secondary: {
        main: string;
        dark: string;
        light: string;
      };
    };
  }
}
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
            constrast: "#142B2Fff",
          },
          secondary: {
            main: "#D0D1C6ff",
          },
          customRed: {
            main: red[100],
            contrast: red[600],
          },
          customGreen: {
            main: green[100],
            contrast: green[600],
          },
          customGold: {
            main: yellow[100],
            contrast: yellow[600],
          },

          text: {
            primary: "#3A2C24ff",
          },
          background: {
            default: "#fff",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#142B2Fff",
            constrast: "#A9B9B7ff",
          },
          secondary: {
            main: "#2A474Cff",
          },
          customRed: {
            main: red[600],
            contrast: red[100],
          },
          customGreen: {
            main: green[600],
            contrast: green[100],
          },
          customGold: {
            main: yellow[600],
            contrast: yellow[100],
          },

          text: {
            primary: "#BAB7ACff",
          },
          background: {
            default: "#1e1e1e",
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
