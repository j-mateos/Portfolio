import './Header.css'
import { useState, useEffect, useRef } from 'react'

/* eslint-disable no-unused-vars */
import { Svg } from '../../ui/Svg/Svg'
import { useTheme } from '../App/ThemeContext.jsx'
/* eslint-enable no-unused-vars */

export function Header () {
    const [, setMode, selectedMode] = useTheme()
    const [showModes, setShowModes] = useState(false)
    const modesRef = useRef(null)
    const modes = [
        { key: 'system', label: 'Sistema' },
        { key: 'light', label: 'Claro' },
        { key: 'dark', label: 'Oscuro' }
    ]

    const handleCurrentModeClick = () => setShowModes(!showModes)

    const handleModeSelect = (selected) => {
        // setMode receives 'system', 'light', or 'dark'
        setMode(selected)
        setShowModes(false)
    }

    const handleClickOutside = (event) => {
        if (modesRef.current && !modesRef.current.contains(event.target)) {
            setShowModes(false)
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
                <a href='#presentation' className='nav-link'>Presentación</a>
                <a href='#experience' className='nav-link'>Experiencia</a>
                <a href='#technologies' className='nav-link'>Tecnologías</a>
                <a href='#about-me' className='nav-link'>Sobre mí</a>
                <div ref={modesRef}>
                    <div className='header-current-modes' onClick={handleCurrentModeClick}>
                        <Svg name={selectedMode + 'Mode'} />
                    </div>
                    {showModes && (
                        <div className='header-modes'>
                            {modes.map((m) => (
                                <span key={m.key} onClick={() => handleModeSelect(m.key)}>
                                    {m.label}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}
