import { useQuery } from "@tanstack/react-query";
import { Box, Grow, Stack, ToggleButtonGroup } from "@mui/material";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";
import { ISVG, getPropertyType } from "../../services/apiBecomeHost";
import { SELECT_TYPE } from "../../context/constant";
import BouncingDotsLoader from "../../components/BouncingDotsLoader";
import ErrorMessage from "../../components/ErrorMessage";
import BtnCard from "./ui/BtnCard";
import Title from "./ui/Title";

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

  const handleSelectionChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    dispatch({ type: SELECT_TYPE, payload: newValue });
  };

  return (
    <Stack spacing={7} direction="column">
      <Title title="Which of these best describes your place?" />
      {isError && (
        <ErrorMessage
          text="something went wrong,Please try again later "
          size="1rem"
        />
      )}
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
            {(propertyList as ISVG[]).map(({ name, svg, _id }, index) => (
              <Grow in timeout={1000 + index * 150} key={_id}>
                <div>
                  <BtnCard data={name} base64={svg} id={_id} />
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
