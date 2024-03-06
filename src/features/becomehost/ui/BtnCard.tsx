import { Box, styled, ToggleButton } from "@mui/material";

const StyledCard = styled(ToggleButton)(({ theme }) => ({
  "&.MuiToggleButton-root": {
    color: `${theme.palette.primary.main}`,
    backgroundColor: "white",
    border: "3px solid black",
    borderRadius: "20px",
    padding: "18px",
    transition: "transform ease-out 0.3s",
    width: "10rem",

    "&:hover": {
      transform: "scale(1.15)",
    },
    "&.Mui-selected": {
      color: "white",
      backgroundColor: `${theme.palette.primary.main}`,
    },
  },
}));

interface IProps {
  data: string | number;
  icon: JSX.Element | JSX.Element[];
}
function BtnCard({ data, icon }: IProps) {
  return (
    <StyledCard value={data}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.7rem",
        }}
      >
        {icon}
        {data}
      </Box>
    </StyledCard>
  );
}

export default BtnCard;
