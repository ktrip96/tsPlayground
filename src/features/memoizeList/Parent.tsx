import React, { useState } from 'react'
import ListComponent from './ListComponent'

const Parent = () => {
	const [array, setArray] = useState([1, 2, 3])
	const [counter, setCounter] = useState(0)
	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={() => setCounter((prev) => prev + 1)}>+</button>
			{array.map((i, j) => (
				<ListComponent key={j} data={i} />
			))}
			<button onClick={() => setArray((prev) => [...prev, 1])}>Add 1</button>
		</div>
	)
}

export default Parent
