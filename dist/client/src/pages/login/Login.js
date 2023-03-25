"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_1 = require("react-router");
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const ThemeInput_1 = __importDefault(require("../../components/theme/themeInput/ThemeInput"));
const TopNavigation_1 = __importDefault(require("../../components/topNavigation/TopNavigation"));
const ThemeTitle_1 = __importDefault(require("../../components/theme/themeTitle/ThemeTitle"));
const BottomNavigation_1 = __importDefault(require("../../components/bottomNavigation/BottomNavigation"));
const LeitnerIcon_1 = require("../../components/leitnerIcon/LeitnerIcon");
const client_1 = require("@apollo/client");
const authMutations_1 = require("../../mutations/authMutations");
const BackButton_1 = __importDefault(require("../../components/topNavigation/BackButton"));
const Login = () => {
    const navigate = (0, react_router_1.useNavigate)();
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [signin] = (0, client_1.useMutation)(authMutations_1.SIGNIN, {
        variables: { email, password },
    });
    const onSignin = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        if (email && password) {
            const res = yield signin();
            if ((_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.signin) === null || _b === void 0 ? void 0 : _b.token) {
                localStorage.setItem("token", (_d = (_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.signin) === null || _d === void 0 ? void 0 : _d.token);
                navigate("/me");
            }
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "wrapper wrapper-flex" }, { children: [(0, jsx_runtime_1.jsxs)(TopNavigation_1.default, { children: [(0, jsx_runtime_1.jsx)(BackButton_1.default, {}), (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: "/", style: { padding: 0 } }, { children: (0, jsx_runtime_1.jsx)(LeitnerIcon_1.LeitnerIcon, { width: 32, height: 40 }) }))] }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "wrapper-top-navigation" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "login" }, { children: [(0, jsx_runtime_1.jsx)(ThemeTitle_1.default, { children: "Login" }), (0, jsx_runtime_1.jsx)(ThemeInput_1.default, { value: email, onChange: (e) => setEmail(e.target.value), type: "email", placeholder: "email", color: "theme-white", shadow: true, fill: true, style: { marginBottom: "16px" } }), (0, jsx_runtime_1.jsx)(ThemeInput_1.default, { value: password, onChange: (e) => setPassword(e.target.value), type: "password", placeholder: "password", color: "theme-white", shadow: true, fill: true, style: { marginBottom: "16px" } })] })) })), (0, jsx_runtime_1.jsx)(BottomNavigation_1.default, { children: (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ onClick: onSignin, color: "theme-blue", shadow: true, fill: true }, { children: "Login" })) })] })));
};
exports.default = Login;
