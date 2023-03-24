"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const cardQueries_1 = require("../../../queries/cardQueries");
const client_1 = require("@apollo/client");
const cardsUtils_1 = require("../../../utils/cardsUtils");
const ProjectItem = ({ project }) => {
    var _a;
    const [cards, setCards] = (0, react_1.useState)([]);
    const cardsRes = (0, client_1.useQuery)(cardQueries_1.GET_CARDS, {
        variables: { projectId: project.id },
    });
    (0, react_1.useEffect)(() => {
        var _a;
        setCards((_a = cardsRes === null || cardsRes === void 0 ? void 0 : cardsRes.data) === null || _a === void 0 ? void 0 : _a.cards);
    }, [cardsRes]);
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, Object.assign({ to: `/projects/${project === null || project === void 0 ? void 0 : project.id}`, className: "project-item" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "project-item-progress", style: {
                    width: `${((_a = (0, cardsUtils_1.filterCards)(cards, 5)) === null || _a === void 0 ? void 0 : _a.length) / (cards === null || cards === void 0 ? void 0 : cards.length) || 0}%`,
                } }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "project-item-title" }, { children: project === null || project === void 0 ? void 0 : project.title })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "project-item-cardscount" }, { children: cards === null || cards === void 0 ? void 0 : cards.length }))] })));
};
exports.default = ProjectItem;
