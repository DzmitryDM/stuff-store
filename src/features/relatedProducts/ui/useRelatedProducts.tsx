import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useGetAllProductsQuery } from '../../../shared/api'
import { Products } from '../../../shared/type/products'
import { SerializedError } from '@reduxjs/toolkit'
import { useParams } from 'react-router-dom'
import { log } from 'console'

export const useRelatedProducts = (): [
	Products[],
	FetchBaseQueryError | SerializedError | undefined,
	boolean,
	boolean
] => {
	const { data = [], error, isLoading, isSuccess } = useGetAllProductsQuery()

	const randomProducts = () => {
		let arrProducts: Products[] = []

		for (let i = 0; i < data.length; i++) {
			const random = Math.random()
			const arrLength = data.length
			const randomNumber = Math.floor(random * arrLength)
	
			if (arrProducts.length < 5) {
				const arrElements = data.find((el, i) => i === randomNumber)
				if (arrElements)
					arrProducts = Array.from(new Set([...arrProducts, arrElements]))
			}
		}

		return arrProducts
	}
	const products = randomProducts()

	return [products, error, isLoading, isSuccess]
}
