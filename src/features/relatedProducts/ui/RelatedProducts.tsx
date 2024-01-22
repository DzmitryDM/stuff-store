import { ProductsItem } from '../../../entities/productsItem'
import styles from './RelatedProducts.module.scss'
import { useRelatedProducts } from './useRelatedProducts'

export  function RelatedProducts() {

const [products, error, isLoading, isSuccess] = useRelatedProducts()



	return (
		<>
			{isLoading && (
				<h1 style={{ fontSize: '30px', fontWeight: '700' }}>Loading...</h1>
			)}
			{error && <div>Error...</div>}
			{isSuccess && (
				<section className={styles.relatedProducts}>
					{products.map((products, i) => (
						<ProductsItem key={products.id} {...products} />
					))}
				</section>
			)}
		</>
	)
}
