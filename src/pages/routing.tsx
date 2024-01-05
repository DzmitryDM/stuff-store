import { createBrowserRouter } from 'react-router-dom'
import { Products } from './products/index'
import { Root } from './root'
import { Home } from './home'
import { SingleProducts } from './singleProducts'
import { Pageses } from './Pageses'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <h1>This is the wrong route</h1>,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: `/singleproduct/:idProduct`,
				element: <SingleProducts />,
			},
			{
				path: `/products/:idProducts`,
				element: <Products />,
			},
			{
				path: '/pro',
				element: <Pageses />,
			},
		],
	},
])
