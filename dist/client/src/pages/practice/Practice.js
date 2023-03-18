"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const TopNavigation_1 = __importDefault(require("../../components/topNavigation/TopNavigation"));
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const io5_1 = require("react-icons/io5");
const hi_1 = require("react-icons/hi");
const CardSection_1 = __importDefault(require("../../components/card/cardSection/CardSection"));
const BottomNavigation_1 = __importDefault(require("../../components/bottomNavigation/BottomNavigation"));
const Practice = ({}) => {
    const [card, setCard] = (0, react_1.useState)({
        title: "Parkieren",
        hint: "For cards",
        description: "When you stop the car somewhere, the action that you perfom",
        answer: "To park",
    });
    const [showLevel, setShowLevel] = (0, react_1.useState)(0); // 0 - title, 1 - hint, 2 - description, 3 - answer
    const onClickCard = (section, index) => {
        console.log(section, index);
        setShowLevel(index);
    };
    return (<div className="wrapper">
      <TopNavigation_1.default>
        <ThemeButton_1.default link="/projects/123" small color="theme-light" shadow icon style={{ marginRight: "auto" }}>
          <io5_1.IoChevronBackOutline />
        </ThemeButton_1.default>
        <ThemeButton_1.default link="/projects/123/card/12" small color="theme-light" icon shadow>
          <hi_1.HiOutlinePencil />
        </ThemeButton_1.default>
      </TopNavigation_1.default>
      <div className="wrapper-top-navigation">
        <div className="card-sections" style={{ marginLeft: "40px", marginRight: "40px" }}>
          {card.title && (<div onClick={() => onClickCard("title", 0)}>
              <CardSection_1.default section="title" card={card} hover show={showLevel >= 0}/>
            </div>)}
          {card.hint && (<div onClick={() => onClickCard("hint", 1)}>
              <CardSection_1.default section="hint" card={card} hover show={showLevel >= 1}/>
            </div>)}
          {card.description && (<div onClick={() => onClickCard("description", 2)}>
              <CardSection_1.default section="description" card={card} hover show={showLevel >= 2}/>
            </div>)}
          {card.answer && (<div onClick={() => onClickCard("answer", 3)}>
              <CardSection_1.default section="answer" card={card} hover show={showLevel >= 3}/>
            </div>)}
        </div>
        <div className="practice-button-section">
          <div className="practice-button-wrapper practice-button-wrapper-left">
            <button onClick={() => console.log("left")} className="practice-button">
              <io5_1.IoChevronBackOutline />
            </button>
          </div>
          <div className="practice-button-wrapper practice-button-wrapper-right">
            <button onClick={() => console.log("right")} className="practice-button">
              <io5_1.IoChevronForwardOutline />
            </button>
          </div>
        </div>
      </div>
      <BottomNavigation_1.default>
        <ThemeButton_1.default color="theme-red" shadow fill style={{ marginRight: "8px" }}>
          Wrong
        </ThemeButton_1.default>
        <ThemeButton_1.default color="theme-green" shadow fill style={{ marginLeft: "8px" }}>
          Right
        </ThemeButton_1.default>
      </BottomNavigation_1.default>
    </div>);
};
exports.default = Practice;
