import { createSlice } from '@reduxjs/toolkit'

interface IisOpenMenuBurger {
	isOpenMenuBurger: boolean
	images: string
}

const initialState: IisOpenMenuBurger = {
	isOpenMenuBurger: false,
	images: '',
}

export const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		setOpenMenuBurger: state => {
			state.isOpenMenuBurger = !state.isOpenMenuBurger
		},
		setImages: (state, action) => {
			state.images = action.payload
		},
	},
	selectors: {
		selectOpenBurger: state => state.isOpenMenuBurger,
		selectImages: state => state.images,
	},
})

export const headerReducer = headerSlice.reducer
export const { setOpenMenuBurger,setImages } = headerSlice.actions
export const { selectOpenBurger,selectImages } = headerSlice.selectors
