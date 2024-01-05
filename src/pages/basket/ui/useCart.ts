import { useRef } from 'react'
import { useAppDispatch } from '../../../shared/hooks-redux/hooksRedux'
import { useSelector } from 'react-redux'
import {
	selectBasketIsOpen,
	selectBasketLength, setOpen
} from '../../../shared/model'
import { clearCart } from '../../../shared/model/index'
import { useClickOutside } from '../../../shared/hooks/useClickOutside'

export const useCart = (): [
	number,
	boolean,
	() => void,
	() => void,
	React.RefObject<HTMLDivElement>
] => {

	const dispatch = useAppDispatch()
	const productsLength = useSelector(selectBasketLength)
	const isOpen = useSelector(selectBasketIsOpen)
	const ref = useRef<HTMLDivElement>(null)

	const closeCart = () => {
		dispatch(setOpen(!isOpen))
	}


	const emptyTrash = () => {
		dispatch(clearCart())
	}

	useClickOutside(ref, () => {
		dispatch(setOpen(false))
	})

	return [productsLength, isOpen, closeCart, emptyTrash, ref]
}
