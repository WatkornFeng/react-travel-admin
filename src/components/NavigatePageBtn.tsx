import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledBtn = styled(Button)(({ theme }) => ({
  borderRadius: "20px",
  height: "70%",
  border: "3px solid black",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.constrast,
  fontWeight: "bold",
  "&:hover": {
    border: "3px solid black",
  },
}));

interface IProps {
  text: string;
  path: string;
  type?: "button" | "submit" | "reset" | undefined;
}

function NavigatePageBtn({ text, path, type }: IProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <StyledBtn
      variant="outlined"
      onClick={handleClick}
      type={type}
      color="success"
    >
      <Box>{text}</Box>
    </StyledBtn>
  );
}

export default NavigatePageBtn;
