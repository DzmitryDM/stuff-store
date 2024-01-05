import {
	decrementProduct,
	incrementProduct,
	removeProduct,
	setOpen,
} from '../../../shared/model'
import { useAppDispatch } from '../../../shared/hooks-redux/hooksRedux'

export const useBasket = (): [
	(id: string) => void,
	() => void,
	(id: string) => void,
	(id: string) => void
] => {
	
	const dispatch = useAppDispatch()

	const deletedProduct = (id: string) => {
		if (typeof id !== 'undefined') {
			dispatch(removeProduct(id))
		}
	}

	const closeCart = () => {
		dispatch(setOpen(false))
	}
	const incrementByProduct = (id: string) => {
		dispatch(incrementProduct(id))
	}
	const decrementByProduct =  (id: string) => {
		dispatch(decrementProduct(id))
	}

	return [deletedProduct, closeCart, incrementByProduct, decrementByProduct]
}
