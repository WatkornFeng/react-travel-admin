// import { LatLngLiteral } from "leaflet";
// import { useState } from "react";
// import {
//   IBecomeHostContext,
//   useBecomeHost,
// } from "../context/BecomeHostContext";
// import { SELECT_LOCATION } from "../context/constant";

// function useGeoLocation() {
//   const {
//     dispatch,
//     state: {
//       location: { locationStr, province, countryCode },
//     },
//   } = useBecomeHost() as IBecomeHostContext;
//   const [myLocation, setMyLocation] = useState<LatLngLiteral | null>(null);
//   const getMyLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           dispatch({
//             type: SELECT_LOCATION,
//             payload: {
//               latlng: {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude,
//               },
//               locationStr,
//               province,
//               countryCode,
//             },
//           });
//           setMyLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.error("Error getting geolocation:", error);
//         }
//       );
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//     }
//   };
//   return { myLocation, getMyLocation };
// }

// export default useGeoLocation;
