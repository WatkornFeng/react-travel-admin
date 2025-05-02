import AddIcon from "@mui/icons-material/Add";
import { Button, Stack, Typography } from "@mui/material";

import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";
import { SELECT_PICTURES } from "../../../context/constant";
function BtnSelectImage() {
  const { dispatch } = useBecomeHost() as IBecomeHostContext;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files as FileList);
    if (!files || files.length === 0) return;
    dispatch({ type: SELECT_PICTURES, payload: files });
  };
  return (
    <>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="image-file-input"
      />
      <label htmlFor="image-file-input">
        <Button
          component="span"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            border: "1px dashed black",
            height: "500px",
            color: "#cccccc",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#f2f2f2",
            },
          }}
        >
          <Stack spacing={2} direction="row">
            <AddIcon />
            <Typography fontSize="1rem">Add Images</Typography>
          </Stack>
          <Typography
            sx={{
              color: "black",
              fontSize: "1rem",
              textDecorationLine: "underline",
            }}
          >
            Upload from your device
          </Typography>
        </Button>
      </label>
    </>
  );
}
export default BtnSelectImage;
