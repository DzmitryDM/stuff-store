import { useParams } from 'react-router-dom'
import { useGetSingleProductsQuery } from '../../../shared/api'
import styles from './SingleProductsList.module.scss'
import { SingleProductElements } from '../../../entities/singleProductElements'
import { SingleProductsPhoto } from '../../../entities/singleProductsPhoto'

export function SingleProductList() {
	const { idProduct } = useParams<{ idProduct: any }>()

	const { data, isSuccess, isError } = useGetSingleProductsQuery(idProduct)

	return (
		<>
			{isError && <div>Error...</div>}

			{isSuccess && (
				<section className={styles.singleProducts}>
					<SingleProductsPhoto {...data} />
					<SingleProductElements {...data} />
				</section>
			)}
		</>
	)
}
