import { MdClear } from 'react-icons/md'
import styles from './LoginAccount.module.scss'
import { motion } from 'framer-motion'
import { useLoginAccount } from './useLoginAccount'
import { useState } from 'react'
import { RegisterForm } from '../../../entities/register-form'

interface ILoginAccount {
	closeAuth: () => void
}

export function LoginAccount({ closeAuth }: ILoginAccount) {
	const [ref] = useLoginAccount(closeAuth)
	const [isReg, setReg] = useState(false)

	return (
		<motion.div
			key='auth'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			className={styles.authUserWrapper}
		>
			<div ref={ref} className={styles.auth}>
				<div className={styles.titleWrapper}>
					<h3 className={styles.title}>
						{!isReg ? 'Authentication' : 'Registration'}
					</h3>
					<MdClear className={styles.closeAuth} onClick={closeAuth} size={23} />
				</div>
				<RegisterForm  isReg={isReg} />
				<div className={styles.new}>
					{!isReg && 'New user?'}
					<span onClick={() => setReg(!isReg)} className={styles.register}>
						{!isReg ? 'Register' : 'Log in'}
					</span>
				</div>
			</div>
		</motion.div>
	)
}
