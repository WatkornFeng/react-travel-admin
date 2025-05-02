import { useEffect, useState } from "react";
import { Box, Stack, styled } from "@mui/material";

import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";

import BtnAddImage from "./ui/BtnAddImage";
import BtnSelectImage from "./ui/BtnSelectImage";
import Image from "./ui/Image";
import SubTitle from "./ui/SubTitle";
import Title from "./ui/Title";

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
