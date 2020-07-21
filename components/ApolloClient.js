
import fetch from 'node-fetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from "apollo-link";

import clientConfig from '../client-config';

// used to handle graphql
const client = new ApolloClient( {
    link: createHttpLink({
        uri: clientConfig.graphqlURL,
        fetch: fetch
    }),
    cache: new InMemoryCache()
});

export default client;
