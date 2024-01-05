import { RouterProvider } from 'react-router-dom'
import './index.scss'
import { router } from '../pages/routing'
import { useEffect } from 'react'
import { useAppDispatch } from '../shared/hooks-redux/hooksRedux'
import { checkAuth } from '../shared/model/auth-slice/authSlice'

function App() {
	const dispatch = useAppDispatch()
	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(checkAuth())
		}
	}, [])

	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
