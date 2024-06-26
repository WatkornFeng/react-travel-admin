import { useMemo } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeColors } from "./theme";
import { useColorMode } from "./context/ColorModeContext";
import AppLayout from "./components/AppLayout";
import Bookings from "./pages/Bookings";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import Rooms from "./pages/Rooms";
import { Toaster } from "react-hot-toast";
import { grey } from "@mui/material/colors";

import BecomeHost from "./pages/BecomeHost";
import { BecomeHostProvider } from "./context/BecomeHostContext";
import Welcome from "./pages/Welcome";
import { Auth0Provider } from "@auth0/auth0-react";
import Error from "./pages/Error";
import PageNotFound from "./pages/PageNotFound";
import PropertyLists from "./pages/PropertyLists";
import Property from "./pages/Property";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
function App() {
  const { mode } = useColorMode();
  const theme = useMemo(() => createTheme(themeColors(mode)), [mode]);
  const users = [
    { id: "1", fullName: "Robin Wieruch" },
    { id: "2", fullName: "Sarah Finnley" },
  ];
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BecomeHostProvider>
          <BrowserRouter>
            <Auth0Provider
              domain={domain}
              clientId={clientId}
              authorizationParams={{
                redirect_uri: window.location.origin + "/dashboard",
              }}
            >
              <Routes>
                <Route index element={<Welcome />} />

                <Route element={<AppLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="bookings" element={<Bookings />} />
                  <Route path="account" element={<Accounts />} />

                  <Route path="property" element={<PropertyLists />} />
                  <Route path="property/:propertyId" element={<Property />} />
                </Route>

                <Route path="become-a-host" element={<BecomeHost />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="error" element={<Error />} />
              </Routes>
            </Auth0Provider>
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
