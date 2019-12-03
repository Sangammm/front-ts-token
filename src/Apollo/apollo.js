import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
	uri: 'https://graphql-token-server.herokuapp.com',
	credentials: 'include',
	headers: { accessToken: localStorage.getItem('accessToken') }
})
