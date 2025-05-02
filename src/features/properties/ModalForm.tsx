import CloseIcon from "@mui/icons-material/Close";
import { DialogContent, DialogTitle, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { IModalState } from "../../pages/Property";

interface IProps {
  isOpen: IModalState;
  setIsOpen: React.Dispatch<React.SetStateAction<IModalState>> | undefined;
  content?: JSX.Element;
  fieldName: string;
}
function ModalForm({ isOpen, setIsOpen, content, fieldName }: IProps) {
  const handleCloseDialog = () => {
    if (setIsOpen) {
      setIsOpen({ value: "", open: false });
    }
  };

  return (
    <Dialog
      maxWidth="lg"
      color="success"
      open={isOpen.value === fieldName}
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
    </Dialog>
  );
}

export default ModalForm;
