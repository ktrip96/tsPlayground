import React, { useState } from 'react'

type Props = {
	name: string
}

const Counter = ({ name }: Props) => {
	const [counter, setCounter] = useState(0)

	return (
		<div className='border-2 p-10 rounded-md shadow-lg'>
			<h1>{name}</h1>
			<button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
			<h2> Counter: {counter}</h2>
		</div>
	)
}

export default Counter
