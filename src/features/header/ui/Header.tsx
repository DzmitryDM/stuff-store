import styles from './Header.module.scss'
import logo from './../../../shared/ui/icon/logo.svg'
import { Link } from 'react-router-dom'
import { ThemeSwitcher } from '../../../entities/theme'
import { AuthUser } from '../../../pages/auth-user'
import { Search } from '../../../entities/search'
import { Cart } from '../../../pages/basket/index'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsSearch } from 'react-icons/bs'
import { useHeader } from './useHeader'

				export function Header() {

const [isOpenSearch, isOpenMenu, handleMenuBurger, handleSearch] = useHeader()

	return (
		<header className={styles.headerContainer}>
			<div className={styles.container}>
				<div className={styles.flex_header}>
					<RxHamburgerMenu
						onClick={handleMenuBurger}
						className={styles.burgerMenu}
						size='27'
					/>
					<div className={styles.logo}>
						<Link to={'/'}>
							<img src={logo} alt='logo' />
						</Link>
					</div>
					<BsSearch
						onClick={handleSearch}
						className={styles.searchLogo}
						size='27'
					/>
					<Search isSearch={isOpenSearch} openSearch={handleSearch} />
					<AuthUser />
					<ThemeSwitcher />
					<Cart />
				</div>
			</div>
		</header>
	)
}
