import { Box, styled } from "@mui/material";

const imagUrl =
  "https://res.cloudinary.com/dp2atg2zj/image/upload/f_auto,q_auto/v1/logos/w4amg0v8eiudt05ojkul";
const StyledBackgroundImage = styled(Box)(() => ({
  bgcolor: "black",
  height: "100vh",
  backgroundImage: `url(${imagUrl})`,
  backgroundSize: "100vw 100vh",
  opacity: 0.5,
}));

export default StyledBackgroundImage;
