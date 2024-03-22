import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  content?: JSX.Element;
  fieldName: string;
}
function ModalForm({ isOpen, setIsOpen, content, fieldName }: IProps) {
  // console.log(isOpen);
  const handleCloseDialog = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  // const handleMutate=()=>{
  //   updateFn()
  // }
  return (
    <Dialog
      maxWidth="lg"
      color="success"
      open={isOpen}
      onClose={handleCloseDialog}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Your property's {fieldName}
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
      <DialogContent dividers>{content}</DialogContent>
      {/* <DialogActions>
        <Button
          // onClick={handleMutate}
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "primary.constrast",
            color: "primary.main",
            fontWeight: "bold",
            "&:hover": {
              color: "primary.constrast",
            },
          }}
        >
          Save
        </Button>
      </DialogActions> */}
    </Dialog>
  );
}

export default ModalForm;
