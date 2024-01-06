import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout, setAuth } from '../../../shared/model/auth-slice/authSlice'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../shared/hooks-redux/hooksRedux'
import {
  selectAuthError, selectAuthUser, selectIsAuth,
} from '../../../shared/model/auth-slice/selectAuth'
import { IAuthUser } from '../../../shared/type/auth'
import { useSelector } from 'react-redux'

export const useAuthUser = (): [
  boolean,
	IAuthUser | null,
  any,
	boolean,
	() => void,
	() => void,
	() => void
] => {
	const [isOpen, setOpen] = useState<boolean>(false)
	const user = useAppSelector(selectAuthUser)
  const isAuth = useSelector(selectIsAuth)
  const error = useSelector(selectAuthError)


	const dispatch = useAppDispatch()

	const closeAuth = () => {
		setOpen(!isOpen)
	}
	const navigate = useNavigate()

	const pages = () => {
		navigate('/personalArea')
	}

	const signOut = () => {
		dispatch(logout())
	}

useEffect(()=>{
if(user) setOpen(false)
},[user])


	return [
		isAuth,
		user,
		error,
		isOpen,
		closeAuth,
		pages,
		signOut,
	]
}
