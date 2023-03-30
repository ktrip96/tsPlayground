type Props = {
	children: React.ReactNode
}

const Main = ({ children }: Props) => {
	return <div className='border-2 border-red-500 h-screen w-full'>{children}</div>
}

export default Main
