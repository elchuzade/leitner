"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const CardItem = ({ project, card }) => {
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, Object.assign({ to: `/projects/${project.id}/cards/${card.id}`, className: "card-item" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "card-item-title" }, { children: card.title })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-item-stage" }, { children: ["stage ", card.stage] }))] })));
};
exports.default = CardItem;
