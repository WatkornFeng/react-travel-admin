import { Box, LinearProgress } from "@mui/material";

import { styled } from "@mui/system";
import NavigatePageBtn from "../../../components/NavigatePageBtn";
import { pageContent } from "../data";

import NavigateBtnNext from "./NavigateBtnNext";
import NavigateBtnBack from "./NavigateBtnBack";

interface IProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}
const StyledNavigateTab = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  width: "62%",
  height: "120px",
  backgroundColor: "white",
  maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
  position: "fixed",
  padding: "1rem",
  bottom: 0,
  zIndex: 9999,
});

function NavigateTab({ setPage, page }: IProps) {
  return (
    <StyledNavigateTab>
      {page <= 1 ? (
        <NavigatePageBtn text="Back to Dashboard" path="/dashboard" />
      ) : (
        <NavigateBtnBack setPage={setPage} />
      )}
      {page >= pageContent.length ? (
        <NavigatePageBtn text="Public" path="#" />
      ) : (
        <NavigateBtnNext setPage={setPage} page={page} />
      )}
    </StyledNavigateTab>
  );
}

export default NavigateTab;
