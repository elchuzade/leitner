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
const io5_1 = require("react-icons/io5");
const hi_1 = require("react-icons/hi");
const CardSection_1 = __importDefault(require("../../components/card/cardSection/CardSection"));
const BottomNavigation_1 = __importDefault(require("../../components/bottomNavigation/BottomNavigation"));
const cardQueries_1 = require("../../queries/cardQueries");
const cardMutations_1 = require("../../mutations/cardMutations");
const client_1 = require("@apollo/client");
const cardsUtils_1 = require("../../utils/cardsUtils");
const BackButton_1 = __importDefault(require("../../components/topNavigation/BackButton"));
const Practice = ({}) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const { projectId, stage } = (0, react_router_1.useParams)();
    const [index, setIndex] = (0, react_1.useState)(0);
    const [cards, setCards] = (0, react_1.useState)([]);
    const [showLevel, setShowLevel] = (0, react_1.useState)(0); // 0 - title, 1 - hint, 2 - description, 3 - answer
    const cardsRes = (0, client_1.useQuery)(cardQueries_1.GET_CARDS, {
        variables: { projectId },
    });
    const [forwardCard, forwardCardRes] = (0, client_1.useMutation)(cardMutations_1.FORWARD_CARD, {
        variables: { cardId: (_a = cards[index]) === null || _a === void 0 ? void 0 : _a.id },
    });
    const [backwardCard, backwardCardRes] = (0, client_1.useMutation)(cardMutations_1.BACKWARD_CARD, {
        variables: { cardId: (_b = cards[index]) === null || _b === void 0 ? void 0 : _b.id },
    });
    (0, react_1.useEffect)(() => {
        var _a;
        let stageCards = (0, cardsUtils_1.filterCards)((_a = cardsRes === null || cardsRes === void 0 ? void 0 : cardsRes.data) === null || _a === void 0 ? void 0 : _a.cards, Number(stage)) || [];
        setCards(stageCards);
    }, [cardsRes, stage]);
    const onClickCard = (section, index) => {
        console.log(section, index);
        setShowLevel(index);
    };
    const getPrevWord = () => {
        if (index > 0) {
            setIndex(index - 1);
            console.log("prev");
            setShowLevel(0);
        }
    };
    const getNextWord = () => {
        if (index < cards.length - 1) {
            setIndex(index + 1);
            console.log("next");
            setShowLevel(0);
        }
    };
    const makeWordRight = () => {
        console.log(cards[index], index, "right");
        forwardCard();
    };
    const makeWordWrong = () => {
        console.log(cards[index], index, "wrong");
        backwardCard();
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "wrapper" }, { children: [(0, jsx_runtime_1.jsxs)(TopNavigation_1.default, { children: [(0, jsx_runtime_1.jsx)(BackButton_1.default, {}), (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: `/projects/${projectId}/card/${(_c = cards[index]) === null || _c === void 0 ? void 0 : _c.id}`, small: true, color: "theme-light", icon: true, shadow: true }, { children: (0, jsx_runtime_1.jsx)(hi_1.HiOutlinePencil, {}) }))] }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "wrapper-top-navigation" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-sections", style: { marginLeft: "40px", marginRight: "40px" } }, { children: [((_d = cards[index]) === null || _d === void 0 ? void 0 : _d.title) && ((0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: () => onClickCard("title", 0) }, { children: (0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "title", card: cards[index], hover: true, show: showLevel >= 0 }) }))), ((_e = cards[index]) === null || _e === void 0 ? void 0 : _e.hint) && ((0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: () => onClickCard("hint", 1) }, { children: (0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "hint", card: cards[index], hover: true, show: showLevel >= 1 }) }))), ((_f = cards[index]) === null || _f === void 0 ? void 0 : _f.description) && ((0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: () => onClickCard("description", 2) }, { children: (0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "description", card: cards[index], hover: true, show: showLevel >= 2 }) }))), ((_g = cards[index]) === null || _g === void 0 ? void 0 : _g.answer) && ((0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: () => onClickCard("answer", 3) }, { children: (0, jsx_runtime_1.jsx)(CardSection_1.default, { section: "answer", card: cards[index], hover: true, show: showLevel >= 3 }) })))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "practice-button-section" }, { children: [index > 0 && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "practice-button-wrapper practice-button-wrapper-left" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: getPrevWord, className: "practice-button" }, { children: (0, jsx_runtime_1.jsx)(io5_1.IoChevronBackOutline, {}) })) }))), index < cards.length - 1 && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "practice-button-wrapper practice-button-wrapper-right" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: getNextWord, className: "practice-button" }, { children: (0, jsx_runtime_1.jsx)(io5_1.IoChevronForwardOutline, {}) })) })))] }))] })), (0, jsx_runtime_1.jsxs)(BottomNavigation_1.default, { children: [(0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ color: "theme-red", shadow: true, fill: true, style: { marginRight: "8px" }, onClick: makeWordWrong }, { children: "Wrong" })), (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ color: "theme-green", shadow: true, fill: true, style: { marginLeft: "8px" }, onClick: makeWordRight }, { children: "Right" }))] })] })));
};
exports.default = Practice;
