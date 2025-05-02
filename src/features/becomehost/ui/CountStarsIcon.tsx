import GradeIcon from "@mui/icons-material/Grade";
function CountStarsIcon({ star, color }: { star: number; color: string }) {
  const newArray = Array.from({ length: star }, (_, index) => index + 1);

  return newArray.map((e) => (
    <GradeIcon
      key={e}
      sx={{
        fontSize: "1.2rem",
        color: color,
      }}
    />
  ));
}

export default CountStarsIcon;
