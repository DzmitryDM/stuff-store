import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../shared/api/query/apiSlice'
import { basketReducer } from '../shared/model/index'
import { filtersReducer } from '../shared/model/filters-slice/filtersSlice'
import { registerReducer } from '../shared/model/auth-slice/authSlice'

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		basket: basketReducer,
		filters: filtersReducer,
		register: registerReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			apiSlice.middleware
		),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
