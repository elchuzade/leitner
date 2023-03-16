interface Props extends BoxProps {
  value: string;
  type: string;
  placeholder?: string;
  outline?: boolean;
  color?: ThemeColor;
  shadow?: boolean;
  fill?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}

const ThemeInput = ({
  value,
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
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={classProps}
      style={styleProps}
    />
  );
};

export default ThemeInput;
