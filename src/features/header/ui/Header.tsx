import styles from './styles.module.scss';
import logo from './../../../shared/ui/icon/logo.svg' 
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '../../../entities/theme';
import { AuthUser } from '../../../pages/auth-user';
import { Search } from '../../../entities/search';
import {Cart} from '../../../pages/basket/index'

export function Header() {
	



	return (
		<header>
			<div className={styles.container}>
				<div className={styles.flex_header}>
					<div className={styles.logo}>
						<Link to={'/'}>
							<img src={logo} alt='logo' />
						</Link>
					</div>
					<Search  />
					<AuthUser/>
					<ThemeSwitcher/>
					<Cart/>
				</div>
			</div>
		</header>
	)
}


