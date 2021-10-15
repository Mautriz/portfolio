// import { browser } from '$app/env';
// import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client/core';
// import { WebSocketLink } from '@apollo/client/link/ws';

// const link = browser
// 	? new WebSocketLink({
// 			uri: 'ws://localhost:8080/graphql',
// 			options: {
// 				reconnect: true
// 			}
// 	  })
// 	: null;

// export const client = new ApolloClient<NormalizedCacheObject>({
// 	cache: new InMemoryCache({}),
// 	defaultOptions: {
// 		mutate: {},
// 		query: {}
// 	},
// 	uri: 'http://localhost:8080/graphql',
// 	link,
// 	ssrForceFetchDelay: 10000,
// 	assumeImmutableResults: true
// });

// export default client;

export const apolloClient = {};
