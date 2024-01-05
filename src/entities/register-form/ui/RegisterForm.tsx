import { Input, Button } from '../../../shared/ui'
import styles from './RegisterForm.module.scss'
import { useRegisterForm } from './useRegisterForm'

interface IRegisterForm {
	isReg: boolean
}

export function RegisterForm({ isReg }: IRegisterForm) {
	
	const [onSubmit, EMAIL_REGEXP, register, handleSubmit, errors, isValid] =
		useRegisterForm(isReg)

	return (
		<form className={styles.formAuth} onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...register('email', {
					required: 'The field is required',
					pattern: EMAIL_REGEXP,
				})}
				type='text'
				placeholder='Enter your email'
				className={errors?.email ? styles.activeError : styles.inputAuth}
			/>
			<Input
				{...register('password', {
					required: 'The field is required',
					minLength: {
						value: 7,
						message: 'Minimum 7 characters',
					},
				})}
				type='text'
				placeholder='Enter your password'
				className={errors?.password ? styles.activeError : styles.inputAuth}
			/>

			{isReg && (
				<>
					<Input
						{...register('name', {
							required: 'The field is required',
							maxLength: {
								value: 20,
								message: 'Minimum 20 characters',
							},
						})}
						placeholder='Enter your name'
						className={errors?.name ? styles.activeError : styles.inputAuth}
					/>
					<Input
						{...register('avatar', {
							required: 'The field is required',
							maxLength: {
								value: 200,
								message: 'Minimum 20 characters',
							},
						})}
						placeholder='Enter your avatar'
						className={errors?.avatar ? styles.activeError : styles.inputAuth}
						type='text'
					/>
				</>
			)}

			<Button disabled={!isValid} className={styles.btnAuth}>
				{!isReg ? 'Log in' : 'Register'}{' '}
			</Button>
		</form>
	)
}
