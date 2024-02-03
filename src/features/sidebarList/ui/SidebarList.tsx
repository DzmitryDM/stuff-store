import { useParams } from 'react-router-dom'
import { useGetAllCategoriesQuery } from '../../../shared/api'
import styles from './SidebarList.module.scss'
import { motion } from 'framer-motion'
import { SidebarItem } from '../../../entities/sidebarItem'
import { FilterByPrice } from '../../../entities/filter-by-price'

interface ISidebarVisible {
	sidebarVisible: string
	refOutside?: React.Ref<HTMLElement>
}

export function SidebarList({ sidebarVisible, refOutside }: ISidebarVisible) {
	const sidebarStyles = styles.sidebar + ' ' + sidebarVisible

	const { idProducts } = useParams<string>()
	const { data = [] } = useGetAllCategoriesQuery()

	return (
		<motion.section
			key='sidebar'
			initial={{ x: -1000 }}
			animate={{ x: 0 }}
			exit={{ x: -1000 }}
			transition={{ duration: 0.1 }}
			 ref={refOutside}
			className={sidebarStyles}
		>
			<div className={styles.categories}>
				<h3>Categories</h3>
				{data
					.filter((c, i) => i < 5)
					.map(categories => (
						<SidebarItem key={categories.id} {...categories} />
					))}
			</div>
			<div className={styles.border}></div>
			{idProducts && <FilterByPrice />}
		</motion.section>
	)
}
