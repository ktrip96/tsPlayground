import React, { useReducer } from 'react'
import { formReducer, initialState } from './formReducer'

type Props = {}

const Parent = (props: Props) => {
	const [state, dispatch] = useReducer(formReducer, initialState)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
		dispatch({ type: 'INPUT_CHANGE', name: e.target.name, payload: e.target.value })
	}

	return (
		<div>
			<h1>Use Reducer Hook</h1>
			<form onSubmit={(e) => e.preventDefault()}>
				<input type='text' placeholder='Enter name' name='name' value={state.name} onChange={handleChange} />
				<h3>{state.name}</h3>
				<input
					type='text'
					placeholder='Enter email'
					name='email'
					value={state.email}
					onChange={handleChange}
				/>
				<h3>{state.email}</h3>
				<h3>Counter : {state.counter}</h3>
				<button onClick={() => dispatch({ type: 'COUNTER_INCREMENT' })}>+</button>
				<button onClick={() => dispatch({ type: 'COUNTER_DECREMENT' })}>-</button>
				<br />
				<select onChange={handleChange} name='company' value={state.company}>
					<option value=''>Select a company</option>
					<option value='apple'>Apple</option>
					<option value='facebook'>Facebook</option>
					<option value='google'>Google</option>
				</select>
				<h3>{state.company}</h3>
			</form>
		</div>
	)
}

export default Parent
