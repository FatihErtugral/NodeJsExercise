import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { BrowserRouter } from 'react-router-dom';
const cache = new InMemoryCache();
const BASE_URL = 'http://localhost:3000';

const httpLink = new HttpLink({
   uri: BASE_URL,
   // headers: {
   //    authorization: `Bearer ${
   //       process.env.REACT_TOKEN
   //       }`,
   // },
});

const client = new ApolloClient({
   link: httpLink,
   cache,
});

ReactDOM.render(
   <ApolloProvider client={client}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </ApolloProvider>
   ,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
