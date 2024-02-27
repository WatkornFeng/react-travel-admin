import { createContext, useContext, useEffect, useMemo, useState } from "react";
export type IModePalette = "light" | "dark";
interface IColorModeContext {
  toggleColorMode: () => void;
  mode: IModePalette;
}

export const ColorModeContext = createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: "light",
});

function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<IModePalette>("light");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      setMode("dark");
  }, []);
  const { toggleColorMode } = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      {children}
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
