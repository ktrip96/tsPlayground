import React from 'react'

type Props = {
	children: React.ReactNode
	isOpen: boolean
	closeModal: () => void
}

const ModalContent = ({ isOpen, closeModal, children }: Props) => {
	if (isOpen)
		return (
			<div>
				This is the Modal Component
				<button onClick={closeModal}>Close</button>
				{children}
			</div>
		)

	return null
}

export default ModalContent
