import React from 'react'
import './Loader.scss'
const Loader = (props: any) => {
	return (
		<div className="loader_main">
			<div className="loader_all">
				<span className="dot" style={{ backgroundColor: props.color }}></span>
				<span className="dot" style={{ backgroundColor: props.color }}></span>
				<span className="dot" style={{ backgroundColor: props.color }}></span>
			</div>
		</div>
	)
}

export default Loader
