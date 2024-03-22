import { Typography } from "@mui/material";

interface IProps {
  detail: string;
}

function Content({ detail }: IProps) {
  return <Typography fontWeight="normal">{detail}</Typography>;
}

export default Content;
