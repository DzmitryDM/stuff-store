import styles from './ProductsItem.module.scss'
import { Products } from '../../../shared/type/products'
import { Button, PopPupBasket } from '../../../shared/ui'
import { useProductsItem } from './useProductsItem'
import { Link } from 'react-router-dom'
import { usePopPupBasketMessage } from '../../../shared/hooks/usePopPupBasketMessage'
import oops from './../../../shared/ui/icon/Oops-560x496.png'

export function ProductsItem(product: Products) {
	const { id = '', images = [], category = {}, price } = product
	const [alertName, closeName] = usePopPupBasketMessage()
	const [handleOrder, title, isError, scrollTo, refImages] = useProductsItem(
		product,
		id
	)
	
	

	return (
		<div className={styles.wrapperCard}>
			<Link to={`/singleproduct/${id}`}>
				<img
					ref={refImages}
					onClick={scrollTo}
					className={styles.cardImage}
					src={isError ? oops : images[0]}
				/>
			</Link>
			<div className={styles.card}>
				<div className={styles.cardTitle}>{title}</div>
				<div>{category.name}</div>
				<div className={styles.cardBottom}>
					<div className={styles.cardPrice}>{price}$</div>
					<div className={styles.btn}>
						<Button onClick={handleOrder}>Add to cart</Button>
					</div>
				</div>
			</div>
			<PopPupBasket alertName={alertName} callback={closeName} />
		</div>
	)
}
