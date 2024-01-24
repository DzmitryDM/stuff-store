import { NavLink } from 'react-router-dom'
import styles from './SidebarItem.module.scss'
import { Categories } from '../../../shared/type'
import {
	selectOpenBurger,
	setOpenMenuBurger,
} from '../../../shared/model/header-slice/headerSlice'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../shared/hooks-redux/hooksRedux'

export function SidebarItem({ id, name }: Categories) {
	const dispatch = useAppDispatch()
	const isOpenMenuBurger = useSelector(selectOpenBurger)
	const closeBurger = () => {
		if (isOpenMenuBurger) {
			dispatch(setOpenMenuBurger())
		}
	}
	return (
		<nav>
			<NavLink
				to={`/products/${id}`}
				onClick={closeBurger}
				className={({ isActive }) =>
					isActive ? styles.active : styles.sidebarColor
				}
			>
				{name}
			</NavLink>
		</nav>
	)
}
