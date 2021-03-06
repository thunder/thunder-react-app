import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { sha256 } from 'crypto-hash';
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from "@apollo/client";

let headers = {};
if (process.env.REACT_APP_GRAPHQL_SERVER_USER && process.env.REACT_APP_GRAPHQL_SERVER_PASSWORD) {
  var base64encodedData = Buffer.from(process.env.REACT_APP_GRAPHQL_SERVER_USER + ':' + process.env.REACT_APP_GRAPHQL_SERVER_PASSWORD).toString('base64');
  headers.authorization = 'Basic ' + base64encodedData;
}

const httpLink = new HttpLink({ 
  uri: process.env.REACT_APP_GRAPHQL_SERVER,
  headers
});
const persistedQueriesLink = createPersistedQueryLink({useGETForHashedQueries: true, sha256});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: persistedQueriesLink.concat(httpLink)
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
