import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider } from "@auth0/auth0-react";
import { Toaster } from "react-hot-toast";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { themeColors } from "./theme";
import { useColorMode } from "./context/ColorModeContext";
import { BecomeHostProvider } from "./context/BecomeHostContext";

import BecomeHost from "./pages/BecomeHost";
import Accounts from "./pages/Accounts";
import Bookings from "./pages/Bookings";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import PageNotFound from "./pages/PageNotFound";
import Property from "./pages/Property";
import PropertyLists from "./pages/PropertyLists";
import Welcome from "./pages/Welcome";

import CreateUserOnLogin from "./components/CreateUserOnLogin";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
const audienceAPI = import.meta.env.VITE_AUTH0_BACKEND_API_AUDIENCE;

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
            <Auth0Provider
              domain={domain}
              clientId={clientId}
              authorizationParams={{
                redirect_uri: redirectUri + "/dashboard",
                audience: audienceAPI,
              }}
            >
              <Routes>
                {/* Public Routes */}
                <Route index element={<Welcome />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="error" element={<Error />} />

                {/* Protected Routes */}
                <Route
                  element={
                    <ProtectedRoute>
                      <>
                        <CreateUserOnLogin />
                        <AppLayout />
                      </>
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Dashboard />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="bookings" element={<Bookings />} />
                  <Route path="account" element={<Accounts />} />
                  <Route path="property" element={<PropertyLists />} />
                  <Route path="property/:propertyId" element={<Property />} />
                </Route>

                {/* Protected standalone Route */}
                <Route
                  path="become-a-host"
                  element={
                    <ProtectedRoute>
                      <BecomeHost />
                    </ProtectedRoute>
                  }
                />
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
