import axios from 'axios'
import { useEffect, useState } from 'react'

const Parent = () => {
	const [counter, setCounter] = useState(0)
	const [singleProduct, setSingleProduct] = useState('')
	const fetchProduct = async () => {
		try {
			const response = await getSingleProduct()
			setSingleProduct(response.title)
		} catch (e) {
			console.log('error: ', e)
		}
	}

	useEffect(() => {
		setTimeout(() => {
			fetchProduct()
		}, 3000)
	}, [])

	return (
		<div>
			{singleProduct === '' ? (
				<div>
					<h1>We have no products</h1>
					<h2>Counter is : {counter} </h2>
					<button onClick={() => setCounter((prev) => prev + 1)}>Add</button>
				</div>
			) : (
				<>
					<h1>{singleProduct}</h1>
					<h2>Counter is : {counter}</h2>
				</>
			)}
		</div>
	)
}

const getSingleProduct = async (): Promise<{ title: string }> => {
	const url = 'https://dummyjson.com/products/1'
	return axios.get(url).then((r) => r.data)
}

export default Parent
