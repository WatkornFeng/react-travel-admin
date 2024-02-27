import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeColors } from "./theme";
import { useColorMode } from "./context/ColorModeContext";
import AppLayout from "./components/AppLayout";
import Bookings from "./pages/Bookings";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";

function App() {
  const { mode } = useColorMode();
  const theme = useMemo(() => createTheme(themeColors(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="account" element={<Accounts />} />
          </Route>

          {/* <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
