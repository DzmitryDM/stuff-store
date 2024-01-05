import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store'

export const selectBasket = (state: RootState) => state.basket.cart
export const selectBasketIsOpen = (state: RootState) => state.basket.isOpen
export const selectBasketPopPup = (state: RootState) => state.basket.alertName

export const selectBasketLength =  (state: RootState) => state.basket.cart.length

export const selectBasketTotalPrice = createSelector(
	selectBasket,
	item => {
		return item.reduce(
			(acc, item) =>
				typeof item.price === 'number' && typeof item.quantity === 'number'
					? acc + item.price * item.quantity
					: 0,
			0
		)
	}
)

