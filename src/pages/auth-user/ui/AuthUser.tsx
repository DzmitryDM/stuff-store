import { EventHandler, useEffect, useState } from 'react'
import styles from './AuthUser.module.scss'
import { AnimatePresence } from 'framer-motion'
import { LoginAccount } from '../../../features/loginAccaunt'
import { createPortal } from 'react-dom'
import { useAppSelector } from '../../../shared/hooks-redux/hooksRedux'
import { selectAuthError, selectAuthUser } from '../../../shared/model/auth-slice/selectAuth'
import { Link, useNavigate } from 'react-router-dom'
import { Pageses } from '../../Pageses'
import { logout } from '../../../shared/model/auth-slice/authSlice'
import { useDispatch } from 'react-redux'

export function AuthUser() {
	const [isOpen, setOpen] = useState<boolean>(false)
	const user = useAppSelector(selectAuthUser)
	const error = useAppSelector(selectAuthError)
	const dispatch = useDispatch()
	const closeAuth = () => {
		setOpen(!isOpen)
	}
	const navigate = useNavigate()

	const pages = () => {
		navigate('/pro')
	}

	const signOut = () => {
		dispatch(logout())
		setOut(false)
	}
	console.log(error)

	const [isOut, setOut] = useState<boolean>(false)
	
	useEffect(() => {
		if (user) setOpen(false)
	}, [user])

	return (
		<>
			<div
				onMouseEnter={() => setOut(true)}
				onMouseLeave={() => setOut(false)}
				onClick={!user ? closeAuth : pages}
				className={styles.userProfile}
			>
				{/* <img src={users?.avatar} alt='' /> */}
				<div className={styles.email}>{user ? user?.name : 'Auth'}</div>
				{user && isOut && (
					<div onMouseLeave={() => setOut(false)} onClick={signOut}>
						Sign out
					</div>
				)}
			</div>
			{createPortal(
				<AnimatePresence>
					{ isOpen && <LoginAccount closeAuth={closeAuth} />}
				</AnimatePresence>,
				document.body
			)}
		</>
	)
}
