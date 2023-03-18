"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_1 = require("react-router");
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const ThemeInput_1 = __importDefault(require("../../components/theme/themeInput/ThemeInput"));
const ThemeTextarea_1 = __importDefault(require("../../components/theme/themeTextarea/ThemeTextarea"));
const TopNavigation_1 = __importDefault(require("../../components/topNavigation/TopNavigation"));
const ThemeTitle_1 = __importDefault(require("../../components/theme/themeTitle/ThemeTitle"));
const BottomNavigation_1 = __importDefault(require("../../components/bottomNavigation/BottomNavigation"));
const io5_1 = require("react-icons/io5");
const NewCard = ({}) => {
    const { id, cardId } = (0, react_router_1.useParams)();
    const [title, setTitle] = (0, react_1.useState)("");
    const [hint, setHint] = (0, react_1.useState)("");
    const [description, setDescription] = (0, react_1.useState)("");
    const [answer, setAnswer] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        console.log(id, cardId);
    }, [id, cardId]);
    return (<div className="wrapper wrapper-flex">
      <TopNavigation_1.default>
        <ThemeButton_1.default link="/projects/123/cards" small color="theme-light" shadow icon style={{ marginRight: "auto" }}>
          <io5_1.IoChevronBackOutline />
        </ThemeButton_1.default>
      </TopNavigation_1.default>
      <div className="wrapper-top-navigation">
        <div className="card">
          <div className="card-new">
            <ThemeTitle_1.default>{cardId ? "Edit" : "Add"} Card</ThemeTitle_1.default>
            <ThemeInput_1.default value={title} onChange={(e) => setTitle(e.target.value)} type="title" placeholder="title" color="theme-white" shadow fill style={{ marginBottom: "16px" }}/>
            <ThemeInput_1.default value={hint} onChange={(e) => setHint(e.target.value)} type="hint" placeholder="hint" color="theme-white" shadow fill style={{ marginBottom: "16px" }}/>
            <ThemeTextarea_1.default value={description} rows={6} onChange={(e) => setDescription(e.target.value)} placeholder="description" color="theme-white" shadow fill style={{ marginBottom: "12px" }}/>
            <ThemeInput_1.default value={answer} onChange={(e) => setAnswer(e.target.value)} type="answer" placeholder="answer" color="theme-white" shadow fill style={{ marginBottom: "16px" }}/>
          </div>
        </div>
      </div>
      <BottomNavigation_1.default>
        <ThemeButton_1.default onClick={() => { }} color="theme-blue" shadow fill>
          Save
        </ThemeButton_1.default>
      </BottomNavigation_1.default>
    </div>);
};
exports.default = NewCard;
