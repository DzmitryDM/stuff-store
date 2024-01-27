import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout, removeError } from '../../../shared/model/auth-slice/authSlice'
import { useAppDispatch } from '../../../shared/hooks-redux/hooksRedux'
import { selectAuth } from '../../../shared/model/auth-slice/selectAuth'
import { IAuthUser } from '../../../shared/type/auth'
import { useSelector } from 'react-redux'

export const useAuthUser = (): [
	boolean,
	IAuthUser | null,
	any,
	boolean,
	number | null,
	() => void,
	() => void,
	() => void,
	boolean,
	string,
	string,
	() => void
] => {
	const dispatch = useAppDispatch()
	const [isOpenSignOut, setOpenSignOut] = useState<boolean>(false)
	const [isOpen, setOpen] = useState<boolean>(false)
	const { user, isAuth, error, idRegistration } = useSelector(selectAuth)

	const authorization = 'You have successfully logged.'
	const registration = 'You have successfully registered.'

	const [isSuccessAuth, setSuccessAuth] = useState<string>(authorization)
	const [isSuccessReg, setSuccessReg] = useState<string>(registration)
	const removeAuth = () => {
		setSuccessReg('')
		setSuccessAuth('')
	}

	const closeAuth = () => {
		setOpen(!isOpen)
		if (error) dispatch(removeError())
	}


	const openSignAuth = () => {
		setOpenSignOut(!isOpenSignOut)
	}

	const signOut = () => {
		dispatch(logout())
	}

	useEffect(() => {
		if (user || idRegistration) setOpen(false)
	}, [user, idRegistration])

	return [
		isAuth,
		user,
		error,
		isOpen,
		idRegistration,
		closeAuth,
		openSignAuth,
		signOut,
		isOpenSignOut,
		isSuccessAuth,
		isSuccessReg,
		removeAuth,
	]
}
