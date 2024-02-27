import {
  Box,
  IconButton,
  List,
  ListItem,
  Tooltip,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useNavigate } from "react-router-dom";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "../context/ColorModeContext";
// import { useTheme } from "@emotion/react";
const StyledHeaderMenu = styled(Box)({
  display: "flex",
  gap: "0.4rem",
});
function HeaderMenu() {
  const navigate = useNavigate();
  const colorMode = useColorMode();
  const theme = useTheme();

  return (
    <List
      disablePadding
      sx={{
        display: "flex",
      }}
    >
      <ListItem>
        <IconButton onClick={() => navigate("/account")}>
          <Tooltip title="User Account">
            <PersonIcon />
          </Tooltip>
        </IconButton>
      </ListItem>
      <ListItem>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <Tooltip title="Dark Mode">
              <NightsStayIcon />
            </Tooltip>
          ) : (
            <Tooltip title="Light Mode">
              <Brightness7Icon />
            </Tooltip>
          )}
        </IconButton>
      </ListItem>
    </List>
  );
}

export default HeaderMenu;
