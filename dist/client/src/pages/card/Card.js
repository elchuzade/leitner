"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_1 = require("react-router");
const TopNavigation_1 = __importDefault(require("../../components/topNavigation/TopNavigation"));
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const hi_1 = require("react-icons/hi");
const CardSection_1 = __importDefault(require("../../components/card/cardSection/CardSection"));
const client_1 = require("@apollo/client");
const cardQueries_1 = require("../../queries/cardQueries");
const BackButton_1 = __importDefault(require("../../components/topNavigation/BackButton"));
const Card = ({}) => {
    let { projectId, cardId } = (0, react_router_1.useParams)();
    const [card, setCard] = (0, react_1.useState)();
    const cardRes = (0, client_1.useQuery)(cardQueries_1.GET_CARD, {
        variables: { cardId },
    });
    (0, react_1.useEffect)(() => {
        var _a;
        setCard((_a = cardRes === null || cardRes === void 0 ? void 0 : cardRes.data) === null || _a === void 0 ? void 0 : _a.card);
    }, [cardRes]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "wrapper" }, { children: [(0, jsx_runtime_1.jsxs)(TopNavigation_1.default, { children: [(0, jsx_runtime_1.jsx)(BackButton_1.default, {}), (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: `/projects/${projectId}/card/${cardId}`, small: true, color: "theme-light", icon: true, shadow: true }, { children: (0, jsx_runtime_1.jsx)(hi_1.HiOutlinePencil, {}) }))] }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "wrapper-top-navigation" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-sections" }, { children: [card && (0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "title", card: card, show: true }), card && (0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "hint", card: card, show: true }), card && (0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "description", card: card, show: true }), card && (0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "answer", card: card, show: true })] })) }))] })));
};
exports.default = Card;
