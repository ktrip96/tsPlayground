import React from 'react'
import { useModal } from './useModal'

type Props = {}

const ChildB = (props: Props) => {
	const { Modal, handleModal } = useModal()
	return (
		<div>
			ChildB
			<button onClick={handleModal}>Open</button>
			<Modal>Child B Modal here</Modal>
		</div>
	)
}

export default ChildB
