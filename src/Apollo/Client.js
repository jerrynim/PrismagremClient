import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";
// import { createUploadLink } from "apollo-upload-client";
// import { createHttpLink } from "apollo-link-http";

// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       Authorization: `Bearer ${localStorage.getItem("token")}`
//     }
//   }));
//   return forward(operation);
// });

// const httpLink = createHttpLink({ uri: "http://localhost:4000" });
// const uploadLink = createUploadLink({ uri: "http://localhost:4000/graphql" });
export default new ApolloClient({
  uri: "http://localhost:4000",
  clientState: {
    defaults,
    resolvers
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});
