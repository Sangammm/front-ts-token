import * as React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
export interface HeaderProps {}
const Header: React.SFC<HeaderProps> = () => {
	return (
		<header>
			<h4 className="title">Title</h4>
			<ul>
				<li>
					<Link to="/">Log->In</Link>
				</li>
				<li>
					<Link to="/signup">Sign^Up</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
