import { Grow, Stack, ToggleButtonGroup, Box } from "@mui/material";
import Title from "./ui/Title";
import SubTitle from "./ui/SubTitle";

import BtnCard from "./ui/BtnCard";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";
import { SELECT_AMENITIES } from "../../context/constant";
import { getAmenities, getPropertyType } from "../../services/apiBecomeHost";
import { useQuery } from "@tanstack/react-query";
import BouncingDotsLoader from "../../components/BouncingDotsLoader";

function ChooseAmenities() {
  const {
    state: { propertyAmenities },
    dispatch,
  } = useBecomeHost() as IBecomeHostContext;
  // console.log(amenities);
  const {
    isError,
    isLoading,
    data: amenitiesList,
  } = useQuery({
    queryKey: ["amenities"],
    queryFn: getAmenities,
  });

  const handleSelectionChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    // console.log(newValue);
    dispatch({ type: SELECT_AMENITIES, payload: newValue });
  };

  // const x = amenities?.map((e) => e.value);

  return (
    <>
      <Stack spacing={2}>
        <Title title="Tell guests what your place has to offer" />
        <SubTitle text="You can add more amenities after you publish your listing." />
        {isLoading && (
          <Box
            sx={{
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BouncingDotsLoader size="large" />
          </Box>
        )}
        {amenitiesList && (
          <ToggleButtonGroup
            aria-multiselectable
            value={propertyAmenities}
            onChange={handleSelectionChange}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "38px",
            }}
          >
            {amenitiesList.map(({ name, svg, _id }, index) => (
              <Grow in timeout={1000 + index * 150} key={_id}>
                <div>
                  <BtnCard data={name} base64={svg} id={_id} />
                </div>
              </Grow>
            ))}
          </ToggleButtonGroup>
        )}
      </Stack>
    </>
  );
}

export default ChooseAmenities;
