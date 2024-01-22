import styles from './Header.module.scss'
import logo from './../../../shared/ui/icon/logo.svg'
import { Link } from 'react-router-dom'
import { ThemeSwitcher } from '../../../entities/theme'
import { AuthUser } from '../../../pages/auth-user'
import { Search } from '../../../entities/search'
import { Cart } from '../../../pages/basket/index'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsSearch } from 'react-icons/bs'
import { log } from 'console'
import { useState } from 'react'

				export function Header() {

const [isOpenSearch,setOpenSearch]=useState(false)

const openSearch=()=>{
	setOpenSearch(!isOpenSearch)																			
}

	return (
		<header className={styles.headerContainer}>
			<div className={styles.container}>
				<div className={styles.flex_header}>
					<RxHamburgerMenu className={styles.burgerMenu} size='27' />
					<div className={styles.logo}>
						<Link to={'/'}>
							<img src={logo} alt='logo' />
						</Link>
					</div>
					<BsSearch
						onClick={openSearch}
						className={styles.searchLogo}
						size='27'
					/>
					<Search  isSearch={isOpenSearch} openSearch={openSearch} />
								
					<AuthUser />
					<ThemeSwitcher />
					<Cart />
				</div>
			</div>
		</header>
	)
}
