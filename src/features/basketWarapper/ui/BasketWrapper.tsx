import { BasketFooter } from '../../../entities/basket-footer'
import { BasketHeader } from '../../../entities/basket-header'
import { BasketList } from '../../basketList'
import {motion} from 'framer-motion'
import styles from './BasketWrapper.module.scss'
import { isMapIterator } from 'util/types'
import { IBasketHeaderType } from '../../../shared/type/basket'


interface IBasketWrapper {
	refOpen: React.RefObject<HTMLDivElement>
	fnBasketHeader: IBasketHeaderType
}



export function BasketWrapper({ refOpen, fnBasketHeader }: IBasketWrapper) {
	return (
		<motion.div
			className={styles.basketWrapper}
			key='basket'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			<div ref={refOpen} className={styles.basket}>
				<BasketHeader {...fnBasketHeader} />
				<BasketList />
				<BasketFooter />
			</div>
		</motion.div>
	)
}
