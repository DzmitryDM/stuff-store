import { useParams } from "react-router-dom"
import { useGetProductsByCategoriesQuery } from "../../../shared/api"
import { selectFiltersByPrice } from "../../../shared/model/filters-slice/selectFiltersSlice"
import { useSelector } from "react-redux"
import { Products } from "../../../shared/type/products"

export const useProducts=():[boolean,Products[]]=>{
  const { idProducts } = useParams<{ idProducts: any }>()

	

	const { data = [], isSuccess } = useGetProductsByCategoriesQuery(idProducts)
	const productsFilter = useSelector(selectFiltersByPrice)

	const goods = () => {
		if (productsFilter.length) {
			return productsFilter
		} else {
			return data
		}
	}
	const products = goods()

return [isSuccess,products]

}
