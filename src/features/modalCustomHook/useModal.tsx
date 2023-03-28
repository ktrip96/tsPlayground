import { useState } from 'react'
import ModalContent from './ModalContent'

type ModalContentProps = {
	children: React.ReactNode
	title?: string
}

export function useModal() {
	const [isOpen, setIsOpen] = useState(false)

	const handleModal = () => setIsOpen((prev) => !prev)
	const Modal = ({ children, title }: ModalContentProps) => (
		<ModalContent isOpen={isOpen} title={title} closeModal={() => setIsOpen(false)}>
			{children}
		</ModalContent>
	)

	return { handleModal, Modal }
}
