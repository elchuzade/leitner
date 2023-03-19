"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ThemeButton_1 = __importDefault(require("../../components/theme/themeButton/ThemeButton"));
const ThemeTitle_1 = __importDefault(require("../../components/theme/themeTitle/ThemeTitle"));
const ProjectItem_1 = __importDefault(require("../../components/project/projectItem/ProjectItem"));
const profileQueries_1 = require("../../queries/profileQueries");
const projectQueries_1 = require("../../queries/projectQueries");
const client_1 = require("@apollo/client");
const Profile = ({}) => {
    const [name, setName] = (0, react_1.useState)("");
    const [avatar, setAvatar] = (0, react_1.useState)("https://picsum.photos/200");
    const [projects, setProjects] = (0, react_1.useState)([]);
    const profileRes = (0, client_1.useQuery)(profileQueries_1.GET_PROFILE);
    const projectsRes = (0, client_1.useQuery)(projectQueries_1.GET_PROJECTS);
    (0, react_1.useEffect)(() => {
        var _a, _b;
        setName(((_b = (_a = profileRes === null || profileRes === void 0 ? void 0 : profileRes.data) === null || _a === void 0 ? void 0 : _a.profile) === null || _b === void 0 ? void 0 : _b.name) || "");
    }, [profileRes]);
    (0, react_1.useEffect)(() => {
        var _a;
        setProjects(((_a = projectsRes === null || projectsRes === void 0 ? void 0 : projectsRes.data) === null || _a === void 0 ? void 0 : _a.projects) || []);
    }, [projectsRes]);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "wrapper" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "profile" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "profile-header" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: avatar, alt: "avatar", className: "profile-img" }), (0, jsx_runtime_1.jsx)("p", { children: name })] })), (0, jsx_runtime_1.jsx)(ThemeTitle_1.default, Object.assign({ tail: (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: "/project", color: "theme-transparent", style: { padding: "12px 0px" } }, { children: "+ Add Project" })) }, { children: "Projects" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "profile-projects" }, { children: projects === null || projects === void 0 ? void 0 : projects.map((project) => ((0, jsx_runtime_1.jsx)(ProjectItem_1.default, { project: project }, project.id))) }))] })) })));
};
exports.default = Profile;
