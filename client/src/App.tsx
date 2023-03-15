import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "./App.scss";

import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";

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
              <Route path="/register" element={<>register</>} />
              <Route path="/profiles/:id" element={<>my profile</>} />
              <Route path="/project" element={<>new project</>} />
              <Route path="/projects" element={<>my projects</>} />
              <Route path="/projects/:id" element={<>my project</>} />
              <Route path="/card" element={<>new card</>} />
              <Route path="/cards" element={<>my cards</>} />
              <Route path="/cards/:id" element={<>my card</>} />
              <Route path="*" element={<>not found</>} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
