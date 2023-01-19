import React from 'react'
import { useNameContext } from './Context'

const Input = () => {
	console.log('INPUT RENDER')
	const { name, setName } = useNameContext()
	return (
		<div>
			<h3>Input</h3>
			<input type='text' value={name} onChange={(e) => setName(e.target.value)} />
		</div>
	)
}

export default Input
