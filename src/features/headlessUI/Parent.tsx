import React, { useState } from 'react'
import Modal from './Modal'

type Props = {}

const Parent = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='h-screen'>
			<button onClick={() => setIsOpen(true)}>Open / Close</button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</div>
	)
}

export default Parent
