import React, { useState } from 'react'

type Props = {}

const NormalClick = (props: Props) => {
	const [counter, setCounter] = useState(0)
	return (
		<div>
			<h1>Click Function</h1>
			<h3>Counter is: {counter}</h3>
			<button onClick={() => setCounter((prev) => prev + 1)}> + </button>
		</div>
	)
}

export default NormalClick
