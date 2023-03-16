interface Props extends BoxProps {
  value: string;
  placeholder?: string;
  outline?: boolean;
  color?: ThemeColor;
  shadow?: boolean;
  fill?: boolean;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}

const ThemeTextarea = ({
  value,
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
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={classProps}
      style={styleProps}
      rows={rows || 5}
    />
  );
};

export default ThemeTextarea;
