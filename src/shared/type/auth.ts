export interface IRegistrationUser {
	email: string
	password: string
	name?: string
	avatar?: string
}
export interface IAuthUser {
	name?: string
	email: string
}

export interface IAuthUser extends IRegistrationUser {
	role: string
	id: number
}


