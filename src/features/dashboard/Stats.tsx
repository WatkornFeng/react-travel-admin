import { Stack } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LuggageIcon from "@mui/icons-material/Luggage";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/formatCurrency";

function Stats() {
  const sales = 100.4567;
  return (
    <Stack spacing={4} direction="row">
      <Stat
        icon={
          <LuggageIcon sx={{ color: "customRed.contrast" }} fontSize="large" />
        }
        title="Bookings"
        value={0}
        color="customRed.main"
      />
      <Stat
        icon={
          <LocalAtmIcon
            sx={{ color: "customGreen.contrast" }}
            fontSize="large"
          />
        }
        title="Sales"
        value={formatCurrency(sales)}
        color="customGreen.main"
      />
      <Stat
        icon={
          <ApartmentIcon
            sx={{ color: "customGold.contrast" }}
            fontSize="large"
          />
        }
        title="Properties"
        value={0}
        color="customGold.main"
      />
    </Stack>
  );
}

export default Stats;
