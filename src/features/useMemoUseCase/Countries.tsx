import React from 'react'

type Props = {
	savedCountry: string
	setSelectedCountry: React.Dispatch<React.SetStateAction<string>>
	countries: string[]
}

const Countries = ({ savedCountry, setSelectedCountry, countries }: Props) => {
	console.log('Countries rerender')
	return (
		<div style={{ border: '1px solid red', padding: '10px' }}>
			{countries.map((i, index) => (
				<p key={index} onClick={() => setSelectedCountry(i)}>
					{i}
				</p>
			))}

			<h3>Saved country is : {savedCountry}</h3>
		</div>
	)
}

export default Countries
