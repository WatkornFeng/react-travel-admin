import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { Button, Typography, styled } from "@mui/material";
import toast from "react-hot-toast";

import DialogLoading from "../../../components/DialogLoading";
import Spinner from "../../../components/Spinner";

import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";
import { RESET_DEFAULT } from "../../../context/constant";
import { createNewProperty } from "../../../services/apiBecomeHost";

const StyledSubmitBtn = styled(Button)(() => ({
  "&.Mui-disabled": {
    pointerEvents: "unset",
    background: "#e2e2e2",
    cursor: "not-allowed",
  },
}));
function SubmitBtn() {
  const { user, getAccessTokenSilently } = useAuth0();

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
    dispatch,
  } = useBecomeHost() as IBecomeHostContext;

  const { isPending, mutate: createProp } = useMutation({
    mutationFn: createNewProperty,
    onSuccess: (response) => {
      if (response.status === "fail") {
        dispatch({ type: RESET_DEFAULT });
        return navigate("/error");
      }
      toast.success("Create Property Complete");
      dispatch({ type: RESET_DEFAULT });
      navigate("/dashboard");
    },
    onError: () => {
      navigate("/error");
    },
  });

  const createProperty = async () => {
    const token = await getAccessTokenSilently();

    const formData = new FormData();
    if (user?.email) {
      formData.append("ownerProperty", user.email);
    }
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

    // ✅ pass token and formData TOGETHER
    createProp({ formData, token });
  };
  return (
    <>
      {isPending && (
        <DialogLoading text="Creating Property, Please wait . . ." />
      )}
      <StyledSubmitBtn
        variant="contained"
        color="warning"
        onClick={createProperty}
        disabled={isPending}
        endIcon={isPending ? <Spinner size="1rem" thick={10} /> : null}
      >
        <Typography fontWeight="bold" fontSize="1rem">
          Create Property
        </Typography>
      </StyledSubmitBtn>
    </>
  );
}

export default SubmitBtn;
