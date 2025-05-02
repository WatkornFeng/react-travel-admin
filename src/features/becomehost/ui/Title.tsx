import { Typography } from "@mui/material";

function Title({ title }: { title: string }) {
  return (
    <Typography fontWeight="bold" variant="h5" sx={{ color: "black" }}>
      {title}
    </Typography>
  );
}

export default Title;
