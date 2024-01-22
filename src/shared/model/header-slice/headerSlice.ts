import { createSlice } from "@reduxjs/toolkit";

interface IisOpenMenuBurger {
	isOpenMenuBurger:boolean
}

const initialState:IisOpenMenuBurger ={
  isOpenMenuBurger:false
}

export const headerSlice = createSlice({
	name: 'header',
  initialState,
  reducers:{
setOpenMenuBurger:(state)=>{
state.isOpenMenuBurger = !state.isOpenMenuBurger
}
  },
  selectors:{
selectOpenBurger:(state)=>state.isOpenMenuBurger
  }
})


export const headerReducer = headerSlice.reducer
export const { setOpenMenuBurger } = headerSlice.actions
export const {selectOpenBurger} = headerSlice.selectors