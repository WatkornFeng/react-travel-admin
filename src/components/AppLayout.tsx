import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { styled } from "@mui/system";
import { Outlet } from "react-router-dom";
const StyleAppLayout = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
  gridTemplateRows: "auto 1fr",
  height: "100vh",
}));
const MainLayout = styled(Box)(({ theme }) => ({
  padding: "2rem",
  overflow: "auto",
  // backgroundColor: "white",
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
