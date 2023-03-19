"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const ThemeButton = ({ small, children, outline, color, shadow, fill, link, icon, onClick, className, style, }) => {
    const getButtonColor = (color) => {
        if (color === null || color === void 0 ? void 0 : color.includes("theme")) {
            return color.replace("theme", "button");
        }
        return color;
    };
    const classProps = `button ${outline ? "button-outline" : ""} ${shadow ? "button-shadow" : ""} ${small ? "button-small" : ""} ${getButtonColor(color) || ""} ${icon ? "button-icon" : ""} ${className || ""}`;
    const styleProps = Object.assign({ width: fill ? "100%" : "auto" }, style);
    if (link) {
        return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: link, className: `button-link ${classProps}`, style: styleProps }, { children: children })));
    }
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: onClick, className: classProps, style: styleProps }, { children: children })));
};
exports.default = ThemeButton;
