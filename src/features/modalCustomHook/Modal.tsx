import React from 'react'

type Props = {
	isOpen: boolean
}

const Modal = ({ isOpen }: Props) => {
	return <div>{isOpen && <h1>Modal</h1>}</div>
}

export default Modal
