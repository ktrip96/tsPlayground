import React, { useState } from 'react'

type Props = {
	name: string
	arr: boolean[]
	fn: () => void
}

const Counter = ({ name, arr, fn }: Props) => {
	const [counter, setCounter] = useState(0)

	console.log(arr, fn)

	return (
		<div className='border-2 p-10 rounded-md shadow-lg'>
			<h1>{name}</h1>
			<button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
			<h2> Counter: {counter}</h2>
		</div>
	)
}

export default Counter
