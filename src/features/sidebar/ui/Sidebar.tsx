import styles from './Sidebar.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { SidebarList } from '../../sidebarList'
import { useSelector } from 'react-redux'
import {
	selectOpenBurger,
	setOpenMenuBurger,
} from '../../../shared/model/header-slice/headerSlice'
import { useRef } from 'react'
import { useAppDispatch } from '../../../shared/hooks-redux/hooksRedux'
import { useClickOutside } from '../../../shared/hooks/useClickOutside'

export function Sidebar() {
	const refOutside = useRef(null)
	const dispatch = useAppDispatch()
	const isOpenMenuBurger = useSelector(selectOpenBurger)
	useClickOutside(refOutside, () => dispatch(setOpenMenuBurger()))

	return (
		<>
			<AnimatePresence>
				{isOpenMenuBurger && (
					<motion.div
						key='outside'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className={styles.outside}
					>
						<motion.section
							ref={refOutside}
							key='sidebar'
							initial={{ x: -100 }}
							animate={{ x: 0 }}
							exit={{ x: -100 }}
							transition={{ duration: 0.2 }}
							className={styles.sidebar}
						>
							<SidebarList sidebarVisible={styles.sidebarVisible} />
						</motion.section>
					</motion.div>
				)}
			</AnimatePresence>
			<SidebarList sidebarVisible={styles.sidebarHidden} />
		</>
	)
}
