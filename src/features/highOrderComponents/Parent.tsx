import React from 'react'
import NormalClick from './NormalClick'
import NormalHover from './NormalHover'

type Props = {}

const Parent = (props: Props) => {
	return (
		<div>
			<NormalClick />
			<NormalHover />
		</div>
	)
}

export default Parent
