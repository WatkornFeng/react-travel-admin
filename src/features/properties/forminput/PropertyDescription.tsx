import { Controller, useFormContext } from "react-hook-form";
// import { IFormInput } from "../CreatePropertyForm";
import { StyledTextField } from "./StyledTextField";
interface IFormInput {
  propertyName: string;
  propertyDescription: string;
  propertyType: string;
}
function PropertyDescription() {
  const {
    control,
    formState: { errors },
  } = useFormContext<IFormInput>();
  return (
    <Controller
      name="propertyDescription"
      control={control}
      rules={{
        required: {
          value: true,
          message: "This field required",
        },
        maxLength: {
          value: 400,
          message:
            "Property Description must have less or equal than 400 characters",
        },
        minLength: {
          value: 100,
          message:
            "Property Description must have more or equal than 100 characters",
        },
      }}
      render={({ field }) => (
        <StyledTextField
          {...field}
          id="propertyDescription"
          type="text"
          multiline
          rows={5}
          placeholder="Your property description."
          variant="outlined"
          error={!!errors.propertyDescription}
          helperText={
            errors.propertyDescription && errors.propertyDescription.message
          }
        />
      )}
    />
  );
}

export default PropertyDescription;
