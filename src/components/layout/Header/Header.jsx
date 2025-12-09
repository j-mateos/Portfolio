import './Header.css'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../App/ThemeContext.jsx'
import { useTranslation } from 'react-i18next'

/* eslint-disable no-unused-vars */
import { Svg } from '../../ui/Svg/Svg'
/* eslint-enable no-unused-vars */

const flagSvgs = import.meta.glob('../../../assets/svg/flag_*.svg', {
    eager: true,
    import: 'default'
})

// Obtains the flag URL based on the language key
const getFlagSrc = (languageKey) => {
    const fileName = `flag_${languageKey}.svg`
    const key = Object.keys(flagSvgs).find(k => k.endsWith(fileName))
    return flagSvgs[key]
}

export function Header () {
    const { t, i18n } = useTranslation()

    // Variables and state for theme modes
    const [, setMode, selectedMode] = useTheme()
    const [showModes, setShowModes] = useState(false)
    const modesRef = useRef(null)
    const modes = [
        { key: 'system', label: t('header.modeSystem') },
        { key: 'light', label: t('header.modeLight') },
        { key: 'dark', label: t('header.modeDark') }
    ]

    // Variables and state for language selection
    const currentLanguage = i18n.language
    const [showLanguages, setShowLanguages] = useState(false)
    const languagesRef = useRef(null)
    const languages = [
        { key: 'es', label: 'Español' },
        { key: 'en', label: 'English' }
    ]

    // Methods to handle mode selection
    const handleCurrentModeClick = () => setShowModes(!showModes)

    const handleModeSelect = (selected) => {
        // setMode receives 'system', 'light', or 'dark'
        setMode(selected)
        setShowModes(false)
    }

    // Methods to handle language selection
    const handleCurrentLanguageClick = () => setShowLanguages(!showLanguages)

    const handleLanguageSelect = (lang) => {
        localStorage.setItem('app-language', lang)
        i18n.changeLanguage(lang)
        setShowLanguages(false)
    }

    // Close modes dropdown on outside click
    const handleClickOutside = (event) => {
        if (modesRef.current && !modesRef.current.contains(event.target)) {
            setShowModes(false)
        }

        if (languagesRef.current && !languagesRef.current.contains(event.target)) {
            setShowLanguages(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <header className='header'>
            <nav className='header-nav'>
                <a href='#presentation' className='nav-link'>{t('header.navPresentation')}</a>
                <a href='#experience' className='nav-link'>{t('header.navExperience')}</a>
                <a href='#technologies' className='nav-link'>{t('header.navTechnologies')}</a>
                <a href='#about-me' className='nav-link'>{t('header.navAboutMe')}</a>

                {/* Mode selector */}
                <div ref={modesRef}>
                    <div className='header-current-state' onClick={handleCurrentModeClick}>
                        <Svg name={selectedMode + 'Mode'} />
                    </div>
                    {showModes && (
                        <div className='header-states'>
                            {modes.map((m) => (
                                <span key={m.key} onClick={() => handleModeSelect(m.key)}>
                                    {m.label}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Language selector */}
                <div ref={languagesRef}>
                    <div className='header-current-state' onClick={handleCurrentLanguageClick}>
                        <img
                            src={getFlagSrc(currentLanguage)}
                            alt={`Bandera de ${currentLanguage}`}
                            width={25} height={25}
                        />
                    </div>
                    {showLanguages && (
                        <div className='header-states'>
                            {languages.map((l) => (
                                <span key={l.key} onClick={() => handleLanguageSelect(l.key)}>
                                    {l.label}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}
