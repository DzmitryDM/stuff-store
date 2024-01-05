import { useParams } from 'react-router-dom'
import { FilterByPrice } from '../../../entities/filter-by-price'
import { SidebarItem } from '../../../entities/sidebarItem'
import { useGetAllCategoriesQuery, useGetProductsByCategoriesQuery } from '../../../shared/api'
import styles from './Sidebar.module.scss'


export  function Sidebar() {
	const { idProducts } = useParams<string>()
const { data = [] } = useGetAllCategoriesQuery()


	return (
		<div className={styles.sidebar}>
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
		</div>
	)
}
