import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Stack, Typography } from "@mui/material";

import { IModalState } from "../../pages/Property";
import { StyledTextField } from "./forminput/StyledTextField";
import StyledSaveBtn from "./ui/StyledSaveBtn";
import Spinner from "../../components/Spinner";
import ErrorMessage from "../../components/ErrorMessage";
import DialogLoading from "../../components/DialogLoading";

import { INewData, updateProperty } from "../../services/apiHotel";
import { MAX_LENGTH_NAME, MIN_LENGTH_NAME } from "../../utils/constant";
import { useAuth0 } from "@auth0/auth0-react";

interface IProps {
  data: string;
  propertyId: string;

  setModal: React.Dispatch<React.SetStateAction<IModalState>>;
}
function EditName({ data, propertyId, setModal }: IProps) {
  const queryClient = useQueryClient();
  const { getAccessTokenSilently } = useAuth0();
  const { isPending: isUpdatingName, mutate: updateName } = useMutation({
    mutationFn: async ({
      fieldName,
      newData,
      id,
    }: {
      fieldName: string;
      newData: INewData;
      id: string;
    }) => {
      const token = await getAccessTokenSilently(); // ✅ Get token
      return updateProperty(fieldName, newData, id, token); // ✅ Pass token
    },
    onSuccess: () => {
      toast.success("Update Property name successfully.");
      queryClient.invalidateQueries({ queryKey: ["property"] });
      setModal({ value: "", open: false });
    },
    onError: () => {
      toast.error("Update Property name failed.Please try again");
      setModal({ value: "", open: false });
    },
  });

  const [name, setName] = useState(data);

  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (name.length < MIN_LENGTH_NAME || name.length > MAX_LENGTH_NAME) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [name]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      {isUpdatingName && (
        <DialogLoading text="Updating Property's name, Please wait . . ." />
      )}
      <Stack spacing={4}>
        <Stack spacing={2}>
          <StyledTextField
            value={name}
            onChange={handleChange}
            multiline
            rows={4}
            property="800px"
            variant="outlined"
            autoFocus
          />
          <Typography variant="body1">
            {name.length} / {MAX_LENGTH_NAME}
          </Typography>
          {isError && name.length < MIN_LENGTH_NAME && (
            <ErrorMessage
              text={`The minimun number of characters allowed is ${MIN_LENGTH_NAME}`}
              size="1rem"
            />
          )}
          {isError && name.length > MAX_LENGTH_NAME && (
            <ErrorMessage
              text={`The maximun number of characters allowed is ${MAX_LENGTH_NAME}`}
              size="1rem"
            />
          )}
        </Stack>
        <StyledSaveBtn
          disabled={isUpdatingName || isError}
          variant="contained"
          onClick={() =>
            updateName({ fieldName: "name", newData: name, id: propertyId })
          }
        >
          <Stack spacing={3} direction="row" sx={{ alignItems: "center" }}>
            {isUpdatingName ? (
              <Typography>Updating...</Typography>
            ) : (
              <Typography>Update Name</Typography>
            )}
            {isUpdatingName && <Spinner size="1rem" thick={3} />}
          </Stack>
        </StyledSaveBtn>
      </Stack>
    </>
  );
}

export default EditName;
