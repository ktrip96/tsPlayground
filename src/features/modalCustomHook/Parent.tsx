import React from 'react'
import { useModal } from './useModal'

type Props = {}

const InsideModal = () => <h1>Inside the modal</h1>

const Parent = (props: Props) => {
	const { handleModal, Modal } = useModal(<InsideModal />)

	return (
		<div>
			<h1>Custom Modal Parent Component</h1>
			<button onClick={handleModal}>Open</button>
			<Modal />
		</div>
	)
}

export default Parent
