import { Grow, Stack, ToggleButtonGroup } from "@mui/material";
import Title from "./ui/Title";
import SubTitle from "./ui/SubTitle";
import { amenitiesData } from "./data";
import BtnCard from "./ui/BtnCard";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";
import { SELECT_AMENITIES } from "../../context/constant";

function ChooseAmenities() {
  const {
    state: { amenities },
    dispatch,
  } = useBecomeHost() as IBecomeHostContext;

  const handleSelectionChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    dispatch({ type: SELECT_AMENITIES, payload: newValue });
  };

  return (
    <Stack spacing={2}>
      <Title title="Tell guests what your place has to offer" />
      <SubTitle text="You can add more amenities after you publish your listing." />
      <ToggleButtonGroup
        aria-multiselectable
        value={amenities}
        onChange={handleSelectionChange}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "38px",
        }}
      >
        {amenitiesData.map(({ amenity, icon }, index) => (
          <Grow in timeout={1000 + index * 150} key={index}>
            <div>
              <BtnCard data={amenity} icon={icon} />
            </div>
          </Grow>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}

export default ChooseAmenities;
