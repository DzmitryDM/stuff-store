import { RootState } from "../../../app/store";


 export const selectAuthUser = (state: RootState) => state.register.user
 export const selectAuthError = (state: RootState) => state.register.error
