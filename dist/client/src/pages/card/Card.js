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
const Card = ({}) => {
    let { projectId, cardId } = (0, react_router_1.useParams)();
    const [card, setCard] = (0, react_1.useState)({
        title: "Parkieren",
        hint: "For cards",
        description: "When you stop the car somewhere, the action that you perfom",
        answer: "To park",
    });
    (0, react_1.useEffect)(() => {
        console.log(projectId, cardId);
    }, [projectId, cardId]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "wrapper" }, { children: [(0, jsx_runtime_1.jsxs)(TopNavigation_1.default, { children: [(0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: `/projects/${projectId}`, small: true, color: "theme-light", shadow: true, icon: true, style: { marginRight: "auto" } }, { children: (0, jsx_runtime_1.jsx)(io5_1.IoChevronBackOutline, {}) })), (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: `/projects/${projectId}/cards/${cardId}`, small: true, color: "theme-light", icon: true, shadow: true }, { children: (0, jsx_runtime_1.jsx)(hi_1.HiOutlinePencil, {}) }))] }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "wrapper-top-navigation" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-sections" }, { children: [(0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "title", card: card }), (0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "hint", card: card }), (0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "description", card: card }), (0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "answer", card: card })] })) }))] })));
};
exports.default = Card;
