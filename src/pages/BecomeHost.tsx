import { useState } from "react";
import { Box, styled, Stack, Fade } from "@mui/material";
import Logo from "../components/Logo";
import WelcomeText from "../features/becomehost/ui/WelcomeText";
import NavigateTab from "../features/becomehost/ui/NavigateTab";
import { pageContent } from "../features/becomehost/data";

const StyleLayout = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  minHeight: "100vh",
  maxWidth: "100vw",
  background: theme.palette.primary.main,
}));
const StyledForm = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: "2rem",
  paddingBottom: "5rem",
  backgroundColor: "white",
}));
const StyledSideBar = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "84px 64px",
}));

function BecomeHost() {
  const [page, setPage] = useState<number>(7);

  const PageContent = () => {
    const content = pageContent.map((e, index) => {
      return (
        <Fade in timeout={1500} key={index}>
          <Box>{e.page === page && e.content}</Box>
        </Fade>
      );
    });

    return content;
  };

  return (
    <StyleLayout>
      <StyledSideBar>
        <Box
          position="fixed"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "100px",
          }}
        >
          <Logo />
          <Fade in timeout={1500}>
            <div>
              <WelcomeText />
            </div>
          </Fade>
        </Box>
      </StyledSideBar>

      <StyledForm>
        <Box sx={{ paddingInline: "6rem" }}>
          <PageContent />
        </Box>
        <NavigateTab setPage={setPage} page={page} />
      </StyledForm>
    </StyleLayout>
  );
}

export default BecomeHost;
