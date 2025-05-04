import { Grow, Stack, ToggleButtonGroup } from "@mui/material";

import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";
import { SELECT_STARS } from "../../context/constant";

import Title from "./ui/Title";
import BtnCard from "./ui/BtnCard";
import CountStarsIcon from "./ui/CountStarsIcon";
const propertyStarsData = [1, 2, 3, 4, 5];
function ChooseStar() {
  const {
    state: { propertyStars },
    dispatch,
  } = useBecomeHost() as IBecomeHostContext;
  const handleSelectionChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    dispatch({ type: SELECT_STARS, payload: newValue });
  };

  return (
    <Stack spacing={7}>
      <Title title="What is your property stars?" />
      <ToggleButtonGroup
        value={propertyStars}
        onChange={handleSelectionChange}
        exclusive
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "38px",
        }}
      >
        {propertyStarsData.map((star, index) => (
          <Grow in timeout={1000 + index * 150} key={index}>
            <div>
              <BtnCard
                data={star}
                icon={
                  <Stack spacing={1} direction="row">
                    <CountStarsIcon star={star} color="black" />
                  </Stack>
                }
              />
            </div>
          </Grow>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}

export default ChooseStar;
