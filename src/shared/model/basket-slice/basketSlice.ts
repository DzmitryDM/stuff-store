import { createSlice } from '@reduxjs/toolkit'
import { Products } from '../../type/products'
import type { PayloadAction } from '@reduxjs/toolkit'

type CartSlice = {
	cart: Products[]
	isOpen: boolean
	alertName: string
}

const initialState: CartSlice = {
	cart: [],
	isOpen: false,
	alertName: '',
}

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		setOpen: (state, action: PayloadAction<boolean>) => {
			state.isOpen = action.payload
		},
		addOrder: (state, action: PayloadAction<Products>) => {
			const itemIndex = state.cart.findIndex(
				item => item.id === action.payload.id
			)
			let newOrder = [...state.cart]
			if (itemIndex < 0) {
				newOrder.push({ ...action.payload, quantity: 1 })
const newAlertName = action.payload 
 if(typeof newAlertName.title === 'string') state.alertName =  newAlertName.title

		} else {
				newOrder = state.cart.map((itemOrder, index) => {
					if (itemOrder.quantity && itemIndex === index) {
						return {
							...itemOrder,
							quantity: itemOrder.quantity + 1,
						}
					} else {
						return itemOrder
					}
				})
			}
			state.cart = newOrder

		},
		removeProduct: (state, action) => {
			state.cart = state.cart.filter(el => el.id !== action.payload)
		},
		clearCart: state => {
			state.cart = []
		},
		incrementProduct: (state, action: PayloadAction<string>) => {
			let newOrder
			newOrder = state.cart.map(itemOrder => {
				if (itemOrder.quantity && itemOrder.id === action.payload) {
					return {
						...itemOrder,
						quantity: itemOrder.quantity + 1,
					}
				} else {
					return itemOrder
				}
			})
			state.cart = newOrder
		},
		decrementProduct: (state, action) => {
			let newOrder
			newOrder = state.cart.map(itemOrder => {
				if (itemOrder.quantity && itemOrder.id === action.payload) {
					return {
						...itemOrder,
						quantity: itemOrder.quantity > 1 ? itemOrder.quantity - 1 : 1,
					}
				} else {
					return itemOrder
				}
			})
			state.cart = newOrder
		},
		addAlertName:(state,action)=>{
state.alertName = action.payload
		}
	},
})

export const basketReducer = basketSlice.reducer
export const {
	setOpen,
	addOrder,
	clearCart,
	removeProduct,
	incrementProduct,
	decrementProduct,
	addAlertName,
} = basketSlice.actions
