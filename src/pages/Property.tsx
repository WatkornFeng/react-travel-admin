import { Box, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/apiUser";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../features/properties/ui/Header";
import Content from "../features/properties/ui/Content";

import { styled } from "@mui/system";
import Images from "../features/properties/ui/Images";
import AmenityItems from "../features/properties/ui/AmenityItems";
import LocationDetail from "../features/properties/ui/LocationDetail";
const StyledList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  paddingBottom: "20px",
  borderBottom: "0.5px solid grey",
  gap: 15,
});
function Property() {
  const {
    isError,
    isLoading,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });
  // console.log(user?.property[0]);
  return (
    <>
      <Stack spacing={2}>
        {isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <Spinner size="2rem" thick={7} />
          </Box>
        )}
        {user && (
          <>
            <Typography variant="h4" fontWeight="bold">
              Welcome! {user.name}
            </Typography>
            <Stack spacing={10}>
              <StyledList>
                <Header field="Name" />
                <Content detail={user.property[0].name} />
              </StyledList>
              <StyledList>
                <Header field="Description" />
                <Content detail={user.property[0].description} />
              </StyledList>
              <StyledList>
                <Header field="Images" />
                <Images urls={user.property[0].images} />
              </StyledList>
              <StyledList>
                <Header field="location" />
                <LocationDetail
                  coordinates={user.property[0].location.coordinates}
                />
              </StyledList>
              <StyledList>
                <Header field="Price ($)" />
                <Content detail={user.property[0].price} />
              </StyledList>
              <StyledList>
                <Header field="Amenities" />
                <AmenityItems urls={user.property[0].amenities} />
              </StyledList>
              <StyledList>
                <Header field="Beds" />
                <Content detail={user.property[0].bedsQuantity} />
              </StyledList>
              <StyledList>
                <Header field="Guests" />
                <Content detail={user.property[0].guestsQuantity} />
              </StyledList>
            </Stack>
          </>
        )}
        {isError && (
          <ErrorMessage
            text="Something went wrong, Please try again. &#9888;"
            size="2rem"
          />
        )}
      </Stack>
    </>
  );
}

export default Property;
