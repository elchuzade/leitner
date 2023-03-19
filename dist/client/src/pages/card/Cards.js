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
const ThemeTitle_1 = __importDefault(require("../../components/theme/themeTitle/ThemeTitle"));
const ThemeInput_1 = __importDefault(require("../../components/theme/themeInput/ThemeInput"));
const CardItem_1 = __importDefault(require("../../components/card/cardItem/CardItem"));
const ai_1 = require("react-icons/ai");
const io5_1 = require("react-icons/io5");
const cardQueries_1 = require("../../queries/cardQueries");
const client_1 = require("@apollo/client");
const cardsUtils_1 = require("../../utils/cardsUtils");
const Cards = ({}) => {
    let { projectId } = (0, react_router_1.useParams)();
    const [searchCardText, setSearchCardText] = (0, react_1.useState)("");
    const [cards, setCards] = (0, react_1.useState)([]);
    const [showCards, setShowCards] = (0, react_1.useState)([
        true,
        true,
        true,
        true,
        true,
        true,
    ]);
    const cardsRes = (0, client_1.useQuery)(cardQueries_1.GET_CARDS, {
        variables: { projectId },
    });
    (0, react_1.useEffect)(() => {
        var _a;
        setCards(((_a = cardsRes === null || cardsRes === void 0 ? void 0 : cardsRes.data) === null || _a === void 0 ? void 0 : _a.cards) || []);
    }, [cardsRes]);
    const FlipShowStageCards = (stage) => {
        let modifiedShowCards = [...showCards];
        modifiedShowCards[stage - 1] = !modifiedShowCards[stage - 1];
        setShowCards(modifiedShowCards);
    };
    const RenderCardsStage = (stage) => {
        const filteredCards = (0, cardsUtils_1.filterCards)(cards, stage);
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cards-stage" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cards-stage-header" }, { children: [(0, jsx_runtime_1.jsxs)(ThemeTitle_1.default, Object.assign({ style: {
                                fontSize: "20px",
                                paddingTop: "8px",
                                paddingBottom: "8px",
                            } }, { children: ["Stage ", stage] })), (filteredCards === null || filteredCards === void 0 ? void 0 : filteredCards.length) > 0 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [" ", (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
                                        color: "grey",
                                        width: "120px",
                                        textAlign: "right",
                                        marginRight: "8px",
                                    } }, { children: [filteredCards === null || filteredCards === void 0 ? void 0 : filteredCards.length, " ", (filteredCards === null || filteredCards === void 0 ? void 0 : filteredCards.length) === 1 ? "card" : "cards"] })), (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ shadow: true, small: true, icon: true, color: "theme-light", onClick: () => FlipShowStageCards(stage) }, { children: showCards[stage - 1] ? ((0, jsx_runtime_1.jsx)(ai_1.AiOutlineEyeInvisible, {})) : ((0, jsx_runtime_1.jsx)(ai_1.AiOutlineEye, {})) }))] }))] })), showCards[stage - 1] && (filteredCards === null || filteredCards === void 0 ? void 0 : filteredCards.length) > 0 && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "cards-stage-cards" }, { children: filteredCards === null || filteredCards === void 0 ? void 0 : filteredCards.map((card) => ((0, jsx_runtime_1.jsx)(CardItem_1.default, { project: { id: projectId }, card: card }, card.id))) })))] })));
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "wrapper" }, { children: [(0, jsx_runtime_1.jsxs)(TopNavigation_1.default, { children: [(0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: `/projects/${projectId}`, small: true, color: "theme-light", shadow: true, icon: true, style: { marginRight: "auto" } }, { children: (0, jsx_runtime_1.jsx)(io5_1.IoChevronBackOutline, {}) })), (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: `/projects/${projectId}/card`, small: true, color: "theme-green", shadow: true }, { children: "+ Add Card" }))] }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "wrapper-top-navigation" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cards" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cards-search" }, { children: [(0, jsx_runtime_1.jsx)(ThemeTitle_1.default, Object.assign({ tail: cards === null || cards === void 0 ? void 0 : cards.length }, { children: "Project Cards" })), (0, jsx_runtime_1.jsx)(ThemeInput_1.default, { value: searchCardText, onChange: (e) => setSearchCardText(e.target.value), type: "cards", placeholder: "search cards", color: "theme-white", shadow: true, fill: true, style: { marginBottom: "16px" } })] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "cards-stages" }, { children: RenderCardsStage(1) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "cards-stages" }, { children: RenderCardsStage(2) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "cards-stages" }, { children: RenderCardsStage(3) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "cards-stages" }, { children: RenderCardsStage(4) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "cards-stages" }, { children: RenderCardsStage(5) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "cards-stages" }, { children: RenderCardsStage(6) }))] })) }))] })));
};
exports.default = Cards;
