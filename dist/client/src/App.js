"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const client_1 = require("@apollo/client");
const context_1 = require("@apollo/client/link/context");
require("./App.scss");
const Landing_1 = __importDefault(require("./pages/landing/Landing"));
const NotFound_1 = __importDefault(require("./pages/NotFound"));
const Login_1 = __importDefault(require("./pages/login/Login"));
const Register_1 = __importDefault(require("./pages/register/Register"));
const Profile_1 = __importDefault(require("./pages/profile/Profile"));
const NewProject_1 = __importDefault(require("./pages/project/NewProject"));
const Project_1 = __importDefault(require("./pages/project/Project"));
const NewCard_1 = __importDefault(require("./pages/card/NewCard"));
const Cards_1 = __importDefault(require("./pages/card/Cards"));
const Card_1 = __importDefault(require("./pages/card/Card"));
const Practice_1 = __importDefault(require("./pages/practice/Practice"));
const cache = new client_1.InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                profile: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
                projects: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
                cards: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
            },
        },
    },
});
const httpLink = (0, client_1.createHttpLink)({
    uri: "http://localhost:5001/graphql",
});
const authLink = (0, context_1.setContext)((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("token");
    // return the headers to the context so httpLink can read them
    return {
        headers: Object.assign(Object.assign({}, headers), { authorization: token ? `${token}` : "" }),
    };
});
const client = new client_1.ApolloClient({
    link: authLink.concat(httpLink),
    cache,
});
function App() {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(client_1.ApolloProvider, Object.assign({ client: client }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "container" }, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Landing_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/register", element: (0, jsx_runtime_1.jsx)(Register_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/me", element: (0, jsx_runtime_1.jsx)(Profile_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/project", element: (0, jsx_runtime_1.jsx)(NewProject_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/project/:projectId", element: (0, jsx_runtime_1.jsx)(NewProject_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/projects/:projectId", element: (0, jsx_runtime_1.jsx)(Project_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/projects/:projectId/card", element: (0, jsx_runtime_1.jsx)(NewCard_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/projects/:projectId/card/:cardId", element: (0, jsx_runtime_1.jsx)(NewCard_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/projects/:projectId/cards", element: (0, jsx_runtime_1.jsx)(Cards_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/projects/:projectId/cards/:cardId", element: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/projects/:projectId/practice/:stage", element: (0, jsx_runtime_1.jsx)(Practice_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) })] }) })) }) })) }));
}
exports.default = App;
