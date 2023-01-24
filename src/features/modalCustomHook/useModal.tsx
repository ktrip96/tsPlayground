import { useState } from 'react'

export function useModal() {
	const [isOpen, setIsOpen] = useState(false)

	const handleModal = () => setIsOpen((prev) => !prev)
	const Modal = () => (isOpen ? <h1>Modal is Open</h1> : null)

	return { handleModal, Modal }
}
