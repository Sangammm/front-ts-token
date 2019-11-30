import React from 'react'
import Loader from './Components/Loader'
const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<Loader />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
