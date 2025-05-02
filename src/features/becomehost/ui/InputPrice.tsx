import React, { useState } from "react";
import { Box, Input, Typography, styled } from "@mui/material";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";
import { SELECT_PRICE } from "../../../context/constant";
const StyledUnit = styled(Typography)(() => ({
  fontSize: "6rem",
  fontWeight: "bold",
  color: "black",
  minWidth: "4rem",
}));
const StyledInputPrice = styled(Input)(() => ({
  maxWidth: "25rem",
  color: "#a6a6a6",
  fontSize: "6rem",
  fontWeight: "bold",
}));
const StyledInputBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  bgcolor: "white",
  borderBottom: "2px solid black",
  gap: 2,
}));

function InputPrice() {
  const {
    state: { propertyPrices: prices },
    dispatch,
  } = useBecomeHost() as IBecomeHostContext;

  const [value, setValue] = useState<string>(prices.toString());
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;

    const formattedValue = rawValue
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const numberWithNoCommas = formattedValue.replace(/,/g, "");
    const price = parseInt(numberWithNoCommas, 10);
    setValue(formattedValue);
    dispatch({ type: SELECT_PRICE, payload: price });
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyledInputBox>
        <StyledUnit>$</StyledUnit>
        <StyledInputPrice
          type="text"
          disableUnderline
          onChange={handleInputChange}
          value={value}
        />
      </StyledInputBox>
    </Box>
  );
}

export default InputPrice;
