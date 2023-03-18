"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LeitnerLogo_1 = require("../../components/leitnerLogo/LeitnerLogo");
const BottomNavigation_1 = __importDefault(require("../../components/bottomNavigation/BottomNavigation"));
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const Signature_1 = __importDefault(require("../../components/signature/Signature"));
const Landing = () => {
    return (<div className="wrapper">
      <div className="landing">
        <LeitnerLogo_1.LeitnerLogo />
        <Signature_1.default />
        <BottomNavigation_1.default>
          <ThemeButton_1.default link="/login" outline color="theme-white" shadow fill style={{ marginRight: "8px" }}>
            Login
          </ThemeButton_1.default>
          <ThemeButton_1.default link="/register" color="theme-blue" shadow fill style={{ marginLeft: "8px" }}>
            Register
          </ThemeButton_1.default>
        </BottomNavigation_1.default>
      </div>
    </div>);
};
exports.default = Landing;
