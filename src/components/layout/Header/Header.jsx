import {useState, useEffect, useRef} from 'react'
import {useTheme} from '@/context/ThemeContext'
import {useTranslation} from 'react-i18next'
import {SvgIcon} from '@/components/ui/SvgIcon/SvgIcon'

const flagSvgs = import.meta.glob('@/assets/icons/flag_*.svg', {
    eager: true,
    import: 'default',
})

// Obtains the flag URL based on the language key
const getFlagSrc = (languageKey) => {
    const fileName = `flag_${languageKey}.svg`
    const key = Object.keys(flagSvgs).find((k) => k.endsWith(fileName))
    return flagSvgs[key]
}

export function Header() {
    const {t, i18n} = useTranslation()

    // Variables and state for theme modes
    const [, setMode, selectedMode] = useTheme()
    const [showModes, setShowModes] = useState(false)
    const modesRef = useRef(null)
    const modes = [
        {key: 'system', label: t('header.modeSystem')},
        {key: 'light', label: t('header.modeLight')},
        {key: 'dark', label: t('header.modeDark')},
    ]

    // Variables and state for language selection
    const currentLanguage = i18n.language
    const [showLanguages, setShowLanguages] = useState(false)
    const languagesRef = useRef(null)
    const languages = [
        {key: 'es', label: 'Español'},
        {key: 'en', label: 'English'},
    ]

    // Handle mode selection
    const handleModeSelect = (selected) => {
        // setMode receives 'system', 'light', or 'dark'
        setMode(selected)
        setShowModes(false)
    }

    // Handle language selection
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

    // Detect clicks outside the component
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Keep the <html lang> attribute in sync with the active language
    useEffect(() => {
        document.documentElement.lang = i18n.language
    }, [i18n.language])

    return (
        <header className="fixed top-0 z-20 mt-2.5 flex w-full items-center justify-center">
            <nav className="nav-scroll relative flex gap-2 px-2 outline-1 outline-solid outline-(--transparent-color) [&>a]:p-2 [&>a]:font-medium [&>a]:whitespace-nowrap [&>a]:text-(--text-color) [&>a]:no-underline [&>a]:hover:cursor-pointer [&>a]:hover:text-(--bold-color) [&>div]:relative [&>div]:flex [&>div>*]:p-2 [&>div>*]:font-medium [&>div>*]:whitespace-nowrap [&>div>*]:text-(--text-color) [&>div>*]:no-underline">
                <a href="#presentation">{t('header.navPresentation')}</a>
                <a href="#experience">{t('header.navExperience')}</a>
                <a href="#technologies">{t('header.navTechnologies')}</a>
                <a href="#about-me">{t('header.navAboutMe')}</a>

                {/* Mode selector */}
                <div
                    ref={modesRef}
                    onMouseEnter={() => setShowModes(true)}
                    onMouseLeave={() => setShowModes(false)}
                    onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) setShowModes(false)
                    }}
                >
                    <button
                        type="button"
                        aria-label={t('header.modeLabel')}
                        aria-expanded={showModes}
                        className="flex cursor-pointer items-center justify-center [&>svg]:hover:scale-120 [&>svg_path]:fill-(--text-color)"
                        onClick={() => setShowModes(true)}
                    >
                        <SvgIcon name={selectedMode + 'Mode'} />
                    </button>
                    {showModes && (
                        <div className="absolute top-12 flex w-25 flex-col gap-1 rounded-[5px] bg-(--background-color) text-(length:--small-font-size) outline-1 outline-solid outline-(--border-color) before:absolute before:inset-x-0 before:-top-4 before:h-4 max-tablet:right-0">
                            {modes.map((m) => (
                                <button
                                    type="button"
                                    key={m.key}
                                    className="px-2 py-1 text-left hover:cursor-pointer hover:text-(--bold-color)"
                                    onClick={() => handleModeSelect(m.key)}
                                >
                                    {m.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Language selector */}
                <div
                    ref={languagesRef}
                    onMouseEnter={() => setShowLanguages(true)}
                    onMouseLeave={() => setShowLanguages(false)}
                    onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) setShowLanguages(false)
                    }}
                >
                    <button
                        type="button"
                        aria-expanded={showLanguages}
                        className="flex cursor-pointer items-center justify-center [&>img]:hover:scale-120"
                        onClick={() => setShowLanguages(true)}
                    >
                        <img
                            src={getFlagSrc(currentLanguage)}
                            alt={t('header.flagAlt', {
                                language: languages.find((l) => l.key === currentLanguage)?.label,
                            })}
                            className="size-6.25 object-contain"
                        />
                    </button>
                    {showLanguages && (
                        <div className="absolute top-12 flex w-25 flex-col gap-1 rounded-[5px] bg-(--background-color) text-(length:--small-font-size) outline-1 outline-solid outline-(--border-color) before:absolute before:inset-x-0 before:-top-4 before:h-4 max-tablet:right-0">
                            {languages.map((l) => (
                                <button
                                    type="button"
                                    key={l.key}
                                    className="px-2 py-1 text-left hover:cursor-pointer hover:text-(--bold-color)"
                                    onClick={() => handleLanguageSelect(l.key)}
                                >
                                    {l.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}
