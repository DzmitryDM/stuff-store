import { useEffect, useRef, useState } from 'react'
import { useGetProductSearchQuery } from '../../../shared/api'
import { useClickOutside } from '../../../shared/hooks/useClickOutside'
import { Products } from '../../../shared/type/products'
import { useAnimation } from '../../../shared/hooks/useAnimation'
import { useDebounce } from '../../../shared/hooks/useDebounce'

type onSearch = React.ChangeEventHandler<HTMLInputElement>

export const useSearch = (): [
	Products[],
	string,
	boolean,
	boolean,
	React.RefObject<HTMLDivElement>,
	string,
	() => void,
	() => void,
	onSearch
] => {
	const [value, setValue] = useState<string>('')
	
	const [isOpen, setOpen] = useState<boolean>(true)
	

		const handleSearch: onSearch = e => {
			setValue(e.target.value)
		}
	
		
	const searchTerm = useDebounce(value, 1000)

	const { data = [], isSuccess } = useGetProductSearchQuery(searchTerm)
	
	const ref = useRef<HTMLDivElement>(null)
	 useClickOutside(ref, () => setOpen(false))

	 const handleReset = () => setValue('')
	 const handleOpen = () => {
		 setOpen(true)
		}

	return [
		data,
		value,
		isOpen,
		isSuccess,
		ref,
		searchTerm,
		handleReset,
		handleOpen,
		handleSearch,
	]
}