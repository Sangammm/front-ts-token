import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import { useQuery } from '@apollo/react-hooks'
import { GET_USERS } from '../../Apollo/gql'
import Loader from '../../Components/Loader/Loader'
import './Home.scss'
export interface LoginProps {}

export interface User {
	email: string
	name?: string
	id: string
}

interface Users {
	users: Array<User>
}
interface TokenInfo {
	expired: boolean
	accessToken: string
	sendNew: boolean
}
interface returnType {
	users: Users
	TokenInfo: TokenInfo
}

const Home: React.SFC<LoginProps> = () => {
	const [users, setUsers] = useState()
	const { loading, error, data } = useQuery<returnType>(GET_USERS, {
		onCompleted: (data: returnType) => {
			if (data.users) {
				setUsers(data.users.users)
			}
		},
	})

	const moveup = (item: User, i: number) => {
		if (data) {
			let usersClone = [...users]
			usersClone.splice(0, 0, item)
			console.log(usersClone, 1)
			usersClone.splice(i + 1, 1)
			console.log(usersClone, 1)
			setUsers(usersClone)
		}
	}
	return (
		<>
			<Header links={[]} logout />
			{loading && <Loader />}
			<div className="home">
				<p className="title">Usersssss</p>
				{error && (error.graphQLErrors[0].message || 'Something went wrong')}
				<div className="homeContainer">
					{data &&
						data.users &&
						users &&
						users.map((item: User, i: number) => {
							return (
								<div className="infoContainer" key={item.id} onClick={() => moveup(item, i)}>
									<div className="centerContent">
										{/* <img className="profile" src={`https://picsum.photos/id/${10 + item.id}/200/200`} alt="profile" /> */}
										<div className="nameEmail">
											<p className="name">{item.name}</p>
											<p className="email">{item.email}</p>
										</div>
									</div>
								</div>
							)
						})}
				</div>
			</div>
		</>
	)
}

export default Home
