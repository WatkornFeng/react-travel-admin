import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../../context/BecomeHostContext";
import { SELECT_PICTURES } from "../../../context/constant";
function BtnAddImage() {
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
            height: "300px",
            width: "400px",
            borderRadius: "20px",
            border: "1px solid black",
            color: "#cccccc",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#f2f2f2",
            },
          }}
        >
          <AddIcon />
          <Typography fontSize="1rem">Add Images</Typography>
        </Button>
      </label>
    </>
  );
}

export default BtnAddImage;
