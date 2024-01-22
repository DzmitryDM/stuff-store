import { BsSearch } from 'react-icons/bs'
import { SearchInput } from '../../searchInput'
import styles from './Search.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { MdClear } from 'react-icons/md'
import { useClickOutside } from '../../../shared/hooks/useClickOutside'
import { useRef } from 'react'

interface ISearch {
	isSearch: boolean
	openSearch: ()=>void
}

export function Search({ isSearch, openSearch }: ISearch) {
const refSearch = useRef(null)

	useClickOutside(refSearch,openSearch)

	return (
		<>
			<AnimatePresence>
				{isSearch && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className={styles.searchWrapper}
					>
						<motion.div
							ref={refSearch}
							initial={{ y: -100 }}
							animate={{ y: 0 }}
							exit={{ y: -100 }}
							transition={{ duration: 0.3 }}
							className={styles.searchContainer}
						>
							<SearchInput searchVisible={styles.searchVisible} />
							<MdClear
								className={styles.searchVisible}
								onClick={openSearch}
								size='30'
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			<SearchInput searchVisible={styles.searchHidden} />
		</>
	)
}
