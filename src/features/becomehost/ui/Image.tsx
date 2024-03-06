// import { Box, styled, IconButton, Fade } from "@mui/material";
// import CancelIcon from "@mui/icons-material/Cancel";

// const StyledShadowImage = styled(Box)({
//   position: "absolute",
//   bgcolor: "red",
//   top: 0,
//   height: "100%",
//   width: "100%",
//   background:
//     "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, " +
//     "rgba(0, 0, 0, 0.2) 20%, rgba(0,0,0,0.0) 30%)",
//   "&:hover": {
//     cursor: "pointer",
//     background:
//       "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, " +
//       "rgba(0, 0, 0, 0.4) 70%, rgba(0,0,0,0.2) 100%)",
//   },
// });
// interface IProps {
//   imageUrl: string;
//   index: number;
// }
// function Image({ imageUrl, index }: IProps) {
//   return (
//     <Fade in timeout={1000 + index * 150}>
//       <Box
//         sx={{
//           borderRadius: "20px",
//           overflow: "hidden",
//           position: "relative",
//         }}
//       >
//         <img
//           src={imageUrl}
//           style={{
//             height: "100%",
//             width: "400px",
//             objectFit: "cover",
//           }}
//         />
//         <StyledShadowImage>
//           <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
//             <IconButton>
//               <CancelIcon />
//             </IconButton>
//           </Box>
//         </StyledShadowImage>
//       </Box>
//     </Fade>
//   );
// }

// export default Image;
