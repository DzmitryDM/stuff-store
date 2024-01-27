import { useSelector } from "react-redux"
import { addAlertName, selectBasketPopPup } from "../model"
import { useAppDispatch } from "../hooks-redux/hooksRedux"
import { useState } from "react"

export const usePopPupBasketMessage=():[
  string,()=>void
]=>{
  	const name = useSelector(selectBasketPopPup)
    const alertName = name
		const dispatch = useAppDispatch()

		const closeName = () => {
			dispatch(addAlertName(''))
		}

    return [alertName,closeName]
}