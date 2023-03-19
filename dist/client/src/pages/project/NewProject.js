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
const projectQueries_1 = require("../../queries/projectQueries");
const projectMutations_1 = require("../../mutations/projectMutations");
const NewProject = ({}) => {
    const navigate = (0, react_router_1.useNavigate)();
    const { projectId } = (0, react_router_1.useParams)();
    const [title, setTitle] = (0, react_1.useState)("");
    const [description, setDescription] = (0, react_1.useState)("");
    const [getProjectRes, projectRes] = (0, client_1.useLazyQuery)(projectQueries_1.GET_PROJECT, {
        variables: { projectId },
    });
    const [updateProject, updateProjectRes] = (0, client_1.useMutation)(projectMutations_1.UPDATE_PROJECT, {
        variables: { projectId, title, description },
    });
    (0, react_1.useEffect)(() => {
        // If projectId exists then it is edit project so fetch the project, else it is add project
        if (projectId) {
            getProjectRes();
        }
    }, []);
    (0, react_1.useEffect)(() => {
        var _a, _b, _c, _d;
        setTitle(((_b = (_a = projectRes === null || projectRes === void 0 ? void 0 : projectRes.data) === null || _a === void 0 ? void 0 : _a.project) === null || _b === void 0 ? void 0 : _b.title) || "");
        setDescription(((_d = (_c = projectRes === null || projectRes === void 0 ? void 0 : projectRes.data) === null || _c === void 0 ? void 0 : _c.project) === null || _d === void 0 ? void 0 : _d.description) || "");
    }, [projectRes]);
    (0, react_1.useEffect)(() => {
        var _a;
        if ((_a = updateProjectRes === null || updateProjectRes === void 0 ? void 0 : updateProjectRes.data) === null || _a === void 0 ? void 0 : _a.updateProject) {
            navigate(`/projects/${projectId}`);
        }
    }, [updateProjectRes]);
    const onUpdateProject = () => {
        if (title && description) {
            updateProject();
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "wrapper wrapper-flex" }, { children: [(0, jsx_runtime_1.jsx)(TopNavigation_1.default, { children: (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ link: "/me", small: true, color: "theme-light", shadow: true, icon: true, style: { marginRight: "auto" } }, { children: (0, jsx_runtime_1.jsx)(io5_1.IoChevronBackOutline, {}) })) }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "wrapper-top-navigation" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "project" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "project-new" }, { children: [(0, jsx_runtime_1.jsxs)(ThemeTitle_1.default, { children: [projectId ? "Edit" : "Add", " Project"] }), (0, jsx_runtime_1.jsx)(ThemeInput_1.default, { value: title, onChange: (e) => setTitle(e.target.value), type: "title", placeholder: "title", color: "theme-white", shadow: true, fill: true, style: { marginBottom: "16px" } }), (0, jsx_runtime_1.jsx)(ThemeTextarea_1.default, { value: description, rows: 6, onChange: (e) => setDescription(e.target.value), placeholder: "description", color: "theme-white", shadow: true, fill: true, style: { marginBottom: "16px" } })] })) })) })), (0, jsx_runtime_1.jsx)(BottomNavigation_1.default, { children: (0, jsx_runtime_1.jsx)(ThemeButton_1.default, Object.assign({ onClick: onUpdateProject, color: "theme-blue", shadow: true, fill: true }, { children: "Save" })) })] })));
};
exports.default = NewProject;
