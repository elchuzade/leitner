"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ThemeTitle = ({ children, textAlign = "left", tail, style }) => {
    return (<h3 className="title" style={Object.assign({ textAlign: textAlign }, style)}>
      {children}
      <span style={{ marginLeft: "auto" }}>{tail}</span>
    </h3>);
};
exports.default = ThemeTitle;
