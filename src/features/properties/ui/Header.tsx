import { Box, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/system";
interface IProps {
  field: string;
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
function Header({ field }: IProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography fontWeight="bold" variant="h6">
        {field}
      </Typography>
      <StyledEditBox>
        <Typography fontWeight="light" variant="body1">
          Edit
        </Typography>
        <EditIcon fontSize="small" />
      </StyledEditBox>
    </Box>
  );
}

export default Header;
