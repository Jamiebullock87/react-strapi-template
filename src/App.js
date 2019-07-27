import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${process.env.API_URL}/graphql`
})

const client = new ApolloClient({
  link,
  cache
})

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <div className="grid grid-2">
          <h1>H1 Tag</h1>
          <h2>H2 Tag</h2>
          <h3>H3 Tag</h3>
          <h4>H4 Tag</h4>
          <p>P Text</p>
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
