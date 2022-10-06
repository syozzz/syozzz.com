import '../styles/globals.css'
import 'inter-ui/inter.css'
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import {useEffect, useState} from 'react'
import FixedTools from '../components/FixedTools'

const KEY_THEME = 'syozzz-theme'

function MyApp({ Component, pageProps }) {

    const [themeType, setThemeType] = useState('light')

    useEffect(() => {
        const saveTheme = localStorage.getItem(KEY_THEME)
        if (saveTheme && saveTheme !== themeType) {
            setThemeType(saveTheme)
        }
    }, [])

    const switchThemes = () => {
        setThemeType(last => {
            const newTheme = last === 'dark' ? 'light' : 'dark'
            localStorage.setItem(KEY_THEME, newTheme)
            return newTheme
        })
    }

    return (
        <GeistProvider themeType={themeType}>
            <CssBaseline />
            <Component {...pageProps}/>
            <FixedTools themeType={themeType} switchThemes={switchThemes}/>
        </GeistProvider>
    )
}

export default MyApp
