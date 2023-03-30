import './App.css'
import Parent from './features/reactQuery/Parent'
import { QueryClient, QueryClientProvider } from 'react-query'
// In order to test new components change the folder from which you are importing.
// e.g. Testing useReducer ==> ./features/useReducer/Parent
// Testing useCallBack ==> ./features/useCallBack/Parent

function App() {
	const queryClient = new QueryClient()
	return (
		<div>
			<QueryClientProvider client={queryClient}>
				<Parent />
			</QueryClientProvider>
		</div>
	)
}

export default App
