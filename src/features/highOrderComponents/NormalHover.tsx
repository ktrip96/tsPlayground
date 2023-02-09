import React, { useState } from 'react'

type Props = {}

const NormalHover = (props: Props) => {
	const [counter, setCounter] = useState(0)
	return (
		<div>
			<h1>Hover Function </h1>
			<h3>Counter is: {counter}</h3>
			<button onMouseOver={() => setCounter((prev) => prev + 1)}> + </button>
		</div>
	)
}

export default NormalHover
