import Box from '../../../shared/ui/icon/Box.png'
import computer from '../../../shared/ui/icon/computer.png'
import styles from './Banner.module.scss'

export function Banner() {
	return (
		<section className={styles.home}>
			<img className={styles.main_images} src={Box} alt='img1' />
			<div className={styles.images}>
				<img className={styles.images2} src={computer} alt='img2' />
			</div>
		</section>
	)
}
