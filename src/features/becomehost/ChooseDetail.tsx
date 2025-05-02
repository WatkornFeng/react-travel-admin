import { Stack } from "@mui/material";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";
import DetailList from "./ui/DetailList";
import Title from "./ui/Title";
import { SELECT_BED, SELECT_GUEST } from "../../context/constant";
import { MAX_BEDS, MAX_GUESTS, MIN_BEDS, MIN_GUESTS } from "./constant";

function ChooseDetail() {
  const {
    state: {
      propertyDetails: { guests, beds },
    },
  } = useBecomeHost() as IBecomeHostContext;

  return (
    <Stack spacing={5}>
      <Title title="Share some basics about your place" />
      <Stack spacing={3}>
        <DetailList
          dispatchType={SELECT_GUEST}
          listname="Guests"
          state={guests}
          maxValue={MAX_GUESTS}
          minValue={MIN_GUESTS}
        />
        <DetailList
          dispatchType={SELECT_BED}
          listname="Beds"
          state={beds}
          maxValue={MAX_BEDS}
          minValue={MIN_BEDS}
        />
      </Stack>
    </Stack>
  );
}

export default ChooseDetail;
