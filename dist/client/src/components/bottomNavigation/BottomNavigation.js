"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const BottomNavigation = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "wrapper-bottom" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "navigation-bottom" }, { children: children })) })));
};
exports.default = BottomNavigation;
