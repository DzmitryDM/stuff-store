import styles from './Sidebar.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { SidebarList } from '../../sidebarList'
import { useSidebar } from './useSidebar'

export function Sidebar() {

const [isOpenMenuBurger, refOutside] = useSidebar()

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
							<SidebarList refOutside={refOutside} sidebarVisible={styles.sidebarVisible} />
					 </motion.div>
				)}
			</AnimatePresence>
			<SidebarList sidebarVisible={styles.sidebarHidden} />
		</>
	)
}
