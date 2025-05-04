import { useAuth0 } from "@auth0/auth0-react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import DeleteButton from "../../components/DeleteButton";
import DialogLoading from "../../components/DialogLoading";
import { deleteHotel } from "../../services/apiHotel";

function DeleteProperty({
  propertyName,
  propertyId,
}: {
  propertyName: string;
  propertyId: string;
}) {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();
  const [open, setModal] = useState(false);
  const navigate = useNavigate();

  const { isPending: isDeletingProperty, mutate: deleteProperty } = useMutation(
    {
      mutationFn: async ({ propertyId }: { propertyId: string }) => {
        const token = await getAccessTokenSilently(); // ✅ Get token
        return deleteHotel(propertyId, token); // ✅ Pass token
      },
      onSuccess: (res) => {
        toast.success(res.message || "Delete Property success");
        queryClient.invalidateQueries({ queryKey: ["property"] });

        navigate("/property", { replace: true });
      },
      onError: (err) => {
        toast.error(`Delete Property failed.${err.message}`);
        navigate("/property");
      },
    }
  );

  const handleDeleteProperty = () => {
    deleteProperty({ propertyId });
  };
  const handleOpenDialog = () => setModal(true);
  const handleCloseDialog = () => setModal(false);

  return (
    <>
      {isDeletingProperty && (
        <DialogLoading text="Deleting Property, Please wait . . ." />
      )}
      {open && (
        <Dialog
          maxWidth="lg"
          color="success"
          open={open}
          onClose={handleCloseDialog}
        >
          <DialogTitle sx={{ m: 0, pt: 8 }} id="DeleteProperty">
            Are you sure to delete your "{propertyName.slice(0, 15)}..." list ?
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>

          <DialogContent dividers>
            <Stack p={2}>
              <DeleteButton
                text="Property list"
                onClick={handleDeleteProperty}
              />
            </Stack>
          </DialogContent>
        </Dialog>
      )}

      <DeleteButton text="Property" onClick={handleOpenDialog} />
    </>
  );
}

export default DeleteProperty;
