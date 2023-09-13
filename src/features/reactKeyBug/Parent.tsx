import { useState } from 'react'
import Counter from './Counter'

const Parent = () => {
	const [isTrip, setIsTrip] = useState(true)

	const constructNewArray = [isTrip, false]

	const newFunction = () => console.log(isTrip)

	return (
		<div className='border-2 border-green-400 p-4 rounded-md'>
			{isTrip ? (
				<Counter name='Trip' arr={constructNewArray} fn={newFunction} />
			) : (
				<Counter name='George' arr={constructNewArray} fn={newFunction} />
			)}
			<button onClick={() => setIsTrip((prev) => !prev)} className='my-4'>
				Swap
			</button>
		</div>
	)
}

export default Parent
