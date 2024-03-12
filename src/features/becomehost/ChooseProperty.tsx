import { Box, Grow, Stack, ToggleButtonGroup } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";
import Title from "./ui/Title";
import BtnCard from "./ui/BtnCard";
import { propertyType as propertyTypeData } from "./data";

import { SELECT_TYPE } from "../../context/constant";
import { ISVG, getPropertyType } from "../../services/apiBecomeHost";
import Icon from "../../components/Icon";
import { purple } from "@mui/material/colors";
import BouncingDotsLoader from "../../components/BouncingDotsLoader";

function ChooseProperty() {
  const {
    state: { propertyType },
    dispatch,
  } = useBecomeHost() as IBecomeHostContext;
  const {
    isError,
    isLoading,
    data: propertyList,
  } = useQuery({
    queryKey: ["property_type"],
    queryFn: getPropertyType,
  });
  console.log(propertyList);
  const handleSelectionChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    dispatch({ type: SELECT_TYPE, payload: newValue });
  };
  return (
    <Stack spacing={7} direction="column">
      <Title title="Which of these best describes your place?" />
      {isLoading && (
        <Box
          sx={{
            // backgroundColor: "red",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BouncingDotsLoader size="large" />
        </Box>
      )}
      {propertyList && (
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
            {(propertyList as ISVG[]).map(({ name, svg }, index) => (
              <Grow in timeout={1000 + index * 150} key={index}>
                <div>
                  <BtnCard data={name} base64={svg} />
                </div>
              </Grow>
            ))}
          </ToggleButtonGroup>
        </Box>
      )}
    </Stack>
  );
}

export default ChooseProperty;
{
  /* <Title title="Which of these best describes your place?" />
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
                <BtnCard data={type} icon={icon} />
              </div>
            </Grow>
          ))}
        </ToggleButtonGroup>
      </Box> */
}
