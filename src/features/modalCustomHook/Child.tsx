import React from 'react'
import { useModal } from './useModal'

type Props = {}

const Child = (props: Props) => {
	const { handleModal, Modal } = useModal()

	return (
		<div>
			<h3>Child A</h3>
			<button onClick={handleModal}>Open</button>
			<Modal title='Hello world'>
				<h1>Child one inside modal</h1>
			</Modal>
		</div>
	)
}

export default Child
