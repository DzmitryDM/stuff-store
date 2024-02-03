import MacBookAir13 from '../../../shared/ui/icon/MacBookAir13.jpg'
import styles from './Banner.module.scss'

export function Banner() {
	return (
		<section className={styles.banner}>
			<img className={styles.main_images} src={MacBookAir13} alt='img1' />
		</section>
	)
}
