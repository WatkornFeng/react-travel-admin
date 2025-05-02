import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { IconButton, List, ListItem, Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LogoutIcon from "@mui/icons-material/Logout";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import PersonIcon from "@mui/icons-material/Person";
import { useColorMode } from "../context/ColorModeContext";
const StyledHeaderMenu = styled(List)({
  display: "flex",
});
function HeaderMenu() {
  const navigate = useNavigate();
  const { toggleColorMode, mode } = useColorMode();
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <StyledHeaderMenu disablePadding>
      <ListItem>
        <Tooltip title="User Account">
          <IconButton onClick={() => navigate("/account")}>
            <PersonIcon />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem>
        <Tooltip title={`${mode.toUpperCase()} MODE`}>
          <IconButton onClick={toggleColorMode}>
            {mode === "dark" ? <NightsStayIcon /> : <Brightness7Icon />}
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem>
        <Tooltip title="Log out">
          <IconButton onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </ListItem>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
