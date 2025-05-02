import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { StyledNavigateBtn } from "./StyledNavigateBtn";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";

import { COUNTRY_CODE, MAX_PRICE, MIN_PICTURES, MIN_PRICE } from "../constant";
import {
  MAX_LENGTH_DESCRIPTION,
  MAX_LENGTH_NAME,
} from "../../../utils/constant";
interface IProps {
  setPage: (value: React.SetStateAction<number>) => void;
  page: number;
}
function NavigateBtnNext({ setPage, page }: IProps) {
  const {
    state: {
      propertyType,
      propertyLocation: { countryCode },
      propertyStars,
      propertyName,
      propertyDescription,
      propertyPictures: pictures,
      propertyPrices: prices,
    },
  } = useBecomeHost() as IBecomeHostContext;
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (page === 1 && !propertyType) {
      return setIsDisabled(true);
    }
    if (page === 2 && (!countryCode || countryCode !== COUNTRY_CODE)) {
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
    if (page === 7 && (!pictures || pictures.length < MIN_PICTURES)) {
      return setIsDisabled(true);
    }
    if (page === 8 && (!prices || prices < MIN_PRICE || prices > MAX_PRICE)) {
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
    pictures,
    prices,
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
