import { NavLink } from "react-router-dom";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Box, Typography, styled } from "@mui/material";
const NavList = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
}));
const StyledNavLink = styled(NavLink)(({ theme }) => ({
  "&:link,&:visited": {
    textDecoration: "none",
    display: "flex",
    alignSelf: "stretch",

    alignItems: "center",
    gap: "1.2rem",
    color: theme.palette.primary.constrast,
    transition: "all 0.3s",
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
      <StyledNavLink to="/property">
        <ApartmentIcon />
        <Typography variant="subtitle1">Properties</Typography>
      </StyledNavLink>
    </NavList>
  );
}

export default MainNav;
