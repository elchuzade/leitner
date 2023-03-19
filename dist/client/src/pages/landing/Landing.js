"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const LeitnerLogo_1 = require("../../components/leitnerLogo/LeitnerLogo");
const BottomNavigation_1 = __importDefault(require("../../components/bottomNavigation/BottomNavigation"));
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const Signature_1 = __importDefault(require("../../components/signature/Signature"));
const Landing = () => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "wrapper" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "landing" }, { children: [(0, jsx_runtime_1.jsx)(LeitnerLogo_1.LeitnerLogo, {}), (0, jsx_runtime_1.jsx)(Signature_1.default, {}), (0, jsx_runtime_1.jsxs)(BottomNavigation_1.default, { children: [(0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: "/login", color: "theme-white", shadow: true, fill: true, style: { marginRight: "8px" } }, { children: "Login" })), (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: "/register", color: "theme-blue", shadow: true, fill: true, style: { marginLeft: "8px" } }, { children: "Register" }))] })] })) })));
};
exports.default = Landing;
