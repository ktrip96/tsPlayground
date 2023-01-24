import React from 'react'
import { useModal } from './useModal'

type Props = {}

const Parent = (props: Props) => {
	const { handleModal, Modal } = useModal()

	return (
		<div>
			<h1>Custom Modal Parent Component</h1>
			<button onClick={handleModal}>Open</button>
			<Modal />
		</div>
	)
}

export default Parent
