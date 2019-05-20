import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
const link = createUploadLink({ uri: "http://localhost.:4000" });

export default new ApolloClient({
  clientState: {
    defaults,
    resolvers
  },
  link,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});
