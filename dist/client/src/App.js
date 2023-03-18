"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const client_1 = require("@apollo/client");
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
                clients: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
                projects: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
            },
        },
    },
});
const client = new client_1.ApolloClient({
    uri: "http://localhost:5001/graphql",
    cache,
});
function App() {
    return (<>
      <client_1.ApolloProvider client={client}>
        <react_router_dom_1.BrowserRouter>
          <div className="container">
            <react_router_dom_1.Routes>
              <react_router_dom_1.Route path="/" element={<Landing_1.default />}/>
              <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
              <react_router_dom_1.Route path="/register" element={<Register_1.default />}/>
              <react_router_dom_1.Route path="/me" element={<Profile_1.default />}/>
              <react_router_dom_1.Route path="/project" element={<NewProject_1.default />}/>
              <react_router_dom_1.Route path="/project/:id" element={<NewProject_1.default />}/>
              <react_router_dom_1.Route path="/projects/:id" element={<Project_1.default />}/>
              <react_router_dom_1.Route path="/projects/:id/card" element={<NewCard_1.default />}/>
              <react_router_dom_1.Route path="/projects/:id/card/:cardId" element={<NewCard_1.default />}/>
              <react_router_dom_1.Route path="/projects/:id/cards" element={<Cards_1.default />}/>
              <react_router_dom_1.Route path="/projects/:id/cards/:id" element={<Card_1.default />}/>
              <react_router_dom_1.Route path="/projects/:id/practice" element={<Practice_1.default />}/>
              <react_router_dom_1.Route path="*" element={<NotFound_1.default />}/>
            </react_router_dom_1.Routes>
          </div>
        </react_router_dom_1.BrowserRouter>
      </client_1.ApolloProvider>
    </>);
}
exports.default = App;
