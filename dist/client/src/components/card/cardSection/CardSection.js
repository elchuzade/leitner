"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CardSection = ({ section, card, hover, show }) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: `card-section ${hover ? "card-section-hover" : ""}` }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "card-section-title" }, { children: section.toUpperCase() })), show && (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "card-section-content" }, { children: card[section] }))] })));
};
exports.default = CardSection;
