import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PlaceIcon from "@mui/icons-material/Place";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";
import { SELECT_LOCATION } from "../../../context/constant";

const StyledLists = styled(Stack)(({ theme }) => ({
  borderSpacing: 1,
  "&:hover": {
    backgroundColor: `${theme.palette.primary.main}`,
    cursor: "pointer",
  },
}));
interface IProps {
  setIsDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  locationText: string;
  lat: string;
  lon: string;
  address: {
    state: string;
    country_code: string;
  };
}
function ListLocation({
  locationText,
  lat,
  lon,
  address: { state, country_code },
  setIsDropDown,
}: IProps) {
  const { dispatch } = useBecomeHost() as IBecomeHostContext;

  const handleOnClick = () => {
    dispatch({
      type: SELECT_LOCATION,
      payload: {
        latlng: { lat: parseFloat(lat), lng: parseFloat(lon) },
        province: state,
        countryCode: country_code,
        locationStr: locationText,
      },
    });
    setIsDropDown(false);
  };
  return (
    <StyledLists direction="row" spacing={1} onClick={handleOnClick}>
      <PlaceIcon
        color="error"
        sx={{
          fontSize: "1rem",
        }}
      />
      <Typography
        sx={{
          fontSize: "0.8rem",
          color: "black",
          "&:hover": {
            color: "primary.constrast",
          },
        }}
      >
        {locationText}
      </Typography>
    </StyledLists>
  );
}

export default ListLocation;
