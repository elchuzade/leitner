"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ThemeInput = ({ value, type, placeholder, outline, color, shadow, fill, onChange, className, style, }) => {
    const getInputColor = (color) => {
        if (color === null || color === void 0 ? void 0 : color.includes("theme")) {
            return color.replace("theme", "input");
        }
        return color;
    };
    const classProps = `input ${outline ? "input-outline" : ""} ${shadow ? "input-shadow" : ""} ${getInputColor(color) || ""} ${className || ""}`;
    const styleProps = Object.assign({ width: fill ? "100%" : "auto" }, style);
    return (<input value={value} type={type} placeholder={placeholder} onChange={onChange} className={classProps} style={styleProps}/>);
};
exports.default = ThemeInput;
