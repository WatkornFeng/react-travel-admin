import { Box } from "@mui/material";
import { styled } from "@mui/system";

import NavigatePageBtn from "../../../components/NavigatePageBtn";
import CreatePropertyBtn from "./CreatePropertyBtn";
import NavigateBtnBack from "./NavigateBtnBack";
import NavigateBtnNext from "./NavigateBtnNext";
import { pageContent } from "../data";

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
        <CreatePropertyBtn />
      ) : (
        <NavigateBtnNext setPage={setPage} page={page} />
      )}
    </StyledNavigateTab>
  );
}

export default NavigateTab;
