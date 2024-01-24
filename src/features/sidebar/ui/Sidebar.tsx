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
						<motion.section
							key='sidebar'
							initial={{ x: -100 }}
							animate={{ x: 0 }}
							exit={{ x: -100 }}
							transition={{ duration: 0.2 }}
							ref={refOutside}
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
