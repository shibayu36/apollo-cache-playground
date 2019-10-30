import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Repositories } from './Repositories';

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: "https://api.github.com/graphql",
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })
  ]),
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename="/">
        <main>
          <Switch>
            <Route path="/repositories" exact strict component={Repositories} />
          </Switch>
        </main>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
