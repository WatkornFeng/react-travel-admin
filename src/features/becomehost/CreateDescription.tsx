import { Stack } from "@mui/material";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";

import SubTitle from "./ui/SubTitle";
import Title from "./ui/Title";
import CharacterCounter from "./ui/CharacterCounter";

import { CREATE_DESCRIPTION } from "../../context/constant";
import { MAX_LENGTH_DESCRIPTION } from "../../utils/constant";

function CreateDescription() {
  const {
    state: { propertyDescription },
    dispatch,
  } = useBecomeHost() as IBecomeHostContext;
  return (
    <Stack spacing={4}>
      <label htmlFor="create-description">
        <Title title="Create your description" />
      </label>
      <SubTitle text="Share what makes your place special." />
      <CharacterCounter
        htmlFor="create-description"
        value={propertyDescription}
        dispatch={dispatch}
        dispatchType={CREATE_DESCRIPTION}
        maxLength={MAX_LENGTH_DESCRIPTION}
        textFieldRow={8}
        textFieldWidth="100%"
        placeholder="Enter your property's description name."
      />
    </Stack>
  );
}

export default CreateDescription;
