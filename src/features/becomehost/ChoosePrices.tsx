import { Box, Input, Stack, Typography } from "@mui/material";
import Title from "./ui/Title";
import SubTitle from "./ui/SubTitle";
import InputPrice from "./ui/InputPrice";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";
import { MAX_PRICE, MIN_PRICE } from "./constant";
import ErrorMessage from "../../components/ErrorMessage";

function ChoosePrices() {
  const {
    state: { propertyPrices: prices },
  } = useBecomeHost() as IBecomeHostContext;
  // console.log(prices);
  return (
    <>
      <Stack spacing={5}>
        <Title title="Now, set your price" />
        <SubTitle text="You can change it anytime." />
        <InputPrice />
        {(prices > MAX_PRICE || prices < MIN_PRICE || !prices) && (
          <ErrorMessage
            text="Please enter a price between $10 and $10,000"
            size="1rem"
          />
        )}
      </Stack>
    </>
  );
}

export default ChoosePrices;
