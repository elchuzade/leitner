"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_1 = require("react-router");
const TopNavigation_1 = __importDefault(require("../../components/topNavigation/TopNavigation"));
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const io5_1 = require("react-icons/io5");
const hi_1 = require("react-icons/hi");
const CardSection_1 = __importDefault(require("../../components/card/cardSection/CardSection"));
const BottomNavigation_1 = __importDefault(require("../../components/bottomNavigation/BottomNavigation"));
const Practice = ({}) => {
    const { projectId, cardId } = (0, react_router_1.useParams)();
    const [card, setCard] = (0, react_1.useState)({
        title: "Parkieren",
        hint: "For cards",
        description: "When you stop the car somewhere, the action that you perfom",
        answer: "To park",
    });
    const [showLevel, setShowLevel] = (0, react_1.useState)(0); // 0 - title, 1 - hint, 2 - description, 3 - answer
    const onClickCard = (section, index) => {
        console.log(section, index);
        setShowLevel(index);
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "wrapper" }, { children: [(0, jsx_runtime_1.jsxs)(TopNavigation_1.default, { children: [(0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: `/projects/${projectId}`, small: true, color: "theme-light", shadow: true, icon: true, style: { marginRight: "auto" } }, { children: (0, jsx_runtime_1.jsx)(io5_1.IoChevronBackOutline, {}) })), (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: `/projects/${projectId}/card/${cardId}`, small: true, color: "theme-light", icon: true, shadow: true }, { children: (0, jsx_runtime_1.jsx)(hi_1.HiOutlinePencil, {}) }))] }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "wrapper-top-navigation" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-sections", style: { marginLeft: "40px", marginRight: "40px" } }, { children: [card.title && ((0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: () => onClickCard("title", 0) }, { children: (0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "title", card: card, hover: true, show: showLevel >= 0 }) }))), card.hint && ((0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: () => onClickCard("hint", 1) }, { children: (0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "hint", card: card, hover: true, show: showLevel >= 1 }) }))), card.description && ((0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: () => onClickCard("description", 2) }, { children: (0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "description", card: card, hover: true, show: showLevel >= 2 }) }))), card.answer && ((0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: () => onClickCard("answer", 3) }, { children: (0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "answer", card: card, hover: true, show: showLevel >= 3 }) })))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "practice-button-section" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "practice-button-wrapper practice-button-wrapper-left" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => console.log("left"), className: "practice-button" }, { children: (0, jsx_runtime_1.jsx)(io5_1.IoChevronBackOutline, {}) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "practice-button-wrapper practice-button-wrapper-right" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => console.log("right"), className: "practice-button" }, { children: (0, jsx_runtime_1.jsx)(io5_1.IoChevronForwardOutline, {}) })) }))] }))] })), (0, jsx_runtime_1.jsxs)(BottomNavigation_1.default, { children: [(0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ color: "theme-red", shadow: true, fill: true, style: { marginRight: "8px" } }, { children: "Wrong" })), (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ color: "theme-green", shadow: true, fill: true, style: { marginLeft: "8px" } }, { children: "Right" }))] })] })));
};
exports.default = Practice;
