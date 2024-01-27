import styles from './SingleProductElements.module.scss'
import { Products } from '../../../shared/type/products'
import { Button, PopPupBasket } from '../../../shared/ui'
import { useAppDispatch } from '../../../shared/hooks-redux/hooksRedux'
import {
	addOrder
} from '../../../shared/model'
import { usePopPupBasketMessage } from '../../../shared/hooks/usePopPupBasketMessage'

export function SingleProductElements(product: Products) {
	const dispatch = useAppDispatch()
	const { id, images, title, category, description, price } = product
	const [alertName, closeName] = usePopPupBasketMessage()

	const handleOrder = () => {
		dispatch(addOrder(product))
	}

	return (
		<div className={styles.productList}>
			<h2 className={styles.productTitle}>{title}</h2>
			<div className={styles.productCategoryName}>{category?.name}</div>
			<div className={styles.productDescription}>{description}</div>
			<div className={styles.cardBottom}>
				<div className={styles.cardPrice}>{price}$</div>
				<Button onClick={handleOrder}>Add to card</Button>
			</div>
			<PopPupBasket alertName={alertName} callback={closeName} />
		</div>
	)
}
