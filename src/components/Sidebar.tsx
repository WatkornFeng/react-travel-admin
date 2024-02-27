import { Box, styled } from "@mui/material";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSideBar = styled(Box)(({ theme }) => ({
  gridRow: "1/-1",
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  padding: "0.5rem 2rem",
  borderRight: "0.5px solid rgba(0,0,0,0.1)",
  // boxShadow: "10px 10px 46px -7px rgba(0,0,0,0.53)",
}));
function Sidebar() {
  return (
    <StyledSideBar component="aside">
      <Logo />
      <MainNav />
    </StyledSideBar>
  );
}

export default Sidebar;
