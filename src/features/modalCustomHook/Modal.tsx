type Props = {
	isOpen: boolean
}

const Modal = ({ isOpen }: Props) => {
	return <div>{isOpen && <h1>Modal File</h1>}</div>
}

export default Modal
