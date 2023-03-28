import React from 'react'

type Props = {
	children: React.ReactNode
	isOpen: boolean
	closeModal: () => void
	title?: string
}

const ModalContent = ({ isOpen, closeModal, children, title }: Props) => {
	if (isOpen)
		return (
			<div>
				{title && 'Title: ' + title}
				This is the Modal Component
				<button onClick={closeModal}>Close</button>
				{children}
			</div>
		)

	return null
}

export default ModalContent
