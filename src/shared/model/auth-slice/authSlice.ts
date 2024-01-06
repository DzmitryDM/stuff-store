import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IAuthUser, IRegistrationUser } from '../../type/auth'

import {
	authProfile,
	authUserLogin,
	registrationProfile,
} from '../../config-api/config'
import axios from 'axios'
import apiAuth from '../../config-api/instanceAxios'

export interface IAuthSlice {
	isAuth: boolean
	user: IAuthUser | null
	error: null | any
}

export const registrationUser = createAsyncThunk(
	'registration/registrationUser',
	async (newUser: IRegistrationUser, { rejectWithValue }) => {
		try {
		axios.post(registrationProfile, newUser)
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
			dispatch(checkAuth())
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
	},

	extraReducers: builder => {
		//Registration
		builder.addCase(registrationUser.pending, (state) => {
			state.isAuth = true
			state.error = null
		})
		builder.addCase(registrationUser.fulfilled, (state) => {
			state.isAuth = false
		})
		builder.addCase(registrationUser.rejected, (state, action) => {
			state.error = action.payload
		})
		//AuthUser
		builder.addCase(authUser.pending, (state) => {
			state.isAuth = true
			state.error = null
		})
		builder.addCase(authUser.fulfilled, (state, action) => {
			state.error = action.payload
			state.isAuth = false
		})
		builder.addCase(authUser.rejected, (state, action) => {
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
export const { logout, setAuth } = authSlice.actions
