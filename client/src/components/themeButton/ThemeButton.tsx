import { Link } from "react-router-dom";

interface Props {
  text: String | React.ReactNode;
  outline?: boolean;
  color?: ThemeColor;
  shadow?: boolean;
  fill?: boolean;
  link?: string;
  onClick?: () => void;
  className?: string;
  style?: {};
}

const ThemeButton = ({
  text,
  outline,
  color,
  shadow,
  fill,
  link,
  onClick,
  className,
  style,
}: Props) => {
  const getButtonColor = (color?: ThemeColor) => {
    if (color?.includes("theme")) {
      return color.replace("theme", "button");
    }
    return color;
  };

  const classProps = `button ${outline ? "button-outline" : ""} ${
    shadow ? "button-shadow" : ""
  } ${getButtonColor(color) || ""} ${className || ""}`;

  const styleProps = {
    width: fill ? "100%" : "auto",
    ...style,
  };

  if (link) {
    return (
      <Link
        to={link}
        className={`button-link ${classProps}`}
        style={styleProps}
      >
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classProps} style={styleProps}>
      {text}
    </button>
  );
};

export default ThemeButton;
