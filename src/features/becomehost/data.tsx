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
import CreateDescription from "./CreateDescription";
import ChooseAmenities from "./ChooseAmenities";
import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import TvIcon from "@mui/icons-material/Tv";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import ElevatorIcon from "@mui/icons-material/Elevator";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PoolIcon from "@mui/icons-material/Pool";
import ChoosePictures from "./ChoosePictures";
import ReviewProperty from "./ReviewProperty";
import ChoosePrices from "./ChoosePrices";
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
];
// Data for Choose Amenities
interface IAmenitiesData {
  amenity: string;
  icon: JSX.Element;
}
export const amenitiesData: IAmenitiesData[] = [
  { amenity: "wifi", icon: <WifiIcon /> },
  { amenity: "tv", icon: <TvIcon /> },
  { amenity: "ac", icon: <AcUnitIcon /> },
  { amenity: "parking", icon: <LocalParkingIcon /> },
  { amenity: "elevator", icon: <ElevatorIcon /> },
  { amenity: "restaurant", icon: <RestaurantIcon /> },
  { amenity: "pool", icon: <PoolIcon /> },
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
  { page: 5, content: <CreateDescription /> },
  { page: 6, content: <ChooseAmenities /> },
  { page: 7, content: <ChoosePictures /> },
  { page: 8, content: <ChoosePrices /> },
  { page: 9, content: <ReviewProperty /> },
];
