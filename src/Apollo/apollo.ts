import ApolloClient from 'apollo-boost'
// const uri =lo 'https://graphql-token-server.herokuapp.com'
const uri = 'http://localhost:4001'

export const client = new ApolloClient({
	name: 'react-client',
	uri,
	credentials: 'include',
	headers: {
		get accessToken() {
			return localStorage.getItem('accessToken')
		},
	},
	onError: ({ graphQLErrors, networkError, operation, forward }) => {
		if (graphQLErrors) {
			for (const err of graphQLErrors) {
				if (err.extensions) {
					switch (err.extensions.code) {
						case 'UNAUTHENTICATED':
							console.log('err', err)
							console.log(operation)
							console.log(forward)

							break

						default:
							break
					}
				}
			}
		} else if (networkError) {
			console.log('network ERRRoRRRR')
		}
	},
})
