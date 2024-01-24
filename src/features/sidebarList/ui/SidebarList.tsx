import { useParams } from 'react-router-dom'
import { useGetAllCategoriesQuery } from '../../../shared/api'
import styles from './SidebarList.module.scss'
import { motion } from 'framer-motion'
import { SidebarItem } from '../../../entities/sidebarItem'
import { FilterByPrice } from '../../../entities/filter-by-price'

interface ISidebarVisible {
	sidebarVisible: string
}

export  function SidebarList({ sidebarVisible }:ISidebarVisible) {

  const sidebarStyles = styles.sidebar + ' ' + sidebarVisible

	const { idProducts } = useParams<string>()
	const { data = [] } = useGetAllCategoriesQuery()


	return (
		<section className={sidebarStyles}>
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
		</section>
	)
}
