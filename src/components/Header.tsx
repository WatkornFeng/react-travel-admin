import { Avatar, Box } from "@mui/material";
import { styled } from "@mui/system";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled(Box)(({ theme }) => ({
  padding: "1.2rem 4.8rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "1rem",
  backgroundColor: theme.palette.primary.main,
}));
function Header() {
  return (
    <StyledHeader>
      <Avatar alt={"user avatar"} />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
