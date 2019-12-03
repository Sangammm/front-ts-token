import gql from 'graphql-tag'
export const SIGNIN = gql`
	mutation signin($input: LoginInput) {
		login(input: $input) {
			accessToken
			refreshToken
			user {
				id
			}
		}
	}
`
export const SIGNUP = gql`
	mutation signup($input: SignupInput) {
		signup(input: $input) {
			accessToken
			refreshToken
			user {
				id
			}
		}
	}
`
