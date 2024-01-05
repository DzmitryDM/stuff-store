import React from 'react'
import styles from './Root.module.scss'
import { Header } from '../../../features/header'
import { Footer } from '../../../features/footer'
import { Main } from '../../../features/main'

export function Root() {
	return (
		<div className={styles.wrapper}>
			<Header />
      <Main/>
			<Footer />
		</div>
	)
}
