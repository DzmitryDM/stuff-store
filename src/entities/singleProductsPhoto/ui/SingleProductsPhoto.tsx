import { useEffect, useState } from 'react'
import styles from './SingleProductsPhoto.module.scss'
import { Products } from '../../../shared/type/products'
import Box from '../../../shared/ui/icon/Box.png'

export function SingleProductsPhoto({ images=[] }: Products) {
	const [currentImage, setCurrentImage] = useState<string | null>(null)

const imageSS:string = 'https://sun23-1.userapi.com/impg/BahoA1WWOQzj6y_7pCjwmunHQSNxfr3ee78E9A/ZLgnbP_y9jM.jpg?size=1620x2160&quality=95&sign=fe87a153bdba6e52fffc40ff330a056f&type=album'
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
				{images.length > 1 &&
					images.map((image, i) => (
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
