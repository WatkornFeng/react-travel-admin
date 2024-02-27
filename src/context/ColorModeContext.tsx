import { ThemeProvider, createTheme } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";

interface IColorModeContext {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<IColorModeContext>({
  toggleColorMode: () => {},
});

function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          "fontFamily": `"Nunito Sans", "Helvetica", "Arial", sans-serif`,
          "fontSize": 16,
          "fontWeightLight": 300,
          "fontWeightRegular": 400,
          "fontWeightMedium": 500,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function useColorMode() {
  const context = useContext(ColorModeContext);
  if (context === undefined)
    throw new Error("ColorModeContext was used outside of DarkModeProvider");
  return context;
}

export { ColorModeProvider, useColorMode };
