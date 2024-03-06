import {
  Box,
  Button,
  Fade,
  IconButton,
  ImageListItem,
  Input,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Title from "./ui/Title";
import SubTitle from "./ui/SubTitle";
import CancelIcon from "@mui/icons-material/Cancel";
import BtnSelectImage from "./ui/BtnSelectImage";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";
import { useEffect, useState } from "react";
import BtnAddImage from "./ui/BtnAddImage";
// import Image from "./ui/Image";
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
    cursor: "pointer",
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, " +
      "rgba(0, 0, 0, 0.4) 70%, rgba(0,0,0,0.2) 100%)",
  },
});
const StyledGroupImage = styled(Box)({
  display: "flex",
  //   justifyContent: "center",
  //   backgroundColor: "red",
  flexWrap: "wrap",
  gap: "1rem",
});
function ChoosePictures() {
  const {
    state: { pictures },
  } = useBecomeHost() as IBecomeHostContext;

  const [imageUrl, setImageUrl] = useState<string[] | null>(null);

  useEffect(() => {
    if (pictures) {
      const dataURL: string[] = [];
      const loadImage = (files: File[]) => {
        files.forEach((file, index) => {
          const reader = new FileReader();
          reader.onload = () => {
            dataURL.push(reader.result as string);

            if (index === files.length - 1) {
              setImageUrl(dataURL);
            }
          };

          reader.readAsDataURL(file);
        });
      };

      loadImage(pictures);
    }
  }, [pictures]);
  return (
    <>
      <Stack spacing={2}>
        <Title title="Add some photos of your property." />
        <SubTitle text="You'll need 5 photos to get started. You can add more or make changes later." />
        {!pictures && <BtnSelectImage />}
      </Stack>
      <StyledGroupImage>
        {imageUrl &&
          imageUrl.map((url, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                height: "300px",
                width: "400px",
              }}
            >
              <Fade in timeout={1000 + index * 400} key={index}>
                <img
                  src={url}
                  style={{
                    height: "100%",

                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Fade>
              <StyledShadowImage>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <IconButton>
                    <CancelIcon />
                  </IconButton>
                </Box>
              </StyledShadowImage>
            </Box>
          ))}
        {imageUrl && (
          <Box>
            <BtnAddImage />
          </Box>
        )}
      </StyledGroupImage>
    </>
  );
}

export default ChoosePictures;
