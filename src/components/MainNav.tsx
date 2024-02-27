import { NavLink } from "react-router-dom";
import { Box, Typography, styled } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
const NavList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
}));
const StyledNavLink = styled(NavLink)(({ theme }) => ({
  "&:link,&:visited": {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",
    color: theme.palette.text.primary,
    transition: "all 0.3s",

    minWidth: "50%",
  },
  "&:hover,&.active": {
    color: "yellow",
    transform: "scale(1.1)",
  },
}));

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
