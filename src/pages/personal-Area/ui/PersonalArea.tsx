import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectAuthUser } from '../../../shared/model/auth-slice/selectAuth'


export function PersonalArea() {
	const user = useSelector(selectAuthUser)
	const navigate = useNavigate()

	useEffect(() => {
		if (!user) {
			navigate('/')
		}
	}, [user])
	return <div>PersonalArea</div>
}
