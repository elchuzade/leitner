"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ProjectStage = ({ stage, cardsCount }) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: `project-stage project-stage-shadow project-stage-light ${stage === 5 ? "project-stage-yellow" : ""} ${stage === 6 ? "project-stage-green" : ""}` }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "project-stage-title" }, { children: stage })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "project-stage-cardscount" }, { children: cardsCount }))] })));
};
exports.default = ProjectStage;
