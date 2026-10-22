import {createContext, useContext, useEffect, useState} from 'react'

const STORAGE_KEY = 'theme-mode'
const VALID_MODES = ['system', 'light', 'dark']
const LIGHT_QUERY = '(prefers-color-scheme: light)'

const getSystemMode = () => (window.matchMedia?.(LIGHT_QUERY).matches ? 'light' : 'dark')

const getSavedMode = () => {
    const saved = localStorage.getItem(STORAGE_KEY)
    // By default, use 'system' mode
    return VALID_MODES.includes(saved) ? saved : 'system'
}

const ThemeContext = createContext(['dark', () => {}, 'dark'])

export function ThemeProvider({children}) {
    const [selectedMode, setSelectedMode] = useState(getSavedMode)
    const [systemMode, setSystemMode] = useState(getSystemMode)

    const currentMode = selectedMode === 'system' ? systemMode : selectedMode

    // Keeps track of system changes while the page is open
    useEffect(() => {
        const mediaQuery = window.matchMedia(LIGHT_QUERY)
        const handleChange = () => setSystemMode(getSystemMode())

        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(currentMode)
    }, [currentMode])

    // Only saves when the user actively chooses a mode
    const setMode = (mode) => {
        if (!VALID_MODES.includes(mode)) return
        setSelectedMode(mode)
        localStorage.setItem(STORAGE_KEY, mode)
    }

    // Return [currentMode, setMode, selectedMode]
    return (
        <ThemeContext.Provider value={[currentMode, setMode, selectedMode]}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}
