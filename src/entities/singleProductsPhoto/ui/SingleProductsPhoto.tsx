import { useEffect, useState } from 'react'
import styles from './SingleProductsPhoto.module.scss'
import { Products } from '../../../shared/type/products'

export function SingleProductsPhoto({ images=[] }: Products) {
	const [currentImage, setCurrentImage] = useState<string | null>(null)


	useEffect(() => {
		return () => {
			setCurrentImage(null)
		}
	}, [images])


	return (
		<div className={styles.singleWrapperImg}>
			<img
				className={styles.singleImage}
				src={currentImage || images[0]}
				alt='imag'
			/>
			<div className={styles.singleImages}>
				{images.length>1 && images.map((image, i) => (
					<img
						key={i}
						src={image}
						alt='imag'
						onClick={() => setCurrentImage(image)}
					/>
				))}
			</div>
		</div>
	)
}
