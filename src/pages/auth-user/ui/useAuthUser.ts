import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	logout,
	removeError
} from '../../../shared/model/auth-slice/authSlice'
import {
	useAppDispatch
} from '../../../shared/hooks-redux/hooksRedux'
import {
	selectAuth
} from '../../../shared/model/auth-slice/selectAuth'
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
	() => void
] => {
	const dispatch = useAppDispatch()
	const [isOpen, setOpen] = useState<boolean>(false)
	const { user, isAuth, error, idRegistration } = useSelector(selectAuth)


	const closeAuth = () => {
		setOpen(!isOpen)
	if(error) dispatch(removeError())
	}
	const navigate = useNavigate()

	const pages = () => {
		navigate('/personalArea')
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
		pages,
		signOut,
	]
}
