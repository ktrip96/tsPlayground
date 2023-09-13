import Button from './Button'

const Parent = () => {
	return (
		<div className='border-2 border-white p-8 rounded-md'>
			<h1 className='font-xl'>Hello from tailwind</h1>
			<Button className='rounded-full'>Submit</Button>
		</div>
	)
}

export default Parent
