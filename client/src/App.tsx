import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
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

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing: any, incoming: any) {
            return incoming;
          },
        },
        projects: {
          merge(existing: any, incoming: any) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5001/graphql",
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
              <Route path="/project/:id" element={<NewProject />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="/projects/:id/card" element={<NewCard />} />
              <Route path="/projects/:id/card/:cardId" element={<NewCard />} />
              <Route path="/projects/:id/cards" element={<Cards />} />
              <Route path="/projects/:id/cards/:id" element={<Card />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
