import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ALL_CATEGORIES, ALL_PRODUCTS, BASE_URL } from '../../config-api/config'
import { Categories } from '../../type'
import { Products } from '../../type/products'

export const apiSlice = createApi({
	reducerPath: 'apiSlice',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: build => ({
		getAllCategories: build.query<Categories[], void>({
			query: () => ALL_CATEGORIES,
		}),
		getAllProducts: build.query<Products[], void>({
			query: () => ALL_PRODUCTS,
		}),
		getSingleProducts: build.query<Products, string>({
			query: id => `products/${id}`,
		}),
		getProductsByCategories: build.query<Products[], string>({
			query: id => `products/?categoryId=${id}`,
		}),
		getProductSearch: build.query<Products[], string>({
			query: name => `products/?title=${name}`,
		}),
	}),
})

export const {
	useGetAllCategoriesQuery,
	useGetAllProductsQuery,
	useGetSingleProductsQuery,
	useGetProductsByCategoriesQuery,
	useGetProductSearchQuery,
} = apiSlice
