import React from 'react'

type Props = {
	selectedCountry: string
	setSavedCountry: React.Dispatch<React.SetStateAction<string>>
}

const CountryInfo = ({ selectedCountry, setSavedCountry }: Props) => {
	console.log('CountryInfo rerender')

	return (
		<div style={{ border: '1px solid green', padding: '10px' }}>
			<h3>Selected Country is : {selectedCountry}</h3>
			<button onClick={() => setSavedCountry(selectedCountry)}>Save</button>
		</div>
	)
}

export default CountryInfo
