import React from 'react'
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
	const { loading, error, data } = useQuery<returnType>(GET_USERS)
	return (
		<>
			<Header links={[]} logout />
			<div className="home">
				<p className="title">Usersssss</p>
				{loading && <Loader />}
				{error && (error.graphQLErrors[0].message || 'Something went wrong')}
				<div className="homeContainer">
					{data &&
						data.users &&
						data.users.users.map((item: User, i: number) => {
							return (
								<div className="infoContainer" key={item.id}>
									<div className="centerContent">
										<img className="profile" src={`https://picsum.photos/id/${10 + i}/200/200`} alt="profile" />
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
