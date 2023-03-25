"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const io5_1 = require("react-icons/io5");
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const BackButton = ({}) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const goBack = () => {
        navigate(-1);
    };
    return ((0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ onClick: goBack, small: true, color: "theme-light", shadow: true, icon: true, style: { marginRight: "auto" } }, { children: (0, jsx_runtime_1.jsx)(io5_1.IoChevronBackOutline, {}) })));
};
exports.default = BackButton;
