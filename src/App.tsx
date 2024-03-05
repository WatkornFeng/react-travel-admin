import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeColors } from "./theme";
import { useColorMode } from "./context/ColorModeContext";
import AppLayout from "./components/AppLayout";
import Bookings from "./pages/Bookings";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Rooms from "./pages/Rooms";
import { Toaster } from "react-hot-toast";
import { grey } from "@mui/material/colors";

import Property from "./pages/Property";
import BecomeHost from "./pages/BecomeHost";
import { BecomeHostProvider } from "./context/BecomeHostContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
function App() {
  const { mode } = useColorMode();
  const theme = useMemo(() => createTheme(themeColors(mode)), [mode]);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BecomeHostProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="rooms" element={<Rooms />} />
                <Route path="account" element={<Accounts />} />
                <Route path="property" element={<Property />} />
              </Route>

              <Route path="become-a-host" element={<BecomeHost />} />
              {/* <Route path="*" element={<PageNotFound />} />  */}
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                fontWeight: "bold",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: grey[50],
                color: grey[700],
              },
            }}
          />
        </BecomeHostProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
