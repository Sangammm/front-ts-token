import React, { useEffect } from 'react'
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

const Home: React.SFC<LoginProps> = () => {
	let InfoContainerRef: HTMLDivElement | null
	const { loading, error, data } = useQuery(GET_USERS)

	return (
		<>
			<Header links={[]} logout={true} />
			<div className="home">
				<p className="title">Usersssss</p>
				{loading && <Loader />}
				{error && (error.graphQLErrors[0] || 'Something went wrong')}
				<div className="homeContainer">
					{data &&
						data.users &&
						data.users.users.map((item: User, i: number) => {
							return (
								<div
									className="infoContainer"
									key={item.id}
									ref={node => (InfoContainerRef = node)}
									onClick={() => {
										if (InfoContainerRef) {
											// InfoContainerRef.animate([{ boxShadow: 'none' }, { boxShadow: '2px 2px rgb(97, 2, 2)' }], {
											// 	duration: 2000,
											// })
											InfoContainerRef.animate({ opacity: [1, 0.5] }, 200)
											console.log(InfoContainerRef.getAnimations)
										}
									}}
								>
									<img className="profile" src={`https://picsum.photos/id/${10 + i}/200/200`} alt="profile" />
									<div className="nameEmail">
										<p className="name">{item.name}</p>
										<p className="email">{item.email}</p>
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
