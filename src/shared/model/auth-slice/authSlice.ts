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
	isAuth: false
	user: IAuthUser | null
	error: null | any
}

export const registrationUser = createAsyncThunk(
	'register/User',
	async (newUser: IRegistrationUser, { rejectWithValue }) => {
		try {
			axios.post(registrationProfile, newUser)
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export const authUser = createAsyncThunk(
	'register/authUser',
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
	'register/checkAuth',
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

const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		logout: () => {
			localStorage.removeItem('token')
			return initialState
		},
	},

	extraReducers: builder => {
		builder.addCase(registrationUser.rejected, (state, action) => {
			state.error = action.payload
		})
		builder.addCase(checkAuth.fulfilled, (state, action) => {
			if (action.payload) state.user = action.payload.data
		})
		builder.addCase(checkAuth.rejected, (state, action) => {
			state.error = action.payload
		})
		builder.addCase(authUser.rejected, (state, action) => {
			state.error = action.payload
		})
	},
})

export const registerReducer = registerSlice.reducer
export const { logout } = registerSlice.actions
