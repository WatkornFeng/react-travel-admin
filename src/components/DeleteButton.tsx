import DeleteIcon from "@mui/icons-material/Delete";
import { Button, styled } from "@mui/material";

type DeleteTriggerButtonProps = {
  text: string;
  onClick: () => void;
};
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
export default function DeleteButton({
  text,
  onClick,
}: DeleteTriggerButtonProps) {
  return (
    <StyledBtn startIcon={<DeleteIcon />} onClick={onClick}>
      DELETE {text}
    </StyledBtn>
  );
}
