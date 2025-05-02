import { Box, IconButton, Typography } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";

interface IProps {
  dispatchType: string;
  listname: string;
  state: number;
  maxValue: number;
  minValue: number;
}

function DetailList({
  dispatchType,
  state,
  listname,
  maxValue,
  minValue,
}: IProps) {
  const { dispatch } = useBecomeHost() as IBecomeHostContext;
  const handleIncrease = () => {
    dispatch({ type: dispatchType, payload: state + 1 });
  };
  const handleDecrease = () => {
    dispatch({ type: dispatchType, payload: state - 1 });
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "70%",
      }}
    >
      <Typography color="black">{listname}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton
          sx={{
            color: "primary.main",
            "&.Mui-disabled": {
              color: "#e6e6e6",
            },
            "&:hover": {
              backgroundColor: "#e6e6e6",
            },
          }}
          onClick={handleDecrease}
          disabled={state === minValue}
        >
          <RemoveCircleIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "32px",
          }}
        >
          <Typography color="black">{state}</Typography>
        </Box>
        <IconButton
          sx={{
            color: "primary.main",
            "&.Mui-disabled": {
              color: "#e6e6e6",
            },
            "&:hover": {
              backgroundColor: "#e6e6e6",
            },
          }}
          onClick={handleIncrease}
          disabled={state === maxValue}
        >
          <AddCircleIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default DetailList;
