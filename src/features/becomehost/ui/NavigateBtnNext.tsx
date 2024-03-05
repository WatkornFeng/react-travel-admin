import { Typography } from "@mui/material";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";

import { useEffect, useState } from "react";
import { StyledNavigateBtn } from "./StyledNavigateBtn";
import { MAX_LENGTH_DESCRIPTION, MAX_LENGTH_NAME } from "../constant";

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
      propertyName,
      propertyDescription,
    },
  } = useBecomeHost() as IBecomeHostContext;
  const [isDisabled, setIsDisabled] = useState(false);
  // console.log(propertyName);
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
    if (
      page === 4 &&
      (!propertyName || propertyName.length > MAX_LENGTH_NAME)
    ) {
      return setIsDisabled(true);
    }
    if (
      page === 5 &&
      (!propertyDescription ||
        propertyDescription.length > MAX_LENGTH_DESCRIPTION)
    ) {
      return setIsDisabled(true);
    }
    setIsDisabled(false);
  }, [
    propertyType,
    countryCode,
    page,
    propertyStars,
    propertyName,
    propertyDescription,
  ]);

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
