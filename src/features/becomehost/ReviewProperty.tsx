import { Box, Paper, Stack, Typography, styled } from "@mui/material";
import Title from "./ui/Title";
import SubTitle from "./ui/SubTitle";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";
import { useEffect, useState } from "react";
import ReviewCardPrice from "./ui/ReviewCardPrice";

import ReviewCardDetail from "./ui/ReviewCardDetail";
const Card = styled(Paper)({
  borderRadius: "20px",
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gridTemplateRows: "1fr",
  overflow: "hidden",
  backgroundColor: "white",
  marginTop: 30,
  width: "80%",
  height: "300px",
});

function ReviewProperty() {
  const {
    state: { pictures },
  } = useBecomeHost() as IBecomeHostContext;
  const [imageUrl, setImageUrl] = useState<string | ArrayBuffer | null>(null);
  useEffect(() => {
    if (pictures) {
      const loadImage = (file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
          setImageUrl(reader.result);
        };

        reader.readAsDataURL(file);
      };

      loadImage(pictures[0]);
    }
  }, [pictures]);
  return (
    <>
      <Stack spacing={2}>
        <Title title="Review your listing" />
        <SubTitle text="Here's what we'll show to guests. Make sure everything looks good." />
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card elevation={5}>
          <img
            src={imageUrl as string}
            alt="review-property"
            height="100%"
            width="100%"
            style={{
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              padding: "1rem",
            }}
          >
            <ReviewCardDetail />
            <ReviewCardPrice />
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default ReviewProperty;
