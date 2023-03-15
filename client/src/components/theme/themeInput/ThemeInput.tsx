interface Props extends BoxProps {
  type: string;
  placeholder?: string;
  outline?: boolean;
  color?: ThemeColor;
  shadow?: boolean;
  fill?: boolean;
  onChange?: () => void;
  className?: string;
  style?: {};
}

const ThemeInput = ({
  type,
  placeholder,
  outline,
  color,
  shadow,
  fill,
  onChange,
  className,
  style,
}: Props) => {
  const getInputColor = (color?: ThemeColor) => {
    if (color?.includes("theme")) {
      return color.replace("theme", "input");
    }
    return color;
  };

  const classProps = `input ${outline ? "input-outline" : ""} ${
    shadow ? "input-shadow" : ""
  } ${getInputColor(color) || ""} ${className || ""}`;

  const styleProps = {
    width: fill ? "100%" : "auto",
    ...style,
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={classProps}
      style={styleProps}
    />
  );
};

export default ThemeInput;
