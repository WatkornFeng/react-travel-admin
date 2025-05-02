import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Box, IconButton, Stack, Typography, styled } from "@mui/material";
import WestIcon from "@mui/icons-material/West";

import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner";

import AmenityItems from "../features/properties/AmenityItems";
import Content from "../features/properties/Content";
import EditDescription from "../features/properties/EditDescription";
import EditName from "../features/properties/EditName";
import Header from "../features/properties/Header";
import Images from "../features/properties/Images";
import LocationDetail from "../features/properties/LocationDetail";
import { getHotel } from "../services/apiHotel";

const StyledList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  paddingBottom: "20px",
  borderBottom: "0.5px solid grey",
  gap: 15,
});
export interface IModalState {
  value: string;
  open: boolean;
}
const modalInitialState = {
  value: "",
  open: false,
};
function Property() {
  const navigate = useNavigate();
  const { propertyId } = useParams();
  const { isError, data, isFetching } = useQuery({
    queryKey: ["property"],
    queryFn: () => (propertyId ? getHotel(propertyId) : null),
  });

  const [openModal, setOpenModal] = useState<IModalState>(modalInitialState);

  const property = data && data.status === "success" && data.data.hotel;
  const isNoProperty = data && data.status === "fail";

  return (
    <Stack spacing={10}>
      <IconButton
        sx={{ bgcolor: "text.main", borderRadius: "20px", gap: 2 }}
        onClick={() => navigate(-1)}
      >
        <WestIcon />
        <Typography fontWeight="bold">Back</Typography>
      </IconButton>

      {isFetching && (
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

      {isNoProperty && (
        <Typography fontWeight="bold" fontSize="2rem">
          No Properties found with that ID.
        </Typography>
      )}
      {!isFetching && property && (
        <>
          <StyledList>
            <Header
              field="Name"
              edit={true}
              modal={openModal}
              setModal={setOpenModal}
              modalContent={
                <EditName
                  data={property.name}
                  propertyId={property._id}
                  setModal={setOpenModal}
                />
              }
            />
            <Content detail={property.name} />
          </StyledList>
          <StyledList>
            <Header
              field="Description"
              edit={true}
              modal={openModal}
              setModal={setOpenModal}
              modalContent={
                <EditDescription
                  data={property.description}
                  propertyId={property._id}
                  setModal={setOpenModal}
                />
              }
            />
            <Content detail={property.description} />
          </StyledList>
          <StyledList>
            <Header field="Images" edit={false} />
            <Images urls={property.images} />
          </StyledList>
          <StyledList>
            <Header field="location" edit={false} />
            <LocationDetail coordinates={property.location.coordinates} />
          </StyledList>
          <StyledList>
            <Header field="Price ($)" edit={false} />
            <Content detail={property.price} />
          </StyledList>
          <StyledList>
            <Header field="Amenities" edit={false} />
            <AmenityItems urls={property.amenities} />
          </StyledList>
          <StyledList>
            <Header field="Beds" edit={false} />
            <Content detail={property.bedsQuantity} />
          </StyledList>
          <StyledList>
            <Header field="Guests" edit={false} />
            <Content detail={property.guestsQuantity} />
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
