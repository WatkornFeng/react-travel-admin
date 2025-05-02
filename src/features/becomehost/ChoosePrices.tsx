import { Stack } from "@mui/material";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";
import ErrorMessage from "../../components/ErrorMessage";
import { MAX_PRICE, MIN_PRICE } from "./constant";
import InputPrice from "./ui/InputPrice";
import SubTitle from "./ui/SubTitle";
import Title from "./ui/Title";

function ChoosePrices() {
  const {
    state: { propertyPrices: prices },
  } = useBecomeHost() as IBecomeHostContext;

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
