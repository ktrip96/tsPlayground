import React from 'react'

type Props = {}

export type SelectOption = {
	value: string
	label: string
}

type SelectProps = {
	options: SelectOption[]
	onChange: (value: string) => void
}

const Select = ({ options, onChange }: SelectProps) => {
	return (
		<div>
			<select onChange={(e) => onChange(e.target.value)}>
				{options.map((i, index) => (
					<option key={index} label={i.label} value={i.value} />
				))}
			</select>
		</div>
	)
}

export default Select
