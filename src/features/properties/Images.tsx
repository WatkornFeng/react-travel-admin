import { Stack } from "@mui/material";
interface IObjectImg {
  cloudinary_id: string;
  url: string;
}

interface IProps {
  urls: IObjectImg[];
}
function Images({ urls }: IProps) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: "350px",
        maskImage: "linear-gradient(to right, black 90%, transparent 100%)",
      }}
    >
      {urls.map((url, index) => (
        <img
          src={url.url}
          key={index}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      ))}
    </Stack>
  );
}

export default Images;
