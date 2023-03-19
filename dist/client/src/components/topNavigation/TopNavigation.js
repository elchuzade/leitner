"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const TopNavigation = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "wrapper-top" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "navigation-top" }, { children: children })) })));
};
exports.default = TopNavigation;
