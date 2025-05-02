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
import {
  MAX_LENGTH_DESCRIPTION,
  MIN_LENGTH_DESCRIPTION,
} from "../../utils/constant";
import { INewData, updateProperty } from "../../services/apiHotel";
interface IProps {
  data: string;
  propertyId: string;

  setModal: React.Dispatch<React.SetStateAction<IModalState>>;
}
function EditDescription({ data, propertyId, setModal }: IProps) {
  const queryClient = useQueryClient();

  const { isPending: isUpdatingDescription, mutate: updateDescription } =
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
      onSuccess: (response) => {
        if (response.status === "fail") {
          return toast.error(response.message);
        }
        toast.success("Update Property description successfully.");
        queryClient.invalidateQueries({ queryKey: ["property"] });
        setModal({ value: "", open: false });
      },
      onError: () => {
        toast.error("Update Property description failed.Please try again");
      },
    });

  const [description, setDescription] = useState(data);

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
    <>
      {isUpdatingDescription && (
        <DialogLoading text="Updating Property's description, Please wait . . ." />
      )}
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
          disabled={isUpdatingDescription || isError}
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
            {isUpdatingDescription ? (
              <Typography>Updating...</Typography>
            ) : (
              <Typography>Update Description</Typography>
            )}
            {isUpdatingDescription && <Spinner size="1rem" thick={3} />}
          </Stack>
        </StyledSaveBtn>
      </Stack>
    </>
  );
}

export default EditDescription;
