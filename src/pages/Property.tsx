import { Box, Stack, styled } from "@mui/material";
import Header from "../features/properties/Header";
import EditName from "../features/properties/EditName";
import Content from "../features/properties/Content";
import Images from "../features/properties/Images";
import LocationDetail from "../features/properties/LocationDetail";
import AmenityItems from "../features/properties/AmenityItems";
import EditDescription from "../features/properties/EditDescription";
import { useState } from "react";
import { getHotel } from "../services/apiHotel";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
const StyledList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  paddingBottom: "20px",
  borderBottom: "0.5px solid grey",
  gap: 15,
});
function Property() {
  const { propertyId } = useParams();
  const { isError, isLoading, data } = useQuery({
    queryKey: ["property"],
    queryFn: () => (propertyId ? getHotel(propertyId) : null),
  });
  // console.log(properties);
  const properties = data && data.status === "success" && data.data.hotel;
  const [openModal, setOpenModal] = useState(false);
  return (
    <Stack spacing={10}>
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
      {properties && (
        <>
          <StyledList>
            <Header
              field="Name"
              edit={true}
              modal={openModal}
              setModal={setOpenModal}
              modalContent={
                <EditName
                  data={properties.name}
                  propertyId={properties._id}
                  setModal={setOpenModal}
                />
              }
            />
            <Content detail={properties.name} />
          </StyledList>
          <StyledList>
            <Header
              field="Description"
              edit={true}
              modal={openModal}
              setModal={setOpenModal}
              modalContent={
                <EditDescription
                  data={properties.description}
                  propertyId={properties._id}
                  setModal={setOpenModal}
                />
              }
            />
            <Content detail={properties.description} />
          </StyledList>
          <StyledList>
            <Header field="Images" edit={false} />
            <Images urls={properties.images} />
          </StyledList>
          <StyledList>
            <Header field="location" edit={false} />
            <LocationDetail coordinates={properties.location.coordinates} />
          </StyledList>
          <StyledList>
            <Header field="Price ($)" edit={false} />
            <Content detail={properties.price} />
          </StyledList>
          <StyledList>
            <Header field="Amenities" edit={false} />
            <AmenityItems urls={properties.amenities} />
          </StyledList>
          <StyledList>
            <Header field="Beds" edit={false} />
            <Content detail={properties.bedsQuantity} />
          </StyledList>
          <StyledList>
            <Header field="Guests" edit={false} />
            <Content detail={properties.guestsQuantity} />
          </StyledList>
        </>
      )}
      {isError && (
        <ErrorMessage
          text="Something went wrong, Please try again. &#9888;"
          size="2rem"
        />
      )}
    </Stack>
  );
}

export default Property;
