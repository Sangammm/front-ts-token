import * as React from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { SIGNUP } from '../../Apollo/gql'
import Loader from '../../Components/Loader/Loader'
import Header from '../../Components/Header/Header'
import { useHistory } from 'react-router-dom'
import '../Login/Login.scss'

export interface SignupProps {}

const Signup: React.SFC<SignupProps> = () => {
	const history = useHistory()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const [error, setError] = useState()
	const [signup, { loading }] = useMutation(SIGNUP, {
		onCompleted(data) {
			console.log(data)
			const {
				signup: { accessToken },
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
		signup({ variables: { input: { email, password, name } } })
	}

	return (
		<>
			<Header />
			<div className="main_form_container">
				<span className="form_header">{`\`Welcome\``}</span>
				<input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="email" />
				<input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="password" />
				<input type="name" onChange={e => setName(e.target.value)} value={name} placeholder="name" />
				{!loading ? <button onClick={formSubmit}>Signup</button> : <Loader color="#54888a" />}
				{error ? <h4 style={{ color: 'red', margin: '4px auto' }}>{error}</h4> : undefined}
			</div>
		</>
	)
}

export default Signup
