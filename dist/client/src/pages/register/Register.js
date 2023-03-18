"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const ThemeInput_1 = __importDefault(require("../../components/theme/themeInput/ThemeInput"));
const TopNavigation_1 = __importDefault(require("../../components/topNavigation/TopNavigation"));
const ThemeTitle_1 = __importDefault(require("../../components/theme/themeTitle/ThemeTitle"));
const BottomNavigation_1 = __importDefault(require("../../components/bottomNavigation/BottomNavigation"));
const LeitnerIcon_1 = require("../../components/leitnerIcon/LeitnerIcon");
const io5_1 = require("react-icons/io5");
const Register = () => {
    const [name, setName] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    return (<div className="wrapper wrapper-flex">
      <TopNavigation_1.default>
        <ThemeButton_1.default link="/" small color="theme-light" shadow icon style={{ marginRight: "auto" }}>
          <io5_1.IoChevronBackOutline />
        </ThemeButton_1.default>
        <ThemeButton_1.default link="/" style={{ padding: 0 }}>
          <LeitnerIcon_1.LeitnerIcon width={32} height={40}/>
        </ThemeButton_1.default>
      </TopNavigation_1.default>
      <div className="wrapper-top-navigation">
        <div className="register">
          <ThemeTitle_1.default>Register</ThemeTitle_1.default>
          <ThemeInput_1.default value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="name" color="theme-white" shadow fill style={{ marginBottom: "16px" }}/>
          <ThemeInput_1.default value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" color="theme-white" shadow fill style={{ marginBottom: "16px" }}/>
          <ThemeInput_1.default value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" color="theme-white" shadow fill style={{ marginBottom: "16px" }}/>
        </div>
      </div>
      <BottomNavigation_1.default>
        <ThemeButton_1.default onClick={() => { }} color="theme-blue" shadow fill>
          Register
        </ThemeButton_1.default>
      </BottomNavigation_1.default>
    </div>);
};
exports.default = Register;
