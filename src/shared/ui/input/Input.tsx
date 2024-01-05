import { forwardRef } from 'react'
import styles from './Input.module.scss'

type handleKeyBoardEvent = React.KeyboardEventHandler<HTMLInputElement>

type RefInput =React.LegacyRef<HTMLInputElement>

type Input = {
	autoComplete?: string
	name?: string
	type?: string
	value?: string | number
	onFocus?: () => void
	onChange?: any
	className?: string
	placeholder?: string
	onKeyDown?: handleKeyBoardEvent
}

export const Input = forwardRef(
	({ ...props }: Input, ref:RefInput ) => {
		return <input className={styles.input} {...props} ref={ref} />
	}
)
