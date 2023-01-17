type StateType = {
	name: string
	email: string
	counter: number
	company: string
}

export const initialState: StateType = {
	name: '',
	email: '',
	counter: 0,
	company: '',
}

type ActionType = {
	type: 'INPUT_CHANGE' | 'COUNTER_INCREMENT' | 'COUNTER_DECREMENT'
	payload?: string
	name?: string
}

export const formReducer = (state: StateType, action: ActionType): StateType => {
	switch (action.type) {
		case 'INPUT_CHANGE':
			if (action.payload === undefined || action.name === undefined) return state
			return {
				...state,
				[action.name]: action.payload,
			}
		case 'COUNTER_INCREMENT':
			return {
				...state,
				counter: state.counter + 1,
			}
		case 'COUNTER_DECREMENT':
			return {
				...state,
				counter: state.counter - 1,
			}
		default:
			throw new Error()
	}
}
