import React from 'react'
import style from './Main.module.scss'
import { Sidebar } from '../../sidebar'
import { Outlet } from 'react-router-dom'

export  function Main() {
  return (
		<main>
			<div className={style.container}>
				<div className={style.gridWrapper}>
					<Sidebar />
          <Outlet/>
				</div>
			</div>
		</main>
	)
}
