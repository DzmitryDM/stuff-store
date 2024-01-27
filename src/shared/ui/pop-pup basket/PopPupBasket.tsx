import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks-redux/hooksRedux'
import styles from './pop-pupBasket.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { addAlertName, selectBasketPopPup } from '../../model'
import { useEffect } from 'react'

interface IPopPupBasket {
	alertName:string,
	callback:()=>void
}

export function PopPupBasket({ alertName='', callback }: IPopPupBasket) {


	useEffect(() => {
		if(alertName.length){
		const timer = setTimeout(callback, 2500)
		return () => clearTimeout(timer)
		}
	}, [alertName])

	return (
		<AnimatePresence>
			{alertName && (
				<motion.div
					className={styles.popPup}
					key='pop'
					initial={{ x: 600 }}
					animate={{ x: 0 }}
					exit={{ x: 600 }}
					transition={{ duration: 0.7 }}
				>
					<span className={styles.cardAlertName}>{alertName}</span> 
				</motion.div>
			)}
		</AnimatePresence>
	)
}
