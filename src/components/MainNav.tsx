import { NavLink } from "react-router-dom";
import { Box, Typography, styled } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
const NavList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});
const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",
  "&:hover,&.active": {
    color: "red",
  },
});

function MainNav() {
  return (
    <NavList component="nav">
      <StyledNavLink to="/dashboard">
        <HomeIcon />
        <Typography variant="subtitle1">Dashboard</Typography>
      </StyledNavLink>
      <StyledNavLink to="/bookings">
        <LibraryBooksIcon />
        <Typography variant="subtitle1">Bookings</Typography>
      </StyledNavLink>
    </NavList>
  );
}

export default MainNav;
