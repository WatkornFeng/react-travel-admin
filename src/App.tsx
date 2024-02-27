import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";

import Bookings from "./pages/Bookings";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import { ColorModeProvider } from "./context/ColorModeContext";

function App() {
  return (
    <ColorModeProvider>
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
    </ColorModeProvider>
  );
}

export default App;
