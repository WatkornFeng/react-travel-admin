import { Typography } from "@mui/material";
interface IProps {
  text: string;
}
function ErrorMessage({ text }: IProps) {
  return (
    <Typography
      color="error"
      sx={{
        fontWeight: "bold",
        fontSize: "1rem",
      }}
    >
      &#33; {text}
    </Typography>
  );
}

export default ErrorMessage;
