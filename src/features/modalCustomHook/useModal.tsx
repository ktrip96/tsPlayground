import { useState } from 'react'
import ModalContent from './ModalContent'

export function useModal(children: React.ReactNode) {
	const [isOpen, setIsOpen] = useState(false)

	const handleModal = () => setIsOpen((prev) => !prev)
	const Modal = () => (
		<ModalContent isOpen={isOpen} closeModal={() => setIsOpen(false)}>
			{children}
		</ModalContent>
	)

	return { handleModal, Modal }
}
