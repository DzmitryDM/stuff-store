import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IAuthUser, IRegistrationUser } from '../../type/auth'

import {
	authProfile,
	authUserLogin,
	registrationProfile,
} from '../../config-api/config'
import axios, { AxiosResponse } from 'axios'
import apiAuth from '../../config-api/instanceAxios'

export interface IAuthSlice {
	isAuth: boolean
	user: IAuthUser | null
	error: null | any
	idRegistration: null | number
}

export const registrationUser = createAsyncThunk(
	'registration/registrationUser',
	async (
		newUser: IRegistrationUser,
		{ rejectWithValue }: any
	): Promise<AxiosResponse<IAuthUser>> => {
		try {
			const res = axios.post(registrationProfile, newUser)
			return res
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export const authUser = createAsyncThunk(
	'registration/authUser',
	async (auth: IRegistrationUser, { rejectWithValue, dispatch }) => {
		try {
			const res = await apiAuth.post(authUserLogin, auth)
			localStorage.setItem('token', res.data.access_token)
			const profile = await apiAuth.get(authProfile)
			return profile
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export const checkAuth = createAsyncThunk(
	'registration/checkAuth',
	async (_, { rejectWithValue }) => {
		try {
			const profile = await apiAuth.get(authProfile)
			return profile
		} catch (error) {
			rejectWithValue(error)
		}
	}
)

const initialState: IAuthSlice = {
	isAuth: false,
	user: null,
	error: null,
	idRegistration: null,
}

const authSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		logout: () => {
			localStorage.removeItem('token')
			return initialState
		},
		setAuth: state => {
			state.isAuth = !state.isAuth
		},
		removeError: state=>{
			state.error = null
		}
	},

	extraReducers: builder => {
		//Registration
		builder.addCase(registrationUser.pending, state => {
			state.error = null
		})
		builder.addCase(registrationUser.fulfilled, (state, action) => {
			state.idRegistration = action.payload.data.id
		})
		builder.addCase(registrationUser.rejected, (state, action) => {
			state.error = action.payload
		})
		//AuthUser
		builder.addCase(authUser.pending, state => {
			state.isAuth = false
			state.error = null
		})
		builder.addCase(authUser.fulfilled, (state, action) => {
			state.isAuth = true
			if (action.payload) state.user = action.payload.data
		})
		builder.addCase(authUser.rejected, (state, action) => {
			state.isAuth =false
			state.error = action.payload
		})
		//CheckAuth
		builder.addCase(checkAuth.fulfilled, (state, action) => {
			if (action.payload) state.user = action.payload.data
		})
		builder.addCase(checkAuth.rejected, (state, action) => {
			state.error = action.payload
		})
	},
})

export const registerReducer = authSlice.reducer
export const { logout, setAuth, removeError } = authSlice.actions
