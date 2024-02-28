import { Box, styled } from "@mui/material";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSideBar = styled(Box)(({ theme }) => ({
  gridRow: "1/-1",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  paddingInline: "4rem",
  borderRight: "0.5px solid rgba(0,0,0,0.1)",
  backgroundColor: theme.palette.primary.main,
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
