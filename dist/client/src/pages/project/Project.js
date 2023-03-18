"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_1 = require("react-router");
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const TopNavigation_1 = __importDefault(require("../../components/topNavigation/TopNavigation"));
const ProjectStage_1 = __importDefault(require("../../components/project/projectStage/ProjectStage"));
const BottomNavigation_1 = __importDefault(require("../../components/bottomNavigation/BottomNavigation"));
const io5_1 = require("react-icons/io5");
const Project = ({}) => {
    let { id } = (0, react_router_1.useParams)();
    const [projectTitle, setProjectTitle] = (0, react_1.useState)("German Language A1");
    const [projectInfo, setProjectInfo] = (0, react_1.useState)("we iowie fiwjf wjief jwiej oiwjfhewh rehguirhweuighuiehguheg oihwei hief hwio");
    (0, react_1.useEffect)(() => {
        console.log(id);
    }, [id]);
    return (<div className="wrapper">
      <TopNavigation_1.default>
        <ThemeButton_1.default link="/me" small color="theme-light" shadow icon style={{ marginRight: "auto" }}>
          <io5_1.IoChevronBackOutline />
        </ThemeButton_1.default>
        <ThemeButton_1.default link="/projects/123/cards" small color="theme-green" shadow>
          Show All Cards
        </ThemeButton_1.default>
      </TopNavigation_1.default>
      <div className="wrapper-top-navigation">
        <div className="project">
          <div className="project-stages">
            <ProjectStage_1.default stage={1} cardsCount={15}/>
            <ProjectStage_1.default stage={2} cardsCount={15}/>
            <ProjectStage_1.default stage={3} cardsCount={15}/>
            <ProjectStage_1.default stage={4} cardsCount={15}/>
            <ProjectStage_1.default stage={5} cardsCount={15}/>
            <ProjectStage_1.default stage={6} cardsCount={15}/>
          </div>
          <div className="project-info">
            <div className="project-info-title">{projectTitle}</div>
            <div className="project-info-description">{projectInfo}</div>
            <div className="project-info-footer">
              <ThemeButton_1.default small color="theme-dark" style={{ marginRight: "8px" }}>
                Edit
              </ThemeButton_1.default>
              <ThemeButton_1.default small color="theme-red">
                Delete
              </ThemeButton_1.default>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation_1.default>
        <ThemeButton_1.default onClick={() => { }} color="theme-blue" shadow fill>
          Practice
        </ThemeButton_1.default>
      </BottomNavigation_1.default>
    </div>);
};
exports.default = Project;
