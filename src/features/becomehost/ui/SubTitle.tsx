import { Typography } from "@mui/material";

function SubTitle({ text }: { text: string }) {
  return (
    <Typography fontWeight="light" variant="subtitle1" sx={{ color: "grey" }}>
      {text}
    </Typography>
  );
}

export default SubTitle;
