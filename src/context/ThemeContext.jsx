import {createContext, useContext, useEffect, useState} from 'react'

const getSystemMode = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark'

const ThemeContext = createContext(['dark', () => {}, 'dark'])

const useSystemModeListener = (setMode) => {
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')

        const handleChange = () => {
            const savedMode = localStorage.getItem('theme-mode')
            if (savedMode === 'system') setMode('system')
        }

        mediaQuery.addEventListener('change', handleChange)

        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [setMode])
}

export function ThemeProvider({children}) {
    const [selectedMode, setSelectedMode] = useState(() => {
        const saved = localStorage.getItem('theme-mode')
        if (saved === 'light' || saved === 'dark' || saved === 'system') return saved

        // By default, use 'system' mode
        return 'system'
    })

    const currentMode = selectedMode === 'system' ? getSystemMode() : selectedMode

    useSystemModeListener(setSelectedMode)

    useEffect(() => {
        localStorage.setItem('theme-mode', selectedMode)
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(currentMode)
    }, [selectedMode, currentMode])

    // Return [currentMode, setSelectedMode, selectedMode]
    return (
        <ThemeContext.Provider value={[currentMode, setSelectedMode, selectedMode]}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}
