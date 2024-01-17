import { useRef, useState } from 'react'
import { useClickOutside } from '../../../shared/hooks/useClickOutside'
import { useAppDispatch } from '../../../shared/hooks-redux/hooksRedux'
import { removeError } from '../../../shared/model/auth-slice/authSlice'

export const useLoginAccount = (
	closeAuth: () => void,
	error: any
): [React.RefObject<HTMLDivElement>, boolean, () => void] => {
	const [isReg, setReg] = useState(false)
	const dispatch = useAppDispatch()



	const toggleRegistration = () => {
		if (error ) dispatch(removeError())
		setReg(!isReg)
	}

	const ref = useRef<HTMLDivElement>(null)
	useClickOutside(ref, () => {
		closeAuth()
	})

	return [ref, isReg, toggleRegistration]
}
