import { Typography } from "@mui/material";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";

import { useEffect, useState } from "react";
import { StyledNavigateBtn } from "./StyledNavigateBtn";

interface IProps {
  setPage: (value: React.SetStateAction<number>) => void;
  page: number;
}
function NavigateBtnNext({ setPage, page }: IProps) {
  const {
    state: {
      propertyType,
      location: { countryCode },
      propertyStars,
    },
  } = useBecomeHost() as IBecomeHostContext;
  const [isDisabled, setIsDisabled] = useState(false);
  // console.log(countryCode);
  useEffect(() => {
    if (page === 1 && !propertyType) {
      return setIsDisabled(true);
    }
    if (page === 2 && (!countryCode || countryCode !== "th")) {
      return setIsDisabled(true);
    }
    if (page === 3 && !propertyStars) {
      return setIsDisabled(true);
    }
    setIsDisabled(false);
  }, [propertyType, countryCode, page, propertyStars]);

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <StyledNavigateBtn onClick={handleNext} disabled={isDisabled}>
      <Typography
        color="white"
        fontWeight="bold"
        sx={{
          textDecorationLine: "underline",
        }}
      >
        Next
      </Typography>
    </StyledNavigateBtn>
  );
}

export default NavigateBtnNext;
