import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export const useThemeSwitcher = (): [Theme, () => void] => {
	const [theme, setTheme] = useState<Theme>('dark')

	const handleTheme = (): void => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}
	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	return [theme, handleTheme]
}
