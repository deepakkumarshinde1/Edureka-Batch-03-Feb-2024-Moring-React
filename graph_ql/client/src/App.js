import Products from "./components/Products";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

let client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: `http://localhost:3002/graphql` }),
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Products />
      </ApolloProvider>
    </>
  );
}

export default App;
