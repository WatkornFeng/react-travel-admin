import { Box } from "@mui/material";

interface IProps {
  base64Url: string;
  size: string;
}

function Icon({ base64Url, size }: IProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: `${size}`,
        width: `${size}`,
      }}
    >
      <img src={`data:image/svg+xml;base64,${base64Url}`} alt="SVG Image" />
    </Box>
  );
}

export default Icon;
