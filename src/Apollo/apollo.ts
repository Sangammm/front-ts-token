import ApolloClient from 'apollo-boost'
// const uri =lo 'https://graphql-token-server.herokuapp.com'
const uri = 'http://localhost:4001'

export const client = new ApolloClient({
	name: 'react-client',
	uri,
	credentials: 'include',
	headers: { get accessToken() { return localStorage.getItem('accessToken') } },
})
