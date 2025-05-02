// import { useQuery } from "@tanstack/react-query";
// import { getHotelStats } from "../services/apiStats";
// import toast from "react-hot-toast";
// import { Box, CircularProgress, Typography } from "@mui/material";
// import NoProperty from "../components/NoProperty";
// type IUserAdmin = {
//   name: string;
//   email: string;
//   locale: string;
//   property: { name: string } | undefined;
// };
// const tempData1 = {
//   "name": "FengFeng",
//   "email": "fengfeng@gmail.com",
//   "locale": "th",
//   "property": {
//     "name": "hotel",
//   },
// };
// const tempData2 = {
//   name: "FengFeng",
//   email: "fengfeng@gmail.com",
//   locale: "th",
//   property: undefined,
// };
// function Rooms() {
//   // const {
//   //   isLoading,
//   //   data: dataStats,
//   //   error,
//   // } = useQuery({
//   //   queryKey: ["stats"],
//   //   queryFn: getHotelStats,
//   // });

//   return <>{!tempData2?.property && <NoProperty />}</>;
// }

// export default Rooms;
// // {isLoading && <CircularProgress color="secondary" size="3rem" />}
// //       {!isLoading && !dataStats && <Typography>Data not found</Typography>}
// //       {!isLoading && dataStats && <Typography>success</Typography>}
