import React, { useState } from 'react'
import useDebounce from './useDebounce'

type Props = {}

const Parent = (props: Props) => {
	const [name, setName] = useState('')
	const debouncedValue = useDebounce<string>(name, 500)

	return (
		<div>
			<h1>Debounce</h1>
			<input
				type='text'
				placeholder='What is your name?'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<h3>State value: {name}</h3>
			<h3>Debounced value: {debouncedValue}</h3>
		</div>
	)
}

export default Parent
