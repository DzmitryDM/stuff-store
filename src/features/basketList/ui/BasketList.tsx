import { useSelector } from 'react-redux'
import { selectBasket } from '../../../shared/model'
import { BasketItem } from '../../../entities/basketItem'

export function BasketList() {
	const products = useSelector(selectBasket)



	return (
		<>
			{!products.length ? (
				<h2>Your cart is empty</h2>
			) : (
				products.map(product => <BasketItem key={product.id} {...product} />)
			)}
		</>
	)
}
