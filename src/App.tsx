import './App.css'
import Parent from './features/modalCustomHook/Parent'
// In order to test new components change the folder from which you are importing.
// e.g. Testing useReducer ==> ./features/useReducer/Parent
// Testing useCallBack ==> ./features/useCallBack/Parent

function App() {
	return (
		<div>
			<Parent />
		</div>
	)
}

export default App
