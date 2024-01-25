import { Products } from '../../../shared/type/products'
import styles from './BasketItem.module.scss'
import { CiCirclePlus } from 'react-icons/ci'
import { CiCircleMinus } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import { useBasket } from './useBasket'
import { Link } from 'react-router-dom'
import { memo } from 'react'

export  function BasketItem({
	id = '',
	images = [],
	title= '',
	category = {},
	price,
	quantity,
}: Products) {
	const [
		deletedProduct,
		closeCart,
		incrementByProduct,
		decrementByProduct,
		titleBasket,
	] = useBasket()

	const titleBas =titleBasket(title)


	return (
		<section className={styles.basketContainer}>
			<Link onClick={closeCart} to={`/singleproduct/${id}`}>
				<img className={styles.image} src={images[0]} alt='' />
			</Link>
			<div className={styles.titleCategoriesWrapper}>
				<div className={styles.wrapperTitle}>
					<div className={styles.title}>{titleBas} </div>
					<div className={styles.categories}>{category.name}</div>
				</div>
			</div>
			<div className={styles.price}>{price} $</div>
			<div className={styles.quantityWrapper}>
				<CiCircleMinus
					className={styles.qty}
					onClick={() => decrementByProduct(id)}
					size={30}
				/>
				<div className={styles.quantity}>{quantity}</div>
				<CiCirclePlus
					onClick={() => incrementByProduct(id)}
					size={30}
					className={styles.qty}
				/>
			</div>

			<MdDelete
				onClick={() => deletedProduct(id)}
				size={30}
				className={styles.clear}
			/>
		</section>
	)
}
