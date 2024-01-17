import { RootState } from "../../../app/store";


 export const selectAuthUser = (state: RootState) => state.register.user
 export const selectAuthError = (state: RootState) => state.register.error
 export const selectIsAuth = (state: RootState) => state.register.isAuth
 export const selectIsRegistered = (state: RootState) => state.register.idRegistration

export const selectAuth = (state: RootState) => state.register
