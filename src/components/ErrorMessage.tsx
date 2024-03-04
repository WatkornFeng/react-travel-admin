import { Typography } from "@mui/material";
interface IProps {
  text: string;
  size: string;
}
function ErrorMessage({ text, size }: IProps) {
  return (
    <Typography
      color="error"
      sx={{
        fontWeight: "bold",
        fontSize: `${size}`,
      }}
    >
      &#33; {text}
    </Typography>
  );
}

export default ErrorMessage;
