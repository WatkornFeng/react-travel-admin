import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Fade, IconButton, styled } from "@mui/material";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";
import { DELETE_PICTURE } from "../../../context/constant";

const StyledShadowImage = styled(Box)({
  position: "absolute",
  bgcolor: "red",
  top: 0,
  height: "100%",
  width: "100%",
  background:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, " +
    "rgba(0, 0, 0, 0.2) 20%, rgba(0,0,0,0.0) 30%)",
  "&:hover": {
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, " +
      "rgba(0, 0, 0, 0.4) 70%, rgba(0,0,0,0.2) 100%)",
  },
});
interface IProps {
  imageUrl: string;
  index: number;
}
function Image({ imageUrl, index }: IProps) {
  const {
    dispatch,
    state: { propertyPictures: pictures },
  } = useBecomeHost() as IBecomeHostContext;

  const handleDeletePicture = (index: number) => {
    const filteredPicture = (pictures as File[]).filter((_, i) => {
      return i !== index;
    });
    dispatch({ type: DELETE_PICTURE, payload: filteredPicture });
  };
  return (
    <Box
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        height: "300px",
        width: "400px",
      }}
    >
      <Fade in timeout={1000 + index * 400}>
        <img
          src={imageUrl}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Fade>
      <StyledShadowImage>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => handleDeletePicture(index)}>
            <CancelIcon />
          </IconButton>
        </Box>
      </StyledShadowImage>
    </Box>
  );
}

export default Image;
