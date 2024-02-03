import { useState } from 'react'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../shared/hooks-redux/hooksRedux'
import {
	selectOpenBurger,
	setOpenMenuBurger,
} from '../../../shared/model/header-slice/headerSlice'

export const useHeader = (): [boolean, boolean, () => void, () => void] => {
	const [isOpenSearch, setOpenSearch] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const isOpenMenu = useAppSelector(selectOpenBurger)

	const toggleMenuBurger = () => {
		dispatch(setOpenMenuBurger())
	}
	const handleSearch = () => {
		setOpenSearch(!isOpenSearch)
	}
	return [isOpenSearch, isOpenMenu, toggleMenuBurger, handleSearch]
}
