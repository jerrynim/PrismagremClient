import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  uri: "https://gva11fj666.execute-api.us-west-2.amazonaws.com/dev/",
  clientState: {
    defaults,
    resolvers
  },
  headers: {
    Authorization: `${localStorage.getItem("token")}`
  }
});
