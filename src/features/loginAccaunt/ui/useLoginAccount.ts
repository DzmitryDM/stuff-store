import { useRef, useState } from 'react'
import { useClickOutside } from '../../../shared/hooks/useClickOutside'

export const useLoginAccount = (
	closeAuth: () => void
): [React.RefObject<HTMLDivElement>, boolean, () => void] => {
	const [isReg, setReg] = useState(false)

	const toggleRegistration = () => {
		setReg(!isReg)
	}

	const ref = useRef<HTMLDivElement>(null)
	useClickOutside(ref, () => {
		closeAuth()
	})

	return [ref, isReg, toggleRegistration]
}
