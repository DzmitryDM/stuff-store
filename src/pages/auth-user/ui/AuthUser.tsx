import styles from './AuthUser.module.scss'
import { AnimatePresence } from 'framer-motion'
import { LoginAccount } from '../../../features/loginAccaunt'
import { createPortal } from 'react-dom'
import { useAuthUser } from './useAuthUser'
import { TbBrandOauth } from 'react-icons/tb'
import { PopPupBasket } from '../../../shared/ui'
import { log } from 'console'

export function AuthUser() {
	const [
		isAuth,
		user,
		error,
		isOpen,
		idRegistered,
		closeAuth,
		openSignAuth,
		signOut,
		isOpenSignOut,
		isSuccessAuth,
		isSuccessReg,
		callback,
	] = useAuthUser()


	return (
		<>
			<div
				onClick={!user ? closeAuth : openSignAuth}
				className={styles.userProfile}
			>
				{user && <img className={styles.avatar} src={user?.avatar} alt='' />}
				<div className={styles.email}>
					{user ? user?.name : <TbBrandOauth size='27' />}
				</div>
				{isOpenSignOut && user && (
					<div className={styles.personalArea} onClick={signOut}>
						Sign out
					</div>
				)}
			</div>
			{createPortal(
				<AnimatePresence>
					{!user && isOpen && (
						<LoginAccount closeAuth={closeAuth} error={error} />
					)}
				</AnimatePresence>,
				document.body
			)}
			{isAuth && (
				<PopPupBasket alertName={isSuccessAuth} callback={callback} />
			)}
			{idRegistered && (
				<PopPupBasket alertName={isSuccessReg} callback={callback} />
			)}
		</>
	)
}
