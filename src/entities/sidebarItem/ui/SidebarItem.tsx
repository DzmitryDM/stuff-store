import { NavLink } from 'react-router-dom'
import styles from './SidebarItem.module.scss'
import { Categories } from '../../../shared/type'



export function SidebarItem({ id,name}:Categories) {



	return (
		<nav>
			<NavLink
				to={`/products/${id}`}
				className={({ isActive }) =>
					isActive ? styles.active : styles.sidebarColor
				}
			>
				{name}
			</NavLink>
		</nav>
	)
}
