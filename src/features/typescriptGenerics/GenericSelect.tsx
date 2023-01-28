import React from 'react'

type Props = {}

export type SelectOption = {
	name: string
	label: string
}

type SelectProps = {
	options: SelectOption[]
	onChange: (value: string) => void
}

type Base = {
	name: string
}

type GenericSelectProps<Type> = {
	options: Type[]
	onChange: (value: string) => void
}

const GenericSelect = <Type extends Base>({ options, onChange }: GenericSelectProps<Type>) => {
	return (
		<div>
			<select onChange={(e) => onChange(e.target.value)}>
				{options.map((i, index) => (
					<option key={index} label={i.name} value={i.name} />
				))}
			</select>
		</div>
	)
}

export default GenericSelect
