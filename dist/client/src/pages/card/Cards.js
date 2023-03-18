"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const TopNavigation_1 = __importDefault(require("../../components/topNavigation/TopNavigation"));
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const ThemeTitle_1 = __importDefault(require("../../components/theme/themeTitle/ThemeTitle"));
const ThemeInput_1 = __importDefault(require("../../components/theme/themeInput/ThemeInput"));
const CardItem_1 = __importDefault(require("../../components/card/cardItem/CardItem"));
const ai_1 = require("react-icons/ai");
const io5_1 = require("react-icons/io5");
const Cards = ({}) => {
    const [searchCardText, setSearchCardText] = (0, react_1.useState)("");
    const [cards, setCards] = (0, react_1.useState)([
        {
            id: 1,
            title: "title",
            description: "description",
            stage: "1",
            hint: "hint",
            answer: "answer",
        },
        {
            id: 2,
            title: "title 2",
            description: "description 2",
            stage: "1",
            hint: "hint 2",
            answer: "answer 2",
        },
        {
            id: 3,
            title: "title 3",
            description: "description 3",
            stage: "2",
            hint: "hint 3",
            answer: "answer 3",
        },
    ]);
    const [showCards, setShowCards] = (0, react_1.useState)([
        true,
        true,
        true,
        true,
        true,
        true,
    ]);
    const FlipShowStageCards = (stage) => {
        let modifiedShowCards = [...showCards];
        modifiedShowCards[stage - 1] = !modifiedShowCards[stage - 1];
        setShowCards(modifiedShowCards);
    };
    const RenderCardsStage = (stage) => {
        const filteredCards = cards.filter((c) => c.stage === `${stage}`);
        return (<div className="cards-stage">
        <div className="cards-stage-header">
          <ThemeTitle_1.default style={{
                fontSize: "20px",
                paddingTop: "8px",
                paddingBottom: "8px",
            }}>
            Stage {stage}
          </ThemeTitle_1.default>
          {filteredCards.length > 0 && (<>
              {" "}
              <div style={{
                    color: "grey",
                    width: "120px",
                    textAlign: "right",
                    marginRight: "8px",
                }}>
                {filteredCards.length}{" "}
                {filteredCards.length === 1 ? "card" : "cards"}
              </div>
              <ThemeButton_1.default shadow small icon color="theme-light" onClick={() => FlipShowStageCards(stage)}>
                {showCards[stage - 1] ? (<ai_1.AiOutlineEyeInvisible />) : (<ai_1.AiOutlineEye />)}
              </ThemeButton_1.default>
            </>)}
        </div>
        {showCards[stage - 1] && filteredCards.length > 0 && (<div className="cards-stage-cards">
            {filteredCards.map((card) => (<CardItem_1.default key={card.id} project={{ id: "123" }} card={card}/>))}
          </div>)}
      </div>);
    };
    return (<div className="wrapper">
      <TopNavigation_1.default>
        <ThemeButton_1.default link="/projects/123" small color="theme-light" shadow icon style={{ marginRight: "auto" }}>
          <io5_1.IoChevronBackOutline />
        </ThemeButton_1.default>
        <ThemeButton_1.default link="/projects/123/card" small color="theme-green" shadow>
          + Add Card
        </ThemeButton_1.default>
      </TopNavigation_1.default>
      <div className="wrapper-top-navigation">
        <div className="cards">
          <div className="cards-search">
            <ThemeTitle_1.default tail={cards.length}>Project Cards</ThemeTitle_1.default>
            <ThemeInput_1.default value={searchCardText} onChange={(e) => setSearchCardText(e.target.value)} type="cards" placeholder="search cards" color="theme-white" shadow fill style={{ marginBottom: "16px" }}/>
          </div>
          <div className="cards-stages">{RenderCardsStage(1)}</div>
          <div className="cards-stages">{RenderCardsStage(2)}</div>
          <div className="cards-stages">{RenderCardsStage(3)}</div>
          <div className="cards-stages">{RenderCardsStage(4)}</div>
          <div className="cards-stages">{RenderCardsStage(5)}</div>
          <div className="cards-stages">{RenderCardsStage(6)}</div>
        </div>
      </div>
    </div>);
};
exports.default = Cards;
