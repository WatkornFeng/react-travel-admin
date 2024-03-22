import { Box, Button, Stack, Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUser } from "../services/apiUser";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../features/properties/Header";
import Content from "../features/properties/Content";

import { styled } from "@mui/system";
import Images from "../features/properties/Images";
import AmenityItems from "../features/properties/AmenityItems";
import LocationDetail from "../features/properties/LocationDetail";

import { useState } from "react";
import EditName from "../features/properties/EditName";
import { useNavigate } from "react-router-dom";
import EditDescription from "../features/properties/EditDescription";

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
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  // console.log(user);
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
        {user && user.property && (
          <>
            <Typography variant="h4" fontWeight="bold">
              Welcome! {user.name}
            </Typography>
            <Button onClick={() => navigate("/become-a-host")}>
              becomehost
            </Button>
            <Stack spacing={10}>
              <StyledList>
                <Header
                  field="Name"
                  edit={true}
                  modal={openModal}
                  setModal={setOpenModal}
                  modalContent={
                    <EditName
                      data={user.property[0].name}
                      propertyId={user.property[0]._id}
                      setModal={setOpenModal}
                    />
                  }
                />
                <Content detail={user.property[0].name} />
              </StyledList>
              <StyledList>
                <Header
                  field="Description"
                  edit={true}
                  modal={openModal}
                  setModal={setOpenModal}
                  modalContent={
                    <EditDescription
                      data={user.property[0].description}
                      propertyId={user.property[0]._id}
                      setModal={setOpenModal}
                    />
                  }
                />
                <Content detail={user.property[0].description} />
              </StyledList>
              <StyledList>
                <Header field="Images" edit={false} />
                <Images urls={user.property[0].images} />
              </StyledList>
              <StyledList>
                <Header field="location" edit={false} />
                <LocationDetail
                  coordinates={user.property[0].location.coordinates}
                />
              </StyledList>
              <StyledList>
                <Header field="Price ($)" edit={false} />
                <Content detail={user.property[0].price} />
              </StyledList>
              <StyledList>
                <Header field="Amenities" edit={false} />
                <AmenityItems urls={user.property[0].amenities} />
              </StyledList>
              <StyledList>
                <Header field="Beds" edit={false} />
                <Content detail={user.property[0].bedsQuantity} />
              </StyledList>
              <StyledList>
                <Header field="Guests" edit={false} />
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
