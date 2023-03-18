"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProjectStage = ({ stage, cardsCount }) => {
    return (<div className={`project-stage project-stage-shadow project-stage-light ${stage === 5 ? "project-stage-yellow" : ""} ${stage === 6 ? "project-stage-green" : ""}`}>
      <div className="project-stage-title">{stage}</div>
      <div className="project-stage-cardscount">{cardsCount}</div>
    </div>);
};
exports.default = ProjectStage;
