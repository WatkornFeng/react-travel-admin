import React, { useEffect, useState } from "react";
import { StyledTextField } from "./forminput/StyledTextField";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  INewData,
  updateProperty,
  // updatePropertyName,
} from "../../services/apiHotel";
import { Stack, Typography } from "@mui/material";

import StyledSaveBtn from "./ui/StyledSaveBtn";
import Spinner from "../../components/Spinner";
import toast from "react-hot-toast";

import ErrorMessage from "../../components/ErrorMessage";
import {
  MAX_LENGTH_DESCRIPTION,
  MIN_LENGTH_DESCRIPTION,
} from "../../utils/constant";

interface IProps {
  data: string;
  propertyId: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
function EditDescription({ data, propertyId, setModal }: IProps) {
  const queryClient = useQueryClient();

  const { isPending: isCreatingDescription, mutate: updateDescription } =
    useMutation({
      mutationFn: ({
        fieldName,
        newData,
        id,
      }: {
        fieldName: string;
        newData: INewData;
        id: string;
      }) => updateProperty(fieldName, newData, id),
      onSuccess: () => {
        toast.success("Update Property description successfully.");
        queryClient.invalidateQueries({ queryKey: ["property"] });
        // setModal(false);
      },
      onError: () => {
        toast.error("Update Property description failed.Please try again");
      },
    });
  // console.log(propertyId);
  const [description, setDescription] = useState(data);
  // console.log(name);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (
      description.length < MIN_LENGTH_DESCRIPTION ||
      description.length > MAX_LENGTH_DESCRIPTION
    ) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [description]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <StyledTextField
          value={description}
          onChange={handleChange}
          multiline
          rows={4}
          property="800px"
          variant="outlined"
          autoFocus
        />
        <Typography variant="body1">
          {description.length} / {MAX_LENGTH_DESCRIPTION}
        </Typography>
        {isError && description.length < MAX_LENGTH_DESCRIPTION && (
          <ErrorMessage
            text={`The minimun number of characters allowed is ${MIN_LENGTH_DESCRIPTION}`}
            size="1rem"
          />
        )}
        {isError && description.length > MAX_LENGTH_DESCRIPTION && (
          <ErrorMessage
            text={`The maximun number of characters allowed is ${MAX_LENGTH_DESCRIPTION}`}
            size="1rem"
          />
        )}
      </Stack>
      <StyledSaveBtn
        disabled={isCreatingDescription || isError}
        variant="contained"
        onClick={() =>
          updateDescription({
            fieldName: "description",
            newData: description,
            id: propertyId,
          })
        }
      >
        <Stack spacing={3} direction="row" sx={{ alignItems: "center" }}>
          {isCreatingDescription ? (
            <Typography>Updating...</Typography>
          ) : (
            <Typography>Update Description</Typography>
          )}
          {isCreatingDescription && <Spinner size="1rem" thick={3} />}
        </Stack>
      </StyledSaveBtn>
    </Stack>
  );
}

export default EditDescription;
