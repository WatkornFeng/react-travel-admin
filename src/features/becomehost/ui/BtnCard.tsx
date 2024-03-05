import { Box, styled, ToggleButton, Typography } from "@mui/material";

const StyledCard = styled(Box)(({ theme, property }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  border: "3px solid black",
  borderRadius: "20px",
  padding: "18px",

  transition: "transform ease-out 0.3s",
  width: "10rem",
  color: property === "true" ? "white" : theme.palette.primary.main,
  transform: property === "true" ? "scale(1.15)" : "scale(1.1)",
  backgroundColor: property === "true" ? theme.palette.primary.main : "white",
  overflow: "hidden",
  "&:hover": {
    transform: "scale(1.15)",
  },
}));

interface IProps {
  data: string | number;
  icon: JSX.Element | JSX.Element[];
  selectedValue?: string | number | null;
}
function BtnCard({ data, icon, selectedValue }: IProps) {
  const IsSelected = selectedValue === data ? "true" : "false";

  return (
    <ToggleButton
      value={data}
      sx={{
        padding: 0,
      }}
    >
      <StyledCard property={IsSelected}>
        <Box>{icon}</Box>
        <Typography variant="subtitle2">{data}</Typography>
      </StyledCard>
    </ToggleButton>
  );
}

export default BtnCard;
