import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister, useForm } from "react-hook-form"
import { useAppDispatch } from "../../../shared/hooks-redux/hooksRedux"
import { IRegistrationUser } from "../../../shared/type/auth"
import { authUser, registrationUser } from "../../../shared/model/auth-slice/authSlice"


export const useRegisterForm = (
	isReg: boolean,
): [
	SubmitHandler<IRegistrationUser>,
	RegExp,
	UseFormRegister<IRegistrationUser>,
	UseFormHandleSubmit<IRegistrationUser, undefined>,
	FieldErrors<IRegistrationUser>,
boolean
] => {
	const dispatch = useAppDispatch()

  const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm<IRegistrationUser>({
		mode: "onBlur",
	})

	const onSubmit: SubmitHandler<IRegistrationUser> = data => {
		const dataAuth: IRegistrationUser = {
			email: data.email,
			password: data.password,
		}
		if (!isReg) {
			dispatch(authUser(dataAuth))
		} else {
			dispatch(registrationUser(data))
		}
		reset()
	}

	const EMAIL_REGEXP =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

	return [onSubmit, EMAIL_REGEXP, register, handleSubmit, errors,isValid]
}
