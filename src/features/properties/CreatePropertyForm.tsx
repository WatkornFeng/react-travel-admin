import { Box, TextField } from "@mui/material";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";

interface IFormInput {
  propertyName: string;
}
function CreatePropertyForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      propertyName: "",
    },
  });
  console.log(errors);
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="property">Property name</label>
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
          <TextField
            {...field}
            id="property"
            placeholder="Your property name."
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "primary.constrast",
                fontWeight: "bold",

                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.constrast",
                  borderWidth: "0.2rem",
                },
                "&.Mui-focused": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "lightgreen",
                    borderWidth: "3px",
                  },
                },
              },
            }}
            error={!!errors.propertyName}
            helperText={errors.propertyName && errors.propertyName.message}
          />
        )}
      />

      <input type="submit" />
    </form>
  );
}

export default CreatePropertyForm;
