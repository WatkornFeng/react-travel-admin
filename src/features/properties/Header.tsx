import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import { IModalState } from "../../pages/Property";
import ModalForm from "./ModalForm";
interface IProps {
  field: string;
  modalContent?: JSX.Element;
  edit: boolean;

  modal?: IModalState;
  setModal?: React.Dispatch<React.SetStateAction<IModalState>>;
}
const StyledEditBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  borderBottom: "0.5px solid transparent",
  "&:hover": {
    cursor: "pointer",
    borderBottom: "0.5px solid grey",
  },
});
function Header({ field, modalContent, edit, modal, setModal }: IProps) {
  const openModal = () => {
    if (setModal) setModal({ value: field, open: true });
  };
  return (
    <>
      {modal && (
        <ModalForm
          fieldName={field}
          content={modalContent}
          setIsOpen={setModal}
          isOpen={modal}
        />
      )}

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontWeight="bold" variant="h6">
          {field}
        </Typography>
        {edit && (
          <StyledEditBox onClick={openModal}>
            <Typography fontWeight="light" variant="body1">
              Edit
            </Typography>
            <EditIcon fontSize="small" />
          </StyledEditBox>
        )}
      </Box>
    </>
  );
}

export default Header;
