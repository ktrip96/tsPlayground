import React, { createContext, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react'

type Props = {
	children: ReactNode
}

type ContextType = {
	counter: number
	name: string
	setCounter: React.Dispatch<SetStateAction<number>>
	setName: React.Dispatch<React.SetStateAction<string>>
}

type CounterContextType = {
	counter: number
	setCounter: React.Dispatch<SetStateAction<number>>
}

type NameContextType = {
	name: string
	setName: React.Dispatch<React.SetStateAction<string>>
}

const CounterContext = createContext<CounterContextType>({} as CounterContextType)
const NameContext = createContext<NameContextType>({} as NameContextType)

// const FormContext = createContext<ContextType>({} as ContextType)

const FormContextProvider = ({ children }: Props) => {
	const [counter, setCounter] = useState(0)
	const [name, setName] = useState('')

	const counterValue = useMemo(() => {
		return { counter, setCounter }
	}, [counter, setCounter])

	const nameValue = useMemo(() => {
		return { name, setName }
	}, [name, setName])

	return (
		<CounterContext.Provider value={counterValue}>
			<NameContext.Provider value={nameValue}>{children}</NameContext.Provider>
		</CounterContext.Provider>
	)
}

const useCounterContext = () => useContext(CounterContext)
const useNameContext = () => useContext(NameContext)

export { FormContextProvider }
export { useCounterContext, useNameContext }
