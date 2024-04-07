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
import { MAX_LENGTH_NAME, MIN_LENGTH_NAME } from "../../utils/constant";

interface IProps {
  data: string;
  propertyId: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
function EditName({ data, propertyId, setModal }: IProps) {
  const queryClient = useQueryClient();

  const { isPending: isCreatingName, mutate: updateName } = useMutation({
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
      toast.success("Update Property name successfully.");
      queryClient.invalidateQueries({ queryKey: ["property"] });
      // setModal(false);
    },
    onError: () => {
      toast.error("Update Property name failed.Please try again");
    },
  });
  // console.log(propertyId);
  const [name, setName] = useState(data);
  // console.log(name);
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
        disabled={isCreatingName || isError}
        variant="contained"
        onClick={() =>
          updateName({ fieldName: "name", newData: name, id: propertyId })
        }
      >
        <Stack spacing={3} direction="row" sx={{ alignItems: "center" }}>
          {isCreatingName ? (
            <Typography>Updating...</Typography>
          ) : (
            <Typography>Update Name</Typography>
          )}
          {isCreatingName && <Spinner size="1rem" thick={3} />}
        </Stack>
      </StyledSaveBtn>
    </Stack>
  );
}

export default EditName;
