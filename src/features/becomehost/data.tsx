import LocationCityIcon from "@mui/icons-material/LocationCity";
import NightShelterIcon from "@mui/icons-material/NightShelter";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DomainDisabledIcon from "@mui/icons-material/DomainDisabled";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import CottageIcon from "@mui/icons-material/Cottage";
import VillaIcon from "@mui/icons-material/Villa";
import ChooseProperty from "./ChooseProperty";
import CreateName from "./CreateName";
import PickLocation from "./PickLocation";
import ChooseStar from "./ChooseStar";
// Data for Choose Property
type PropertyDataType = {
  type: string;
  icon: JSX.Element;
};
const sxIcon = {
  transform: "scale(1.2)",
  mr: "0.8rem",
};
export const propertyType: PropertyDataType[] = [
  {
    type: "Hotel",
    icon: <LocationCityIcon sx={sxIcon} />,
  },
  {
    type: "Hostel",
    icon: <NightShelterIcon sx={sxIcon} />,
  },
  {
    type: "Resort",
    icon: <HolidayVillageIcon sx={sxIcon} />,
  },
  {
    type: "Apartment",
    icon: <ApartmentIcon sx={sxIcon} />,
  },
  {
    type: "Aparthotel",
    icon: <DomainDisabledIcon sx={sxIcon} />,
  },
  {
    type: "B&B",
    icon: <FreeBreakfastIcon sx={sxIcon} />,
  },
  {
    type: "Home",
    icon: <CottageIcon sx={sxIcon} />,
  },
  {
    type: "Villa",
    icon: <VillaIcon sx={sxIcon} />,
  },
  // {
  //   type: "Villa",
  //   icon: <VillaIcon sx={sxIcon} />,
  // },
  // {
  //   type: "Villa",
  //   icon: <VillaIcon sx={sxIcon} />,
  // },
  // {
  //   type: "Villa",
  //   icon: <VillaIcon sx={sxIcon} />,
  // },
  // {
  //   type: "Villa",
  //   icon: <VillaIcon sx={sxIcon} />,
  // },
  // {
  //   type: "Villa",
  //   icon: <VillaIcon sx={sxIcon} />,
  // },
];
// Data for Choose Stars
export const propertyStarsData = [1, 2, 3, 4, 5];
// Data for EachPage
type PageContentType = {
  page: number;
  content: JSX.Element;
};
export const pageContent: PageContentType[] = [
  { page: 1, content: <ChooseProperty /> },
  { page: 2, content: <PickLocation /> },
  { page: 3, content: <ChooseStar /> },
  { page: 4, content: <CreateName /> },
];
