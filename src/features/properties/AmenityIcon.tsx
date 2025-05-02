import { Box } from "@mui/material";

import Icon from "../../components/Icon";
interface IProps {
  svg: string;
}
function AmenityIcon({ svg }: IProps) {
  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "50%",
        bgcolor: "white",
        padding: "8px",
      }}
    >
      <Icon size="2rem" base64Url={svg}></Icon>
    </Box>
  );
}

export default AmenityIcon;
