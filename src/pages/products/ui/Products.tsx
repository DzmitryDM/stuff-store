import { memo } from 'react'
import { ProductsItem } from '../../../entities/productsItem'
import styles from './Products.module.scss'
import { useProducts } from './useProducts'

export const Products = memo(  function Products() {

	const [isSuccess,products] = useProducts()
 
return (
		<>
		{isSuccess && (
		<div className={styles.productsContainer}>
				<div className={styles.productCard}>
					{ products.map(product => (
						<ProductsItem key={product.id} {...product} />
					))}
				</div>
		</div>
		)}
		</>
	)
})
