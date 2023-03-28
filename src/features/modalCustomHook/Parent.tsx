import React from 'react'
import Child from './Child'
import ChildB from './ChildB'

type Props = {}

const Parent = (props: Props) => {
	return (
		<div>
			<h2>Custom Modal Parent Component</h2>
			<Child />
			<ChildB />
		</div>
	)
}

export default Parent
