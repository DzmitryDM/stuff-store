import { useRef } from "react"
import { useAppDispatch } from "../../../shared/hooks-redux/hooksRedux"
import { useSelector } from "react-redux"
import { selectOpenBurger, setOpenMenuBurger } from "../../../shared/model/header-slice/headerSlice"
import { useClickOutside } from "../../../shared/hooks/useClickOutside"

export const useSidebar = (): [boolean, React.MutableRefObject<null>] => {
	const refOutside = useRef(null)
	const dispatch = useAppDispatch()
	const isOpenMenuBurger = useSelector(selectOpenBurger)
	useClickOutside(refOutside, () => dispatch(setOpenMenuBurger()))

	return [isOpenMenuBurger, refOutside]
}