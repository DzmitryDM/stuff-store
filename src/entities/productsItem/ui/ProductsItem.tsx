import styles from './ProductsItem.module.scss'
import { Products } from '../../../shared/type/products'
import { Button, PopPupBasket } from '../../../shared/ui'
import { useProductsItem } from './useProductsItem'
import { Link } from 'react-router-dom'

export function ProductsItem(product: Products) {
	const { id = '', images = [], category = {}, price } = product

	const [handleOrder, title] = useProductsItem(product, id)

	const scrollTo = () => {
		window.scrollTo({
			top: 0,
			behavior: 'auto',
		})
	}

	return (
		<div className={styles.wrapperCard}>
			<Link to={`/singleproduct/${id}`}>
				<img
					onClick={scrollTo}
					className={styles.cardImage}
					src={images[0]}
					alt='images'
				/>
			</Link>
			<div className={styles.card}>
				<div className={styles.cardTitle}>{title}</div>
				<div>{category.name}</div>
				<div className={styles.cardBottom}>
					<div className={styles.cardPrice}>{price}$</div>
					<Button onClick={handleOrder}>Add to cart</Button>
				</div>
			</div>
			<PopPupBasket />
		</div>
	)
}
