import React, { forwardRef, RefObject, useImperativeHandle, useRef } from 'react'

type Props = {}

export type RefHandler = {
	getNameValue: () => string | undefined
	getPhoneValue: () => string | undefined
	getEmailValue: () => string | undefined
}

const CustomForm = React.forwardRef<RefHandler, Props>((props: Props, ref) => {
	const nameRef = useRef<HTMLInputElement>(null)
	const phoneRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)

	useImperativeHandle(ref, () => {
		return {
			getNameValue: () => nameRef.current?.value,
			getPhoneValue: () => phoneRef.current?.value,
			getEmailValue: () => emailRef.current?.value,
		}
	})

	return (
		<div>
			<input type='text' placeholder='Enter name' ref={nameRef} />
			<input type='text' placeholder='Enter email' ref={emailRef} />
			<input type='text' placeholder='Enter phone' ref={phoneRef} />
			<button type='submit'>Submit</button>
		</div>
	)
})

export default CustomForm
