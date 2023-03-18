"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CardSection = ({ section, card, hover, show }) => {
    return (<div className={`card-section ${hover ? "card-section-hover" : ""}`}>
      <div className="card-section-title">{section.toUpperCase()}</div>
      {show && <div className="card-section-content">{card[section]}</div>}
    </div>);
};
exports.default = CardSection;
