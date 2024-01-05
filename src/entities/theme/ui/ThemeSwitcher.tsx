import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import styles from './ThemeSwitcher.module.scss'
import { useThemeSwitcher } from '../index'

export function ThemeSwitcher() {
	const [theme, handleTheme] = useThemeSwitcher()
	return (
		<div onClick={handleTheme} className={styles.theme}>
			{theme === 'dark' ? (
				<IoMoon size='27px' />
			) : (
				<IoMoonOutline size='27px' />
			)}
		</div>
	)
}
