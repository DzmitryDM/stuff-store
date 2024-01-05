import { useState } from 'react'

export const useAnimation = (time: number, callback:any):[boolean,()=>void] => {
	const [show, setShow] = useState(false)

	const animationAppearance = () => {
		setShow(true)
		setTimeout(() => {
			callback()
			setShow(false)
		}, time)
	}
	return [show, animationAppearance]
}
