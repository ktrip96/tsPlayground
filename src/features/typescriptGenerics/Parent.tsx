import React from 'react'
import GenericSelect from './GenericSelect'
import Select from './Select'
import { SelectOption } from './Select'

type Props = {}

export type Food = {
	price: number
	name: string
}

export type Country = {
	name: string
	lat: number
	long: number
}

const countryOptions: Country[] = [
	{
		name: 'Greece',
		lat: 1,
		long: 2,
	},
	{
		name: 'France',
		lat: 2,
		long: 4,
	},
]

const foodOptions: Food[] = [
	{
		name: 'souvlaki',
		price: 4,
	},
	{
		name: 'pizza',
		price: 2,
	},
]

const Parent = (props: Props) => {
	return (
		<div>
			<h1>Typescript Generics</h1>

			{/* Problems with this approach */}
			{/**
			 * The options must be in a very specific format in order for the Select component to accept them
			 * Select component is not typesafe. We can pass to onChange handler accidently the wrong function
			 *
			 */}

			{/* <Select options={countryOptions} onChange={(v) => console.log(v)} />
			<Select options={foodOptions} onChange={(v) => alert(v)} /> */}
			<GenericSelect<Country> options={countryOptions} onChange={(v) => alert(v)} />
			<GenericSelect<Food> options={foodOptions} onChange={(v) => alert(v)} />
		</div>
	)
}

export default Parent
