import { Box, Stack, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";
import PropertyName from "./forminput/PropertyName";
import PropertyDescription from "./forminput/PropertyDescription";

export interface IFormInput {
  propertyName: string;
  propertyDescription: string;
}

function CreatePropertyForm() {
  const methods = useForm<IFormInput>({
    defaultValues: {
      propertyName: "",
      propertyDescription: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <label htmlFor="propertyName">Property name</label>
          <PropertyName />
          <label htmlFor="propertyDescription">Property description</label>
          <PropertyDescription />
        </Stack>

        <input type="submit" />
      </form>
    </FormProvider>
  );
}

export default CreatePropertyForm;
