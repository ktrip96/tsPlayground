import React, { useMemo, useState } from 'react'
import Countries from './Countries'
import CountryInfo from './CountryInfo'

type Props = {}

const Parent = (props: Props) => {
	const countries = useMemo(() => ['Greece', 'Albania', 'Boulgaria'], [])

	// *** Description of the Problem ***
	// When the selectedCountry changes, Countries and CountryInfo are being rerendered.
	// This behavior is considered unwanted, because when the selectedCountry changes
	// there is no need for Countries component to rerender itself.
	// The same is true for savedCountry.
	// When the savedCountry changes, we don't want the CountryInfo to be rerendered.
	// This is where useMemo comes handy.

	const [selectedCountry, setSelectedCountry] = useState(countries[0])
	const [savedCountry, setSavedCountry] = useState(countries[0])

	const countryList = useMemo(() => {
		return (
			<Countries savedCountry={savedCountry} setSelectedCountry={setSelectedCountry} countries={countries} />
		)
	}, [countries, savedCountry])

	const countryInfo = useMemo(() => {
		return <CountryInfo selectedCountry={selectedCountry} setSavedCountry={setSavedCountry} />
	}, [selectedCountry])

	return (
		<div>
			<h1>Use memo</h1>
			{countryList}
			{countryInfo}
		</div>
	)
}

export default Parent
