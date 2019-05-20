import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { ApolloProvider } from "react-apollo-hooks";
import { createUploadLink } from "apollo-upload-client";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { resolvers } from "./Apollo/LocalState";
import { setContext } from "apollo-link-context";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const uploadlink = createUploadLink({ uri: "http://localhost:4000" });
//캐쉬 설정
const cache = new InMemoryCache();
const data = {
  isLoggedIn: localStorage.getItem("token") !== null ? true : false
};

cache.writeData({ data });
const client = new ApolloClient({
  resolvers,
  link: authLink.concat(uploadlink),
  cache,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
