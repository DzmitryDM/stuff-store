import { useAppDispatch } from '../../../shared/hooks-redux/hooksRedux'
import { addOrder } from '../../../shared/model'
import { Products } from '../../../shared/type/products'

export const useProductsItem = (
	product: Products,
	id: string | number
): () => void => {

	const dispatch = useAppDispatch()

	const handleOrder = () => {
		dispatch(addOrder(product))
	}


	return handleOrder
}
