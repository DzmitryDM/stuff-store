import styles from './FilterByPrice.module.scss'
import { Input } from '../../../shared/ui'
import { useFilterByPrice } from './useFilterByPrice'
import { memo } from 'react'

export const FilterByPrice= memo( function FilterByPrice() {
	const [priceMin, priceMax, handleChangePrice, handleKey, ref] =
		useFilterByPrice()

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
		</div>
	)
})
