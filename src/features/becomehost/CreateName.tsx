import { Stack } from "@mui/material";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";

import SubTitle from "./ui/SubTitle";
import Title from "./ui/Title";
import CharacterCounter from "./ui/CharacterCounter";

import { CREATE_NAME } from "../../context/constant";
import { MAX_LENGTH_NAME } from "../../utils/constant";

function CreateName() {
  const {
    state: { propertyName },
    dispatch,
  } = useBecomeHost() as IBecomeHostContext;
  return (
    <Stack spacing={4}>
      <label htmlFor="create-title">
        <Title title="Now, let's give your property a title." />
      </label>
      <SubTitle text="Short titles work best. Have fun with it—you can always change it later." />
      <CharacterCounter
        htmlFor="create-title"
        value={propertyName}
        dispatch={dispatch}
        dispatchType={CREATE_NAME}
        maxLength={MAX_LENGTH_NAME}
        textFieldRow={4}
        textFieldWidth="500px"
        placeholder="Enter your property's name."
      />
    </Stack>
  );
}

export default CreateName;
