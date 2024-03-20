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
import Image from "./ui/Image";

const StyledGroupImage = styled(Box)({
  display: "flex",

  flexWrap: "wrap",
  gap: "1rem",
});
function ChoosePictures() {
  const {
    state: { propertyPictures },
  } = useBecomeHost() as IBecomeHostContext;

  const [imageUrl, setImageUrl] = useState<string[] | null>(null);
  // console.log(pictures?.length);
  useEffect(() => {
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

    if (!propertyPictures || propertyPictures?.length === 0) {
      setImageUrl(null);
    } else {
      loadImage(propertyPictures);
    }
  }, [propertyPictures]);
  // console.log(imageUrl);

  return (
    <>
      <Stack spacing={2}>
        <Title title="Add some photos of your property." />
        <SubTitle text="You'll need 5 photos to get started. You can add more or make changes later." />
        {(!propertyPictures || propertyPictures.length === 0) && (
          <BtnSelectImage />
        )}
      </Stack>
      <StyledGroupImage>
        {imageUrl &&
          imageUrl.map((url, index) => (
            <Image key={index} index={index} imageUrl={url} />
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
