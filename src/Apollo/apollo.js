import ApolloClient from 'apollo-boost'

// const uri = 'https://graphql-token-server.herokuapp.com'
const uri = 'http://localhost:4001'

export const client = new ApolloClient({
	uri,
	credentials: 'include',
	headers: { accessToken: localStorage.getItem('accessToken') }
})
