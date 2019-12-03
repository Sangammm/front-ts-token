import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Router from './Router'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './Apollo/apollo'
ReactDOM.render(
	<ApolloProvider client={client}>
		<Suspense fallback={() => <div>Loading</div>}>
			<Router />
		</Suspense>
	</ApolloProvider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
