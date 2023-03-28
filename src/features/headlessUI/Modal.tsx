import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

type Props = {
	isOpen: boolean
	onClose: () => void
}

const Modal = ({ isOpen, onClose }: Props) => {
	return (
		<Transition show={isOpen} as={Fragment}>
			<Dialog onClose={onClose} className='relative z-50 scale'>
				<Transition.Child
					enter='transition-opacity ease-linear duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='transition-opacity ease-linear duration-300'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-black/30' aria-hidden='true' />

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-10'>
							<Transition.Child
								enter='transition ease-in-out duration-300 transform'
								enterFrom='translate-x-full'
								enterTo='translate-x-0'
								leave='transition ease-in-out duration-300 transform'
								leaveFrom='translate-x-0'
								leaveTo='-translate-x-full'
							>
								<Dialog.Panel className='w-full max-w-lg rounded bg-white p-10'>
									<Dialog.Title>Deactivate account</Dialog.Title>
									<Dialog.Description>This will permanently deactivate your account</Dialog.Description>

									<p>
										Are you sure you want to deactivate your account? All of your data will be permanently
										removed. This action cannot be undone.
									</p>

									<button onClick={onClose}>X</button>
									<button onClick={onClose}>Cancel</button>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Transition.Child>
			</Dialog>
		</Transition>
	)
}

export default Modal
