import * as React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

export interface Props {}

interface routesObjectProp {
	[key: string]: {
		path: string
		exact: boolean
		privateRoute: boolean
		Component: React.LazyExoticComponent<React.FunctionComponent>
	}
}
export const routesObject: routesObjectProp = {
	Login: { path: '/', exact: true, privateRoute: false, Component: React.lazy(() => import('./Containers/Login')) },
	Signup: {
		path: '/signup',
		exact: true,
		privateRoute: false,
		Component: React.lazy(() => import('./Containers/Signup'))
	},
	Home: {
		path: '/home',
		exact: true,
		privateRoute: true,
		Component: React.lazy(() => import('./Containers/Home'))
	}
}
const Routes: React.SFC<Props> = () => {
	return (
		<Router>
			{Object.keys(routesObject).map((item: string) => {
				const { privateRoute, Component, path, exact } = routesObject[item]
				return privateRoute ? (
					localStorage.getItem('accessToken') ? (
						<Route path={path} exact={exact} component={Component} />
					) : (
						<Redirect to={routesObject.Login.path} />
					)
				) : (
					<Route {...routesObject[item]} render={() => <Component />} />
				)
			})}
		</Router>
	)
}

export default Routes
