import { Grow, Stack, ToggleButtonGroup } from "@mui/material";

import Title from "./ui/Title";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";
import { SELECT_STARS } from "../../context/constant";
import { propertyStarsData } from "./data";
import BtnCard from "./ui/BtnCard";
import GradeIcon from "@mui/icons-material/Grade";
function ChooseStar() {
  const {
    state: { propertyStars },
    dispatch,
  } = useBecomeHost() as IBecomeHostContext;
  const handleSelectionChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    console.log(newValue);
    dispatch({ type: SELECT_STARS, payload: newValue });
  };

  const CountStarsIcon = ({ star }: { star: number }) => {
    const newArray = Array.from({ length: star }, (_, index) => index + 1);
    return newArray.map((e) => (
      <GradeIcon
        key={e}
        sx={{
          fontSize: "1.2rem",
        }}
      />
    ));
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
                icon={<CountStarsIcon star={star} />}
                selectedValue={propertyStars}
              />
            </div>
          </Grow>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}

export default ChooseStar;
