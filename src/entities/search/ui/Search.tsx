import styles from './Search.module.scss'
import { BsSearch } from 'react-icons/bs'
import { Input } from '../../../shared/ui'
import { Link } from 'react-router-dom'
import { useSearch } from './useSearch'
import { AnimatePresence, motion } from 'framer-motion'

export function Search() {
	const [
		products,
		value,
		isOpen,
		isSuccess,
		ref,
		searchTerm,
		handleReset,
		handleOpen,
		handleSearch,
	] = useSearch()

	return (
		<div className={styles.input_wrapper}>
			<BsSearch className={styles.search} />

			<Input
				autoComplete='off'
				type='text'
				className={styles.input}
				value={value}
				onFocus={handleOpen}
				onChange={handleSearch}
			/>
			<AnimatePresence>
				{searchTerm && isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						ref={ref}
						className={styles.box}
					>
						{!products?.length
							? 'No results'
							: isSuccess &&
							  products.map(({ id, images = [], title }) => {
									return (
										<Link
											className={styles.item}
											key={id}
											to={`/singleProduct/${id}`}
											onClick={handleReset}
										>
											<img
												className={styles.image}
												src={images[0]}
												alt='images'
											/>
											<h4 className={styles.item}>{title}</h4>
										</Link>
									)
							  })}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
