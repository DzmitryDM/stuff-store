
import styles from './AuthUser.module.scss'
import { AnimatePresence } from 'framer-motion'
import { LoginAccount } from '../../../features/loginAccaunt'
import { createPortal } from 'react-dom'
import { useAuthUser } from './useAuthUser'


export  function AuthUser() {

const [isAuth, user, error, isOpen, idRegistered, closeAuth, pages, signOut] =
	useAuthUser()
console.log(error);

	return (
		<>
			<div onClick={!user ? closeAuth : pages} className={styles.userProfile}>
				{user && <img className={styles.avatar} src={user?.avatar} alt='' />}
				<div className={styles.email}>{user ? user?.name : 'Sign in'}</div>
				{user && (
						<div className={styles.personalArea} onClick={signOut}>
							Sign out
						</div>
				)}
			</div>
			{createPortal(
				<AnimatePresence>
					{!user && isOpen && <LoginAccount closeAuth={closeAuth} error={error}  />}
				</AnimatePresence>,
				document.body
			)}
		</>
	)
}
