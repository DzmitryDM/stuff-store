import styles from './Cart.module.scss'
import { FaCartShopping } from 'react-icons/fa6'
import { useCart } from './useCart'
import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import { BasketHeader } from '../../../entities/basket-header'
import { BasketFooter } from '../../../entities/basket-footer'
import { BasketList } from '../../../features/basketList'
import { BasketWrapper } from '../../../features/basketWarapper'


export function Cart() {
	const [products, isOpen, closeCart,  clearCart, ref] = useCart()

const fnBasketHeader = {
	closeCart, clearCart
}


	return (
		<>
			<div onClick={closeCart} className={styles.cart}>
				{products}
				<FaCartShopping size='27px' />
			</div>
			{createPortal(
				<AnimatePresence>
					{isOpen && (
						<BasketWrapper refOpen={ref} fnBasketHeader={fnBasketHeader} />
					)}
				</AnimatePresence>,
				document.body
			)}
		</>
	)
}
