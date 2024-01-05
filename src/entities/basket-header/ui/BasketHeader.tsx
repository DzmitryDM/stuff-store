import { MdClear } from 'react-icons/md'
import { Button } from '../../../shared/ui'
import styles from './BasketHeader.module.scss'

interface IBasketHeaderType {
	clearCart: () => void
	closeCart: () => void
}




export function BasketHeader({ clearCart, closeCart }: IBasketHeaderType) {
	return (
		<div className={styles.basketTop}>
			<h1>Your cart</h1>
			<Button onClick={clearCart}>Clear cart</Button>
			<MdClear size={30} className={styles.closeBasket} onClick={closeCart} />
		</div>
	)
}
