import { useState } from "react";
import { styled } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import { Box, ClickAwayListener, Input, Stack } from "@mui/material";
import BouncingDotsLoader from "../../../components/BouncingDotsLoader";
import ErrorMessage from "../../../components/ErrorMessage";
import useDebounce from "../../../hooks/useDebounce";
import { searchLocation } from "../../../services/getLocation";
import ListLocation from "./ListLocation";
import MyLocation from "./MyLocation";

interface ILocationsRes {
  address: {
    state: string;
    country_code: string;
  };
  display_name: string;
  place_id: number;
  lat: string;
  lon: string;
}
const StyledInputBox = styled(Box)({
  position: "absolute",
  borderRadius: "10px",
  padding: "0.2rem",
  top: 10,
  right: "50%",
  transform: "translate(50%,0)",
  backgroundColor: "white",
  zIndex: 999,
  width: "20rem",
  border: "1px solid white",
  boxShadow: "10px 10px 103px 11px rgba(0,0,0,0.59)",
  overflowY: "auto",
});
const StyledInput = styled(Input)({
  width: "100%",
  backgroundColor: "white",
  fontSize: "0.8rem",
  color: "black",
});
function SearchLocationBox() {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const [isDropdown, setIsDropDown] = useState(false);

  const {
    isLoading,
    data: locations,
    error,
  } = useQuery({
    queryKey: [
      "searchLocation",
      debouncedSearchValue ? debouncedSearchValue : null,
    ],
    queryFn: () => searchLocation(debouncedSearchValue),
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const handleInputClick = () => {
    setIsDropDown(true);
  };
  const handleClickAway = () => {
    setIsDropDown(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <StyledInputBox>
        <StyledInput
          type="text"
          placeholder="Enter your location"
          onChange={handleInputChange}
          onClick={handleInputClick}
        />
        {error && (
          <ErrorMessage
            text="something went wrong, please try again"
            size="0.8rem"
          />
        )}
        {isLoading && <BouncingDotsLoader size="small" />}
        {(locations?.length === 0 || !locations || !searchValue) &&
          !isLoading &&
          isDropdown && <MyLocation />}
        {locations && isDropdown && (
          <Stack spacing={1} component="ul" maxHeight={"7rem"} mt={"0.8rem"}>
            {(locations as ILocationsRes[]).map(
              ({ display_name, place_id, address, lat, lon }) => (
                <ListLocation
                  key={place_id}
                  locationText={display_name}
                  address={address}
                  lat={lat}
                  lon={lon}
                  setIsDropDown={setIsDropDown}
                />
              )
            )}
          </Stack>
        )}
      </StyledInputBox>
    </ClickAwayListener>
  );
}

export default SearchLocationBox;
