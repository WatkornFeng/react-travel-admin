import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Box } from "@mui/material";
import { styled } from "@mui/system";
import Tooltip from "@mui/material/Tooltip";
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
  const { user } = useAuth0();

  return (
    <StyledHeader>
      <Tooltip title={user?.name || "User"}>
        <Avatar alt={"user avatar"} src={user?.picture} />
      </Tooltip>
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
