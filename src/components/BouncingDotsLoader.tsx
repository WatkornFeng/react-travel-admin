import "../components/styles.css";

interface IProps {
  size: "small" | "large";
}

function BouncingDotsLoader({ size }: IProps) {
  const cssClass =
    size === "small" ? "bouncing-loader-sm" : "bouncing-loader-large";

  return (
    <div className={cssClass}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default BouncingDotsLoader;
