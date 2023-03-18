"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        return (<react_router_dom_1.Link to={link} className={`button-link ${classProps}`} style={styleProps}>
        {children}
      </react_router_dom_1.Link>);
    }
    return (<button onClick={onClick} className={classProps} style={styleProps}>
      {children}
    </button>);
};
exports.default = ThemeButton;
