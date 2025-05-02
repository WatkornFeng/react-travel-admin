import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Header from "./Header";
import Sidebar from "./Sidebar";
const StyleAppLayout = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
  gridTemplateRows: "auto 1fr",
  height: "100vh",
}));
const MainLayout = styled(Box)(() => ({
  padding: "2rem",
  overflow: "auto",
}));
function AppLayout() {
  return (
    <StyleAppLayout>
      <Header />
      <Sidebar />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </StyleAppLayout>
  );
}

export default AppLayout;
