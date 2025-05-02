import { CircularProgress } from "@mui/material";

interface IProps {
  size: string;
  thick: number;
}
function Spinner({ size, thick }: IProps) {
  return (
    <CircularProgress
      size={size}
      thickness={thick}
      sx={{
        color: "primary.constrast",
      }}
    />
  );
}

export default Spinner;
