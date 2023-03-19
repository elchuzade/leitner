"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_1 = require("react-router");
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const ThemeInput_1 = __importDefault(require("../../components/theme/themeInput/ThemeInput"));
const ThemeTextarea_1 = __importDefault(require("../../components/theme/themeTextarea/ThemeTextarea"));
const TopNavigation_1 = __importDefault(require("../../components/topNavigation/TopNavigation"));
const ThemeTitle_1 = __importDefault(require("../../components/theme/themeTitle/ThemeTitle"));
const BottomNavigation_1 = __importDefault(require("../../components/bottomNavigation/BottomNavigation"));
const io5_1 = require("react-icons/io5");
const NewCard = ({}) => {
    const { projectId, cardId } = (0, react_router_1.useParams)();
    const [title, setTitle] = (0, react_1.useState)("");
    const [hint, setHint] = (0, react_1.useState)("");
    const [description, setDescription] = (0, react_1.useState)("");
    const [answer, setAnswer] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        console.log(projectId, cardId);
    }, [projectId, cardId]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "wrapper wrapper-flex" }, { children: [(0, jsx_runtime_1.jsx)(TopNavigation_1.default, { children: (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: `/projects/${projectId}/cards`, small: true, color: "theme-light", shadow: true, icon: true, style: { marginRight: "auto" } }, { children: (0, jsx_runtime_1.jsx)(io5_1.IoChevronBackOutline, {}) })) }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "wrapper-top-navigation" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "card" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-new" }, { children: [(0, jsx_runtime_1.jsxs)(ThemeTitle_1.default, { children: [cardId ? "Edit" : "Add", " Card"] }), (0, jsx_runtime_1.jsx)(ThemeInput_1.default, { value: title, onChange: (e) => setTitle(e.target.value), type: "title", placeholder: "title", color: "theme-white", shadow: true, fill: true, style: { marginBottom: "16px" } }), (0, jsx_runtime_1.jsx)(ThemeInput_1.default, { value: hint, onChange: (e) => setHint(e.target.value), type: "hint", placeholder: "hint", color: "theme-white", shadow: true, fill: true, style: { marginBottom: "16px" } }), (0, jsx_runtime_1.jsx)(ThemeTextarea_1.default, { value: description, rows: 6, onChange: (e) => setDescription(e.target.value), placeholder: "description", color: "theme-white", shadow: true, fill: true, style: { marginBottom: "12px" } }), (0, jsx_runtime_1.jsx)(ThemeInput_1.default, { value: answer, onChange: (e) => setAnswer(e.target.value), type: "answer", placeholder: "answer", color: "theme-white", shadow: true, fill: true, style: { marginBottom: "16px" } })] })) })) })), (0, jsx_runtime_1.jsx)(BottomNavigation_1.default, { children: (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ onClick: () => { }, color: "theme-blue", shadow: true, fill: true }, { children: "Save" })) })] })));
};
exports.default = NewCard;
