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
					<div
						className={styles.searchWrapper}
					>
						<motion.div
							key='container'
							initial={{ y: -100 }}
							animate={{ y: 0 }}
							exit={{ y: -100 }}
							transition={{ duration: 0.3 }}
							ref={refSearch}
							className={styles.searchContainer}
						>
							<SearchInput searchVisible={styles.searchVisible} />
							<MdClear
								className={styles.searchVisible}
								onClick={openSearch}
								size='30'
							/>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
			<SearchInput searchVisible={styles.searchHidden} />
		</>
	)
}
