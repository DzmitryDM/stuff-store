import styles from './Button.module.scss'

type Button = {
	children: React.ReactNode
	onClick?: () => void
	className?: string
	disabled?: boolean
}

export function Button({ children, ...props }: Button) {
	return (
		<button className={styles.cardButton} {...props}>
			{children}
		</button>
	)
}
