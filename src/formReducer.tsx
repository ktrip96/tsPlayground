export type stateType = {
	count: number
	name: string
}

export type actionType = {
	type: 'INCREMENT' | 'DECREMENT' | 'INPUT_CHANGE'
	payload?: string
}

export const formReducer = (state: stateType, action: actionType): stateType => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1,
			}
		case 'DECREMENT':
			return {
				...state,
				count: state.count - 1,
			}
		case 'INPUT_CHANGE':
			return {
				...state,
				name: action.payload ?? '',
			}
		default:
			throw new Error()
	}
}
