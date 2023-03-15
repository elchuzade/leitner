interface Props extends BoxProps {
  placeholder?: string;
  outline?: boolean;
  color?: ThemeColor;
  shadow?: boolean;
  fill?: boolean;
  rows?: number;
  onChange?: () => void;
  className?: string;
  style?: {};
}

const ThemeTextarea = ({
  placeholder,
  outline,
  color,
  shadow,
  fill,
  rows,
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
    <textarea
      placeholder={placeholder}
      onChange={onChange}
      className={classProps}
      style={styleProps}
      rows={rows || 5}
    />
  );
};

export default ThemeTextarea;
