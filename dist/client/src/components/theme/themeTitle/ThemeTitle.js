"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ThemeTitle = ({ children, textAlign = "left", tail, style }) => {
    return ((0, jsx_runtime_1.jsxs)("h3", Object.assign({ className: "title", style: Object.assign({ textAlign: textAlign }, style) }, { children: [children, (0, jsx_runtime_1.jsx)("span", Object.assign({ style: { marginLeft: "auto" } }, { children: tail }))] })));
};
exports.default = ThemeTitle;
