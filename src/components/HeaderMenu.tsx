import { Box, IconButton, List, ListItem, Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useNavigate } from "react-router-dom";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "../context/ColorModeContext";
import LogoutIcon from "@mui/icons-material/Logout";
const StyledHeaderMenu = styled(List)({
  display: "flex",
  // gap: "0.5rem",
});
function HeaderMenu() {
  const navigate = useNavigate();
  const { toggleColorMode, mode } = useColorMode();

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
          <IconButton onClick={toggleColorMode}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </ListItem>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
