import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFiltersByPrice } from '../../config-api/config'

interface IFiltersPrice {
	min: number
	max: number
	id: number
}

export const getFiltersPrice = createAsyncThunk(
	'filters/fetchByIdStatus',
	async (params: IFiltersPrice, thunkAPI) => {
		const { min, max, id } = params
		const response = await fetch(getFiltersByPrice(min, max, id))
		const data = await response.json()
		return data
	}
)

const initialState = {
	products: [],
}

export const filtersSlice = createSlice({
	name: 'filtersSlice',
	initialState,
	reducers: {
		clearAlertName: () => initialState,
	},
	extraReducers: builder => {
		builder.addCase(getFiltersPrice.fulfilled, (state, action) => {
			state.products = action.payload
		})
	},
})

export const filtersReducer = filtersSlice.reducer
export const { clearAlertName } = filtersSlice.actions
