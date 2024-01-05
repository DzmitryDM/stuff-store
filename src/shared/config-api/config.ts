export const BASE_URL = 'https://api.escuelajs.co/api/v1/'
export const ALL_PRODUCTS = 'products'
export const ALL_CATEGORIES = 'categories'
export const getFiltersByPrice = (min: number, max: number, id: number) =>
	BASE_URL + `products/?price_min=${min}&price_max=${max}&categoryId=${id}`

export const registrationProfile: string = BASE_URL + 'users'
export const authUserLogin = BASE_URL + 'auth/login'
export const authProfile = BASE_URL + 'auth/profile'
export const refreshToken = BASE_URL + 'auth/refresh-token'
