import React from 'react'
import { useCounterContext } from './Context'

const Counter = () => {
	const { counter, setCounter } = useCounterContext()
	console.log('COUNTER RENDER')

	return (
		<div>
			<h3>Counter : {counter}</h3>
			<button onClick={() => setCounter((prev) => prev + 1)}>+</button>
		</div>
	)
}

export default Counter
