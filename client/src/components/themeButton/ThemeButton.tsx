import React from "react";

interface Props {
  text: String;
  outline?: boolean;
  color?: ThemeColor;
  shadow?: boolean;
}

const ThemeButton = ({ text, outline, color, shadow }: Props) => {
  const getButtonColor = (color?: ThemeColor) => {
    if (color?.includes("theme")) {
      return color.replace("theme", "button");
    }
    return color;
  };

  return (
    <div
      className={`button ${outline ? "button-outline" : ""} ${
        shadow ? "button-shadow" : ""
      } ${getButtonColor(color)}`}
    >
      {text}
    </div>
  );
};

export default ThemeButton;
