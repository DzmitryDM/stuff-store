import styles from './FilterByPrice.module.scss'
import { Button, Input } from '../../../shared/ui'
import { useFilterByPrice } from './useFilterByPrice'

export function FilterByPrice() {
	const [
		priceMin,
		priceMax,
		handleChangePrice,
		handleKey,
		ref,
		handleFilterPrice,
	] = useFilterByPrice()

	return (
		<div className={styles.filter}>
			<h3>Price</h3>
			<div className={styles.priceWrapper}>
				<Input
					onChange={handleChangePrice}
					name='inputMin'
					type='number'
					placeholder='min'
					className={styles.price}
					value={priceMin}
					onKeyDown={handleKey}
				/>
				<Input
					ref={ref}
					onChange={handleChangePrice}
					name='inputMax'
					type='number'
					placeholder='max'
					className={styles.price}
					value={priceMax}
				/>
			</div>
			<Button onKeyDown={handleFilterPrice} onClick={handleFilterPrice}>
				Apply
			</Button>
		</div>
	)
}
