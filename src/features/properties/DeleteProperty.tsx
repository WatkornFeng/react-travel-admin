import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { IModalState } from "../../pages/Property";
import ModalForm from "./ModalForm";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteButton from "../../components/DeleteButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteHotel } from "../../services/apiHotel";
import { Token } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import DialogLoading from "../../components/DialogLoading";
import toast from "react-hot-toast";
const StyledBtn = styled(Button)(({ theme }) => ({
  borderRadius: 2,

  textTransform: "uppercase",
  height: "70%",
  border: `3px solid ${theme.palette.customRed.contrast}`,
  backgroundColor: theme.palette.customRed.main,
  color: theme.palette.customRed.contrast,
  fontWeight: "bold",
  "&:hover": {
    border: `3px solid ${theme.palette.customRed.main}`,
    backgroundColor: theme.palette.customRed.contrast,
    color: theme.palette.customRed.main,
  },
}));

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
