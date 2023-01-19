import React from 'react'
import Counter from './Counter'
import Input from './Input'

type Props = {}

const Form = (props: Props) => {
	console.log('FORM RENDER')

	return (
		<div>
			<h1>Form Component</h1>
			<Counter />
			<Input />
		</div>
	)
}

export default Form
