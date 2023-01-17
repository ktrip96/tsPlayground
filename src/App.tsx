import React, { useReducer } from 'react'
import './App.css'
import { formReducer, stateType } from './formReducer'

const initialState: stateType = {
	count: 0,
	name: '',
}

function App() {
	const [state, dispatch] = useReducer(formReducer, initialState)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: 'INPUT_CHANGE', payload: e.target.value })
	}

	return (
		<div>
			<h1>Hello world</h1>
			<h2>{state.count}</h2>
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
			<input type='text' placeholder='name' onChange={handleChange} />
			<h2>{state.name}</h2>
		</div>
	)
}

export default App
