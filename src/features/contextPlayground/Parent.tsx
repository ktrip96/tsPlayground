import React from 'react'
import { FormContextProvider } from './Context'
import Form from './Form'

type Props = {}

const Parent = (props: Props) => {
	return (
		<div>
			<FormContextProvider>
				<Form />
			</FormContextProvider>
		</div>
	)
}

export default Parent
