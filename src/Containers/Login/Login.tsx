import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { SIGNIN } from '../../Apollo/gql'
import Loader from '../../Components/Loader/Loader'
import Header from '../../Components/Header/Header'
import { useHistory } from 'react-router-dom'
import './Login.scss'
export interface LoginProps {}

const Login: React.SFC<LoginProps> = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState()
	const history = useHistory()
	const [login, { loading }] = useMutation(SIGNIN, {
		onCompleted(data) {
			console.log(data)
			const {
				login: { accessToken },
			} = data
			localStorage.setItem('accessToken', accessToken)
			history.push('/home')
		},
		onError(error) {
			console.log(error)
			setError(error.graphQLErrors[0].message || 'Something went wrong')
		},
	})
	const formSubmit = async (e: any) => {
		e.preventDefault()
		setError(null)
		console.log(email, password)
		login({ variables: { input: { email, password } } })
	}

	return (
		<>
			<Header />
			<div className="main_form_container">
				<span className="form_header">{`\`Login\``}</span>
				<input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="email" />
				<input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="password" />
				{!loading ? <button onClick={formSubmit}>>>></button> : <Loader color="#54888a" />}
				{error ? <h4 style={{ color: 'red', margin: '4px auto' }}>{error}</h4> : undefined}
			</div>
		</>
	)
}

export default Login
