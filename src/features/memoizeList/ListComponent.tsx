import React, { memo } from 'react'

type Props = {}

const ListComponent = ({ data }: { data: number }) => {
	console.log('List rerender with data: ', data)
	return <div>{data}</div>
}

export default memo(ListComponent)
