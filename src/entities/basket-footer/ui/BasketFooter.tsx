import { useSelector } from 'react-redux'
import { Button } from '../../../shared/ui'
import styles from './BasketFooter.module.scss'
import { selectBasketTotalPrice } from '../../../shared/model'



export  function BasketFooter() {
	const totalPrice = useSelector(selectBasketTotalPrice)
	return (
		<div className={styles.basketFooter}>
			<div className={styles.totalPrice}>
				Total price: <span className={styles.price}>{totalPrice} $</span>
			</div>
			<Button >Proceed to checkout</Button>
		</div>
	)
}
