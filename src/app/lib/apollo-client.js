// import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
// import { onError } from "@apollo/client/link/error";

// const httpLink = new HttpLink({
//   uri: "https://rozavilciens.devtemp26.com/graphql",
// });

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.forEach(({ message, locations, path }) =>
//       console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
//     );
//   if (networkError) console.log(`[Network error]: ${networkError}.`);
// });

// const link = from([
//   errorLink,
//   httpLink,
// ]);

// export const client = new ApolloClient({
//   link: link,
//   cache: new InMemoryCache(),
// });


import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://rozavilciens.devtemp26.com/graphql", fetch }),
  cache: new InMemoryCache(),
});


export default client;