import { MdClear } from 'react-icons/md'
import styles from './LoginAccount.module.scss'
import { motion } from 'framer-motion'
import { useLoginAccount } from './useLoginAccount'
import { RegisterForm } from '../../../entities/register-form'

interface ILoginAccount {
	closeAuth: () => void
	error:any
}

export function LoginAccount({ closeAuth,error=null}: ILoginAccount) {
	const [ref, isReg, toggleRegistration] = useLoginAccount(closeAuth,error)



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
				<RegisterForm isReg={isReg} />
				{error && <div className={styles.errorAuth}>Wrong login or password!</div>}
				<div className={styles.new}>
					{!isReg && 'New user?'}
					<span onClick={toggleRegistration} className={styles.register}>
						{!isReg ? 'Register' : 'Log in'}
					</span>
				</div>
			</div>
		</motion.div>
	)
}
