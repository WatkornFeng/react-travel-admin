import { Stack, Typography } from "@mui/material";
import CreatePropertyForm from "../features/properties/CreatePropertyForm";
import ModalForm from "../features/properties/ModalForm";

function Property() {
  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight="bold">
          Welcome! FengFeng
        </Typography>
        {/* <CreatePropertyForm /> */}
      </Stack>
    </>
  );
}

export default Property;
