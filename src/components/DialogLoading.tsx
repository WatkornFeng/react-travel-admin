import { Dialog, DialogContent, Stack, Typography } from "@mui/material";
import BouncingDotsLoader from "./BouncingDotsLoader";

interface IProps {
  text: string;
}

function DialogLoading({ text }: IProps) {
  return (
    <Dialog
      maxWidth="lg"
      open={true}
      sx={{
        zIndex: 9999,
      }}
    >
      <DialogContent>
        <Stack
          spacing={4}
          sx={{
            padding: "20px",
          }}
        >
          <Typography fontWeight="bold">{text}</Typography>
          <BouncingDotsLoader size="large" />
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default DialogLoading;
