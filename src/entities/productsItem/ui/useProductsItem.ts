import { useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../../../shared/hooks-redux/hooksRedux'
import { addOrder } from '../../../shared/model'
import { Products } from '../../../shared/type/products'

export const useProductsItem = (
	product: Products,
	id: string | number
): [
	() => void,
	string | undefined,
	boolean,
	() => void,
	React.RefObject<HTMLImageElement>
] => {
	const [isError, setIsError] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const refImages =
		useRef<HTMLImageElement | null>(null)

	const handleOrder = () => {
		dispatch(addOrder(product))
	}

	const scrollTo = () => {
		window.scrollTo({
			top: 0,
			behavior: 'auto',
		})
	}

	useEffect(() => {
		if (refImages.current) {
			refImages.current.onerror = () => setIsError(true)
		}
	}, [])

	const { title, price } = product

	const titleArr = title
		?.split(' ')
		.map(el => (el.length > 20 ? el.slice(0, 20) : el))
		.join(' ')

	return [handleOrder, titleArr, isError, scrollTo, refImages]
}
