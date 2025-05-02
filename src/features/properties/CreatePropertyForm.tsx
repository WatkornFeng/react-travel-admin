// import { Box, Button, Stack, TextField } from "@mui/material";
// import { styled } from "@mui/system";
// import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
// import toast from "react-hot-toast";
// import PropertyName from "./forminput/PropertyName";
// import PropertyDescription from "./forminput/PropertyDescription";
// import ModalForm from "./ModalForm";
// // import ModalForm from "./forminput/ModalForm";

// export interface IFormInput {
//   propertyName: string;
//   propertyDescription: string;
//   propertyType: string;
// }

// function CreatePropertyForm() {
//   const methods = useForm<IFormInput>({
//     defaultValues: {
//       propertyName: "",
//       propertyDescription: "",
//       propertyType: "",
//     },
//   });

//   const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
//   return (
//     <FormProvider {...methods}>
//       {/* <ModalForm /> */}
//       <form onSubmit={methods.handleSubmit(onSubmit)}>
//         <Stack spacing={2}>
//           <label htmlFor="propertyName">
//             Property namexjkojkojkojkojkojkojkojkojkojkojkojkojkojkojkojko
//           </label>
//           <PropertyName />
//           <label htmlFor="propertyDescription">Property description</label>
//           <PropertyDescription />
//         </Stack>
//       </form>
//     </FormProvider>
//   );
// }

// export default CreatePropertyForm;
