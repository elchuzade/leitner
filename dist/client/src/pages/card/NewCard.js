"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_1 = require("react-router");
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const ThemeInput_1 = __importDefault(require("../../components/theme/themeInput/ThemeInput"));
const ThemeTextarea_1 = __importDefault(require("../../components/theme/themeTextarea/ThemeTextarea"));
const TopNavigation_1 = __importDefault(require("../../components/topNavigation/TopNavigation"));
const ThemeTitle_1 = __importDefault(require("../../components/theme/themeTitle/ThemeTitle"));
const BottomNavigation_1 = __importDefault(require("../../components/bottomNavigation/BottomNavigation"));
const io5_1 = require("react-icons/io5");
const client_1 = require("@apollo/client");
const cardQueries_1 = require("../../queries/cardQueries");
const cardMutations_1 = require("../../mutations/cardMutations");
const NewCard = ({}) => {
    const { projectId, cardId } = (0, react_router_1.useParams)();
    const [title, setTitle] = (0, react_1.useState)("");
    const [hint, setHint] = (0, react_1.useState)("");
    const [description, setDescription] = (0, react_1.useState)("");
    const [answer, setAnswer] = (0, react_1.useState)("");
    const [stage, setStage] = (0, react_1.useState)(1);
    const [getCardRes, cardRes] = (0, client_1.useLazyQuery)(cardQueries_1.GET_CARD, {
        variables: { cardId },
    });
    const [updateCard, updateCardRes] = (0, client_1.useMutation)(cardMutations_1.UPDATE_CARD, {
        variables: { cardId, title, hint, description, answer, stage },
    });
    const [addCard, addCardRes] = (0, client_1.useMutation)(cardMutations_1.ADD_CARD, {
        variables: { title, hint, description, answer, stage },
    });
    (0, react_1.useEffect)(() => {
        // If cardId exists then it is edit project so fetch the project, else it is add project
        if (cardId) {
            getCardRes();
        }
    }, []);
    (0, react_1.useEffect)(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        setTitle(((_b = (_a = cardRes === null || cardRes === void 0 ? void 0 : cardRes.data) === null || _a === void 0 ? void 0 : _a.card) === null || _b === void 0 ? void 0 : _b.title) || "");
        setHint(((_d = (_c = cardRes === null || cardRes === void 0 ? void 0 : cardRes.data) === null || _c === void 0 ? void 0 : _c.card) === null || _d === void 0 ? void 0 : _d.hint) || "");
        setDescription(((_f = (_e = cardRes === null || cardRes === void 0 ? void 0 : cardRes.data) === null || _e === void 0 ? void 0 : _e.card) === null || _f === void 0 ? void 0 : _f.description) || "");
        setAnswer(((_h = (_g = cardRes === null || cardRes === void 0 ? void 0 : cardRes.data) === null || _g === void 0 ? void 0 : _g.card) === null || _h === void 0 ? void 0 : _h.answer) || "");
        setStage(((_k = (_j = cardRes === null || cardRes === void 0 ? void 0 : cardRes.data) === null || _j === void 0 ? void 0 : _j.card) === null || _k === void 0 ? void 0 : _k.stage) || 1);
    }, [cardRes]);
    const onSaveCard = () => {
        if (title) {
            if (cardId) {
                updateCard();
            }
            else {
                addCard();
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "wrapper wrapper-flex" }, { children: [(0, jsx_runtime_1.jsx)(TopNavigation_1.default, { children: (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: `/projects/${projectId}/cards`, small: true, color: "theme-light", shadow: true, icon: true, style: { marginRight: "auto" } }, { children: (0, jsx_runtime_1.jsx)(io5_1.IoChevronBackOutline, {}) })) }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "wrapper-top-navigation" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "card" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-new" }, { children: [(0, jsx_runtime_1.jsxs)(ThemeTitle_1.default, { children: [cardId ? "Edit" : "Add", " Card"] }), (0, jsx_runtime_1.jsx)(ThemeInput_1.default, { value: title, onChange: (e) => setTitle(e.target.value), type: "title", placeholder: "title", color: "theme-white", shadow: true, fill: true, style: { marginBottom: "16px" } }), (0, jsx_runtime_1.jsx)(ThemeInput_1.default, { value: hint, onChange: (e) => setHint(e.target.value), type: "hint", placeholder: "hint", color: "theme-white", shadow: true, fill: true, style: { marginBottom: "16px" } }), (0, jsx_runtime_1.jsx)(ThemeTextarea_1.default, { value: description, rows: 6, onChange: (e) => setDescription(e.target.value), placeholder: "description", color: "theme-white", shadow: true, fill: true, style: { marginBottom: "12px" } }), (0, jsx_runtime_1.jsx)(ThemeInput_1.default, { value: answer, onChange: (e) => setAnswer(e.target.value), type: "answer", placeholder: "answer", color: "theme-white", shadow: true, fill: true, style: { marginBottom: "16px" } })] })) })) })), (0, jsx_runtime_1.jsx)(BottomNavigation_1.default, { children: (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ onClick: onSaveCard, color: "theme-blue", shadow: true, fill: true }, { children: "Save" })) })] })));
};
exports.default = NewCard;
