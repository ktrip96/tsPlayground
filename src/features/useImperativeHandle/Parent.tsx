import React, { useRef } from 'react'
import Input, { RefHandler } from './Input'

// We want to access the properties of a child through Ref
// It is not recommended to pass the ref through props
// This is why we use useImperativeHandle

const Parent = () => {
	const formRef = useRef<RefHandler>(null)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		alert(formRef.current?.getNameValue())
		formRef.current?.focus()
		// Focus the input
		// Get the value of the input
	}

	return (
		<div>
			<h1>useImperativeHandle && forwardRef</h1>
			<h4>If we want to forward more than one refs, we must use useImperativeHandle</h4>
			<form onSubmit={handleSubmit}>
				<Input ref={formRef} />
				<button>Submit</button>
			</form>
		</div>
	)
}

export default Parent
