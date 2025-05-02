import { Box, Typography, styled } from "@mui/material";

const StyledStat = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.secondary.main}`,
  borderRadius: "8px",
  flex: 1,

  padding: "1.6rem",
  display: "grid",
  gridTemplateColumns: "4rem 1fr",
  gridTemplateRows: "auto auto",
  columnGap: "1.6rem",
  rowGap: "0.4rem",
}));
const StyledIcon = styled(Box)(() => ({
  gridRow: "1/-1",
  borderRadius: "50%",
  aspectRatio: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const StyledTitle = styled(Typography)({
  alignSelf: "end",
  fontSize: "1rem",
  textTransform: "uppercase",
  letterSpacing: "0.4px",
  fontWeight: "bold",
});
const StyledValue = styled(Typography)({
  fontSize: "1.6rem",
  lineHeight: 1,
  fontWeight: "bold",
});
interface IProps {
  icon: JSX.Element;
  title: string;
  value: number | string;
  color: string;
}
function Stat({ icon, title, value, color }: IProps) {
  return (
    <StyledStat>
      <StyledIcon sx={{ backgroundColor: `${color}` }}>{icon}</StyledIcon>
      <StyledTitle>{title}</StyledTitle>
      <StyledValue>{value}</StyledValue>
    </StyledStat>
  );
}

export default Stat;
