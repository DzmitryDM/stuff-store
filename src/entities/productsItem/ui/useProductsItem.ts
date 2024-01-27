


import { useAppDispatch } from '../../../shared/hooks-redux/hooksRedux'
import { addOrder } from '../../../shared/model'
import { Products } from '../../../shared/type/products'

export const useProductsItem = (
	product: Products,
	id: string | number
): [() => void, string | undefined] => {
	const dispatch = useAppDispatch()

	const handleOrder = () => {
		dispatch(addOrder(product))
	}

	const { title,price } = product

	const titleArr = title
		?.split(' ')
		.map(el => (el.length > 20 ? el.slice(0, 20) : el))
		.join(' ')


	return [handleOrder, titleArr]
}
