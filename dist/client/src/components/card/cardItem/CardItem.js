"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const CardItem = ({ project, card }) => {
    return (<react_router_dom_1.Link to={`/projects/${project.id}/cards/${card.id}`} className="card-item">
      <div className="card-item-title">{card.title}</div>
      <div className="card-item-stage">stage {card.stage}</div>
    </react_router_dom_1.Link>);
};
exports.default = CardItem;
