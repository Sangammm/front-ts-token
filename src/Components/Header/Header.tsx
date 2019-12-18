import * as React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export interface data {
	path: string
	title: string
}
export interface HeaderProps {
	links: Array<data>
	logout: Boolean
}
const Header: React.SFC<HeaderProps> = ({ links, logout }) => {
	const history = useHistory()
	const logoutClick = () => {
		localStorage.removeItem('accessToken')
		history.push('/')
	}
	return (
		<header>
			<h4 className="title">Title</h4>
			<ul>
				{links.map((item: data, i: number) => {
					return (
						<li>
							{' '}
							<Link to={item.path}>{item.title}></Link>
						</li>
					)
				})}

				{logout && (
					<li>
						<button onClick={logoutClick}>Log !!! Out</button>
					</li>
				)}
			</ul>
		</header>
	)
}

export default Header
