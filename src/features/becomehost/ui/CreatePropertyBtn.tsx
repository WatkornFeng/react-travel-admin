import { Button, Typography, styled } from "@mui/material";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";
import { useMutation } from "@tanstack/react-query";
import { createNewProperty } from "../../../services/apiBecomeHost";
import toast from "react-hot-toast";
import Spinner from "../../../components/Spinner";
import { useNavigate } from "react-router-dom";

const StyledSubmitBtn = styled(Button)(({ theme }) => ({
  "&.Mui-disabled": {
    pointerEvents: "unset",
    background: "#e2e2e2",
    cursor: "not-allowed",
  },
}));

function SubmitBtn() {
  const navigate = useNavigate();
  const {
    state: {
      propertyType,
      propertyLocation: { latlng },
      propertyStars,
      propertyName,
      propertyDescription,
      propertyPictures,
      propertyPrices,
      propertyAmenities,
      propertyDetails: { guests, beds },
    },
  } = useBecomeHost() as IBecomeHostContext;

  const { isPending, mutate: createProp } = useMutation({
    mutationFn: createNewProperty,
    onSuccess: () => {
      // toast.success("Create Property Complete");
      navigate("/dashboard");
    },
    onError: () => {
      // toast.error(err.message);
      navigate("/error");
    },
  });

  const createProperty = () => {
    const formData = new FormData();
    if (propertyName) formData.append("propertyName", propertyName);
    if (propertyDescription)
      formData.append("propertyDescription", propertyDescription);
    if (propertyPictures) {
      propertyPictures.forEach((file) => {
        formData.append(`pictures`, file);
      });
    }
    if (propertyStars)
      formData.append("propertyStars", JSON.stringify(propertyStars));
    if (propertyType) {
      const typeId = propertyType.split(" ")[2];
      formData.append("propertyType", typeId);
    }
    if (latlng) {
      const lnglat = JSON.stringify([latlng.lng, latlng.lat]);
      formData.append("lnglat", lnglat);
    }
    if (propertyPrices) {
      const price = JSON.stringify(propertyPrices);
      formData.append("propertyPrice", price);
    }
    if (propertyAmenities) {
      const amenityId = JSON.stringify(
        propertyAmenities.map((amenity) => amenity.split(" ")[2])
      );

      formData.append("propertyAmenities", amenityId);
    }

    if (guests) {
      formData.append("guests", JSON.stringify(guests));
    }
    if (beds) {
      formData.append("beds", JSON.stringify(beds));
    }
    createProp(formData);
  };
  return (
    <StyledSubmitBtn
      variant="contained"
      color="warning"
      onClick={createProperty}
      disabled={isPending}
      endIcon={
        isPending ? <Spinner size="1rem" thick={10} color="red" /> : null
      }
    >
      <Typography fontWeight="bold" fontSize="1rem">
        Create Property
      </Typography>
    </StyledSubmitBtn>
  );
}

export default SubmitBtn;
