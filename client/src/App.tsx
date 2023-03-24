import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./App.scss";

import Landing from "./pages/landing/Landing";
import NotFound from "./pages/NotFound";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import NewProject from "./pages/project/NewProject";
import Project from "./pages/project/Project";
import NewCard from "./pages/card/NewCard";
import Cards from "./pages/card/Cards";
import Card from "./pages/card/Card";
import Practice from "./pages/practice/Practice";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        profile: {
          merge(existing: any, incoming: any) {
            return incoming;
          },
        },
        projects: {
          merge(existing: any, incoming: any) {
            return incoming;
          },
        },
        cards: {
          merge(existing: any, incoming: any) {
            return incoming;
          },
        },
      },
    },
  },
});

const httpLink = createHttpLink({
  uri: "http://localhost:5001/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/me" element={<Profile />} />
              <Route path="/project" element={<NewProject />} />
              <Route path="/project/:projectId" element={<NewProject />} />
              <Route path="/projects/:projectId" element={<Project />} />
              <Route path="/projects/:projectId/card" element={<NewCard />} />
              <Route
                path="/projects/:projectId/card/:cardId"
                element={<NewCard />}
              />
              <Route path="/projects/:projectId/cards" element={<Cards />} />
              <Route
                path="/projects/:projectId/cards/:cardId"
                element={<Card />}
              />
              <Route
                path="/projects/:projectId/practice/:stage"
                element={<Practice />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
