import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../../shared/hooks-redux/hooksRedux'
import { useEffect, useRef, useState } from 'react'
import {
	clearAlertName,
	getFiltersPrice,
} from '../../../shared/model/filters-slice/filtersSlice'
import { useDebounce } from '../../../shared/hooks/useDebounce'

type handleEvent = React.ChangeEventHandler<HTMLInputElement>
type handleKeyBoardEvent = React.KeyboardEventHandler<HTMLInputElement>

export const useFilterByPrice = (): [
	string,
	string,
	handleEvent,
	handleKeyBoardEvent,
	React.RefObject<HTMLInputElement>
] => {
	const { idProducts } = useParams<string>()

	const ref = useRef<HTMLInputElement>(null)
	const dispatch = useAppDispatch()
	const [priceMin, setPriceMin] = useState<string>('')
	const [priceMax, setPriceMax] = useState<string>('')

	const handleKey: handleKeyBoardEvent = e => {
		if (e.key === 'Enter') {
			if (ref && ref.current) {
				ref.current.focus()
			}
		}
	}

	const handleChangePrice: handleEvent = e => {
		if (e.target.name === 'inputMin') {
			setPriceMin(e.target.value)
		} else {
			setPriceMax(e.target.value)
		}
	}

	const clearInputField = () => {
		setPriceMax('')
		setPriceMin('')
	}
	const min = Number(priceMin)
	const max = Number(priceMax)
	const id = Number(idProducts)

	useEffect(() => {
		dispatch(getFiltersPrice({ min, max, id }))
	}, [min, max, idProducts])

	useEffect(() => {
		return () => {
			dispatch(clearAlertName())
			clearInputField()
		}
	}, [idProducts])

	return [priceMin, priceMax, handleChangePrice, handleKey, ref]
}
