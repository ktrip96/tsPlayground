type Props = {
	children: React.ReactNode
}

const Sidebar = ({ children }: Props) => {
	return <div className='border-2 border-green-500 w-[500px] h-screen'>{children}</div>
}

export default Sidebar
