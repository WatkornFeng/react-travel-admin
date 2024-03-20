import { Box, styled, ToggleButton } from "@mui/material";
import Icon from "../../../components/Icon";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";

const StyledCard = styled(ToggleButton)(({ theme }) => ({
  "&.MuiToggleButton-root": {
    color: "black",
    backgroundColor: "white",
    border: "3px solid black",
    borderRadius: "20px",
    padding: "18px",
    transition: "transform ease-out 0.3s",
    width: "10rem",

    "&:hover": {
      transform: "scale(1.15)",
    },
    "&.Mui-selected": {
      color: "black",
      backgroundColor: `#cccccc`,
    },
  },
}));

interface IProps {
  data: string | number;
  id?: string;
  base64?: string;
  icon?: JSX.Element;
}
function BtnCard({ data, base64, icon, id }: IProps) {
  // const {
  //   state: { propertyType },
  //   dispatch,
  // } = useBecomeHost() as IBecomeHostContext;

  const dataWithBase64 =
    data + " " + (base64 ? base64 : "") + " " + (id ? id : "");

  // console.log(dataWithBase64);
  return (
    // <StyledCard value={data}>
    <StyledCard value={dataWithBase64}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.7rem",
        }}
      >
        {base64 && <Icon base64Url={base64} size="2rem" />}

        {icon && icon}
        {data}
      </Box>
    </StyledCard>
  );
}

export default BtnCard;
