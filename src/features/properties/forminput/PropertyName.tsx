import { TextField, styled } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { IFormInput } from "../CreatePropertyForm";
import { StyledTextField } from "./StyledTextField";

function PropertyName() {
  const {
    control,
    formState: { errors },
  } = useFormContext<IFormInput>();
  return (
    <Controller
      name="propertyName"
      control={control}
      rules={{
        required: {
          value: true,
          message: "This field required",
        },
        maxLength: {
          value: 40,
          message: "Property name must have less or equal than 40 characters",
        },
        minLength: {
          value: 10,
          message: "Property name must have more or equal than 10 characters",
        },
      }}
      render={({ field }) => (
        <StyledTextField
          {...field}
          id="propertyName"
          placeholder="Your property name."
          variant="outlined"
          error={!!errors.propertyName}
          helperText={errors.propertyName && errors.propertyName.message}
        />
      )}
    />
  );
}

export default PropertyName;
