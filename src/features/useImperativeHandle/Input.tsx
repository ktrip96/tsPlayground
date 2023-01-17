import React, { useRef, useImperativeHandle, forwardRef } from 'react'

export type RefHandler = {
	getNameValue: () => string | undefined
	focus: () => void
	inputRef: React.RefObject<HTMLInputElement>
}

const Input = forwardRef<RefHandler>((props, ref) => {
	const nameRef = useRef<HTMLInputElement>(null)

	useImperativeHandle(ref, () => ({
		getNameValue: () => nameRef.current?.value,
		focus: () => nameRef.current?.focus(),
		inputRef: nameRef,
	}))

	return (
		<div>
			<input ref={nameRef} type='text' placeholder='Enter name' />
		</div>
	)
})

export default Input
