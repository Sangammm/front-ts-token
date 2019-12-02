import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

export interface Props {}

export const routes: any = {
	Login: { path: '/', exact: true, privateRoute: false, component: React.lazy(() => import('./Containers/Login')) },
	Signup: {
		path: '/signup',
		exact: true,
		privateRoute: false,
		component: React.lazy(() => import('./Containers/Login'))
	},
	Home: {
		path: '/home',
		exact: true,
		privateRoute: true,
		component: React.lazy(() => import('./Containers/Home'))
	}
}
const Routes: React.SFC<Props> = () => {
	return (
		<Router>
			{Object.keys(routes).map((item: string) => {
				const { path, exact, privateRoute, components } = routes[item]
				return privateRoute ? (
					localStorage.getItem('accessToken') ? (
						<Route {...routes[item]} render={() => components} />
					) : (
						<Redirect to={routes.Login.path} />
					)
				) : (
					<Route {...routes[item]} render={() => components} />
				)
			})}
		</Router>
	)
}

export default Routes
