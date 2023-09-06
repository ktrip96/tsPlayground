import { useState } from 'react'
import Counter from './Counter'

const Parent = () => {
	const [isTrip, setIsTrip] = useState(true)

	return (
		<div className='border-2 border-green-400 p-4 rounded-md'>
			{isTrip ? <Counter name='Trip' key='Trip' /> : <Counter name='George' key='George' />}
			<button onClick={() => setIsTrip((prev) => !prev)} className='my-4'>
				Swap
			</button>
		</div>
	)
}

export default Parent
