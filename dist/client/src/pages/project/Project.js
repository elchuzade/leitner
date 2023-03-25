"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_1 = require("react-router");
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const TopNavigation_1 = __importDefault(require("../../components/topNavigation/TopNavigation"));
const ProjectStage_1 = __importDefault(require("../../components/project/projectStage/ProjectStage"));
const BottomNavigation_1 = __importDefault(require("../../components/bottomNavigation/BottomNavigation"));
const cardQueries_1 = require("../../queries/cardQueries");
const projectQueries_1 = require("../../queries/projectQueries");
const client_1 = require("@apollo/client");
const cardsUtils_1 = require("../../utils/cardsUtils");
const BackButton_1 = __importDefault(require("../../components/topNavigation/BackButton"));
const Project = ({}) => {
    var _a, _b, _c, _d, _e, _f;
    let { projectId } = (0, react_router_1.useParams)();
    const [stage, setStage] = (0, react_1.useState)(0);
    const [cards, setCards] = (0, react_1.useState)([]);
    const [title, setTitle] = (0, react_1.useState)("");
    const [description, setDescription] = (0, react_1.useState)("");
    const projectRes = (0, client_1.useQuery)(projectQueries_1.GET_PROJECT, {
        variables: { projectId },
    });
    const cardsRes = (0, client_1.useQuery)(cardQueries_1.GET_CARDS, {
        variables: { projectId },
    });
    (0, react_1.useEffect)(() => {
        var _a, _b, _c, _d;
        setTitle(((_b = (_a = projectRes === null || projectRes === void 0 ? void 0 : projectRes.data) === null || _a === void 0 ? void 0 : _a.project) === null || _b === void 0 ? void 0 : _b.title) || "");
        setDescription(((_d = (_c = projectRes === null || projectRes === void 0 ? void 0 : projectRes.data) === null || _c === void 0 ? void 0 : _c.project) === null || _d === void 0 ? void 0 : _d.description) || "");
    }, [projectRes]);
    (0, react_1.useEffect)(() => {
        var _a;
        setCards((_a = cardsRes === null || cardsRes === void 0 ? void 0 : cardsRes.data) === null || _a === void 0 ? void 0 : _a.cards);
    }, [cardsRes]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "wrapper" }, { children: [(0, jsx_runtime_1.jsxs)(TopNavigation_1.default, { children: [(0, jsx_runtime_1.jsx)(BackButton_1.default, {}), (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: `/projects/${projectId}/cards`, small: true, color: "theme-green", shadow: true }, { children: "Show All Cards" }))] }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "wrapper-top-navigation" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "project" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "project-stages" }, { children: [(0, jsx_runtime_1.jsx)(ProjectStage_1.default, { onClick: () => setStage(1), selected: stage === 1, stage: 1, cardsCount: (_a = (0, cardsUtils_1.filterCards)(cards, 1)) === null || _a === void 0 ? void 0 : _a.length }), (0, jsx_runtime_1.jsx)(ProjectStage_1.default, { onClick: () => setStage(2), selected: stage === 2, stage: 2, cardsCount: (_b = (0, cardsUtils_1.filterCards)(cards, 2)) === null || _b === void 0 ? void 0 : _b.length }), (0, jsx_runtime_1.jsx)(ProjectStage_1.default, { onClick: () => setStage(3), selected: stage === 3, stage: 3, cardsCount: (_c = (0, cardsUtils_1.filterCards)(cards, 3)) === null || _c === void 0 ? void 0 : _c.length }), (0, jsx_runtime_1.jsx)(ProjectStage_1.default, { onClick: () => setStage(4), selected: stage === 4, stage: 4, cardsCount: (_d = (0, cardsUtils_1.filterCards)(cards, 4)) === null || _d === void 0 ? void 0 : _d.length }), (0, jsx_runtime_1.jsx)(ProjectStage_1.default, { onClick: () => setStage(5), selected: stage === 5, stage: 5, cardsCount: (_e = (0, cardsUtils_1.filterCards)(cards, 5)) === null || _e === void 0 ? void 0 : _e.length }), (0, jsx_runtime_1.jsx)(ProjectStage_1.default, { onClick: () => setStage(6), selected: stage === 6, stage: 6, cardsCount: (_f = (0, cardsUtils_1.filterCards)(cards, 6)) === null || _f === void 0 ? void 0 : _f.length })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "project-info" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "project-info-title" }, { children: title })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "project-info-description" }, { children: description })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "project-info-footer" }, { children: [(0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: `/project/${projectId}`, small: true, color: "theme-dark", style: { marginRight: "8px" } }, { children: "Edit" })), (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ small: true, color: "theme-red" }, { children: "Delete" }))] }))] }))] })) })), (0, jsx_runtime_1.jsx)(BottomNavigation_1.default, { children: (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ disabled: stage === 0, link: `/projects/${projectId}/practice/${stage}`, color: "theme-blue", shadow: true, fill: true }, { children: stage === 0 ? "Select a Stage Above" : `Practice stage ${stage}` })) })] })));
};
exports.default = Project;
