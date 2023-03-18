"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const ProjectItem = ({ project }) => {
    return (<react_router_dom_1.Link to={`/projects/${project.id}`} className="project-item">
      <div className="project-item-progress" style={{ width: `${100 / project.cards.length}%` }}/>
      <div className="project-item-title">{project.title}</div>
      <div className="project-item-cardscount">{project.cards.length}</div>
    </react_router_dom_1.Link>);
};
exports.default = ProjectItem;
