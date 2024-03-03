import { Typography } from "@mui/material";

import { StyledNavigateBtn } from "./StyledNavigateBtn";

interface IProps {
  setPage: (value: React.SetStateAction<number>) => void;
}
function NavigateBtnBack({ setPage }: IProps) {
  const handleBack = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <StyledNavigateBtn onClick={handleBack}>
      <Typography
        color="white"
        fontWeight="bold"
        sx={{
          textDecorationLine: "underline",
        }}
      >
        Back
      </Typography>
    </StyledNavigateBtn>
  );
}

export default NavigateBtnBack;
