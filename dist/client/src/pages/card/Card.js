"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_1 = require("react-router");
const TopNavigation_1 = __importDefault(require("../../components/topNavigation/TopNavigation"));
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const io5_1 = require("react-icons/io5");
const hi_1 = require("react-icons/hi");
const CardSection_1 = __importDefault(require("../../components/card/cardSection/CardSection"));
const Card = ({}) => {
    let { id, cardId } = (0, react_router_1.useParams)();
    const [card, setCard] = (0, react_1.useState)({
        title: "Parkieren",
        hint: "For cards",
        description: "When you stop the car somewhere, the action that you perfom",
        answer: "To park",
    });
    (0, react_1.useEffect)(() => {
        console.log(id, cardId);
    }, [id, cardId]);
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
        <div className="card-sections">
          <CardSection_1.default section="title" card={card}/>
          <CardSection_1.default section="hint" card={card}/>
          <CardSection_1.default section="description" card={card}/>
          <CardSection_1.default section="answer" card={card}/>
        </div>
      </div>
    </div>);
};
exports.default = Card;
