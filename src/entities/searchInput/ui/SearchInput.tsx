import styles from './SearchInput.module.scss'
import { BsSearch } from 'react-icons/bs'
import { Input } from '../../../shared/ui'
import { Link } from 'react-router-dom'
import { useSearch } from '../../searchInput/ui/useSearch'
import { AnimatePresence, motion } from 'framer-motion'

interface ISearchVisible {
	searchVisible:string
}

export function SearchInput({searchVisible}:ISearchVisible) {

const searchStyles = styles.inputWrapper + ' ' + searchVisible

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
		<div className={searchStyles}>
			<BsSearch className={styles.searchIcons} />
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
