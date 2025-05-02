import ChooseAmenities from "./ChooseAmenities";
import ChooseDetail from "./ChooseDetail";
import ChoosePictures from "./ChoosePictures";
import ChoosePrices from "./ChoosePrices";
import ChooseProperty from "./ChooseProperty";
import ChooseStar from "./ChooseStar";
import CreateDescription from "./CreateDescription";
import CreateName from "./CreateName";
import PickLocation from "./PickLocation";
import ReviewProperty from "./ReviewProperty";

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
  { page: 9, content: <ChooseDetail /> },
  { page: 10, content: <ReviewProperty /> },
];
