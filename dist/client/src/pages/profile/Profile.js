"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const ThemeTitle_1 = __importDefault(require("../../components/theme/themeTitle/ThemeTitle"));
const ProjectItem_1 = __importDefault(require("../../components/project/projectItem/ProjectItem"));
const Profile = ({}) => {
    const [name, setName] = (0, react_1.useState)("Kamran Elchuzade");
    const [avatar, setAvatar] = (0, react_1.useState)("https://picsum.photos/200");
    const [projects, setProjects] = (0, react_1.useState)([
        { id: 1, title: "German Language A1", cards: [1, 2, 3, 4, 5, 6] },
        { id: 2, title: "German Language A2", cards: [1, 2, 3] },
    ]);
    return (<div className="wrapper">
      <div className="profile">
        <div className="profile-header">
          <img src={avatar} alt="avatar" className="profile-img"/>
          <p>{name}</p>
        </div>
        <ThemeTitle_1.default tail={<ThemeButton_1.default link="/project" color="theme-transparent" style={{ padding: "12px 0px" }}>
              + Add Project
            </ThemeButton_1.default>}>
          Projects
        </ThemeTitle_1.default>
        <div className="profile-projects">
          {projects.map((project) => (<ProjectItem_1.default key={project.id} project={project}/>))}
        </div>
      </div>
    </div>);
};
exports.default = Profile;
