import axios from 'axios'
import { useEffect, useState } from 'react'

const Parent = () => {
	const [singleProduct, setSingleProduct] = useState({})

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = getSingleProduct()
				console.log('Response: ', response)
			} catch (e) {
				console.log('error: ', e)
			}
		}
		fetchProduct()
	}, [])
	return (
		<div>
			{JSON.stringify(singleProduct) === '{}' ? <h1>We have no products</h1> : <h1>{singleProduct.title}</h1>}
		</div>
	)
}

const getSingleProduct = async (): Promise<any> => {
	const url = 'https://dummyjson.com/products/1'
	return axios.get(url).then((r) => r.data)
}

export default Parent
