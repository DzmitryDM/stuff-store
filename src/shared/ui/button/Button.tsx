import styles from './Button.module.scss'

type Button = {
	children: React.ReactNode
	onClick?: any
	className?: string
	disabled?: boolean
	onKeyDown?:any
}

export function Button({ children, ...props }: Button) {
	return (
		<button className={styles.cardButton} {...props}>
			{children}
		</button>
	)
}
