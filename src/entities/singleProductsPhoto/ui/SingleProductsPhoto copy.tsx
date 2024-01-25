import {  useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'framer-motion'
import { Products } from '../../../shared/type/products'
import styles from './SingleProductsPhoto.module.scss'

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		}
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		}
	},
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity
}

export const SingleProductsPhoto = ({ images = [] }: Products) => {
	const [[page, direction], setPage] = useState([0, 0])

	
	const imageIndex = wrap(0, images.length, page)

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection])
	}

	return (
		<div className={styles.photoContainer}>
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					className={styles.singleImage}
					key={page}
					src={images[imageIndex]}
					custom={direction}
					variants={variants}
					initial='enter'
					animate='center'
					exit='exit'
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					drag='x'
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x)

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1)
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1)
						}
					}}
				/>
			</AnimatePresence>
			<div className={styles.next} onClick={() => paginate(1)}>
				{'‣'}
			</div>
			<div className={styles.prev} onClick={() => paginate(-1)}>
				{'‣'}
			</div>
		</div>
	)
}