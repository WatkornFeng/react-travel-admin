import { Box, Grow, Stack, ToggleButtonGroup } from "@mui/material";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";
import Title from "./ui/Title";
import BtnCard from "./ui/BtnCard";
import { propertyType as propertyTypeData } from "./data";

import { SELECT_TYPE } from "../../context/constant";

function ChooseProperty() {
  const {
    state: { propertyType },
    dispatch,
  } = useBecomeHost() as IBecomeHostContext;

  const handleSelectionChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    dispatch({ type: SELECT_TYPE, payload: newValue });
  };
  return (
    <Stack spacing={7} direction="column">
      <Title title="Which of these best describes your place?" />
      <Box role="radiogroup">
        <ToggleButtonGroup
          value={propertyType}
          onChange={handleSelectionChange}
          exclusive
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "38px",
          }}
        >
          {propertyTypeData.map(({ type, icon }, index) => (
            <Grow in timeout={1000 + index * 150} key={index}>
              <div>
                <BtnCard data={type} icon={icon} selectedValue={propertyType} />
              </div>
            </Grow>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Stack>
  );
}

export default ChooseProperty;

{
  /* <>
<Title title="Which of these best describes your place?" />
<Box role="radiogroup">
  <ToggleButtonGroup
    value={selectedValue}
    onChange={handleSelectionChange}
    exclusive
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: "38px",
    }}
  >
    {propertyType.map(({ type, icon }, index) => (
      <Grow in timeout={1000 + index * 150} key={index}>
        <div>
          <BtnCard
            type={type}
            icon={icon}
            selectedValue={selectedValue}
          />
        </div>
      </Grow>
    ))}
  </ToggleButtonGroup>
</Box>
</> */
}
