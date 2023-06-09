import { Link } from "react-router-dom";

interface Props extends BoxProps {
  small?: boolean;
  children: string | React.ReactNode | React.ReactNode[];
  outline?: boolean;
  color?: ThemeColor;
  shadow?: boolean;
  fill?: boolean;
  link?: string;
  icon?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const ThemeButton = ({
  small,
  children,
  outline,
  color,
  shadow,
  fill,
  link,
  icon,
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
  } ${small ? "button-small" : ""} ${getButtonColor(color) || ""} ${
    icon ? "button-icon" : ""
  } ${className || ""}`;

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
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classProps} style={styleProps}>
      {children}
    </button>
  );
};

export default ThemeButton;
