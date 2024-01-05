import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks-redux/hooksRedux'
import styles from './pop-pupBasket.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { addAlertName, selectBasketPopPup } from '../../model'
import { useEffect } from 'react'

export function PopPupBasket({ ...props }) {
	const alertName = useSelector(selectBasketPopPup)
	const dispatch = useAppDispatch()

	const closeName = () => {
		dispatch(addAlertName(''))
	}

	useEffect(() => {
	if(alertName.length){
const timer = setTimeout(closeName, 2500)
return () => clearTimeout(timer)
	}	
	}, [alertName])


	return (
		<AnimatePresence>
			{alertName && (
				<motion.div
					className={styles.popPup}
					style={{ position: 'fixed', top: '88px', right: '30px' }}
					key='pop'
					initial={{ x: 600 }}
					animate={{ x: 0 }}
					exit={{ x: 600 }}
					transition={{ duration: 0.7 }}
					{...props}
				>
					<span className={styles.cardAlertName}>{alertName}:</span> added to
					basket
				</motion.div>
			)}
		</AnimatePresence>
	)
}
