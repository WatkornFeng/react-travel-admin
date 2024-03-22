import { Box, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/system";
import { useState } from "react";
import ModalForm from "./ModalForm";
interface IProps {
  field: string;
  modalContent?: JSX.Element;
  edit: boolean;
  modal?: boolean;
  setModal?: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && (
        <ModalForm
          fieldName={field}
          content={modalContent}
          setIsOpen={setOpenModal}
          isOpen={openModal}
        />
      )}

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontWeight="bold" variant="h6">
          {field}
        </Typography>
        {edit && (
          <StyledEditBox onClick={() => setOpenModal(true)}>
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
