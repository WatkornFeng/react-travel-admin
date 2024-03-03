import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropertyName from "./forminput/PropertyName";
function ModalForm() {
  const [open, setOpen] = useState(true);

  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Modal title
      </DialogTitle>
      <IconButton
        aria-label="close"
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <PropertyName />
      </DialogContent>
      <DialogActions>
        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "primary.constrast",
            color: "primary.main",
            fontWeight: "bold",
          }}
          onClick={handleCloseDialog}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalForm;
