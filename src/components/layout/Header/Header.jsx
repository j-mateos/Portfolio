import './Header.css'
import { useState, useEffect, useRef } from 'react'

/* eslint-disable no-unused-vars */
import { Svg } from '../../ui/Svg/Svg'
/* eslint-enable no-unused-vars */

export function Header () {
    const [currentMode, setCurrentMode] = useState('systemMode')
    const [showModes, setShowModes] = useState(false)
    const modes = [
        { key: 'systemMode', label: 'System' },
        { key: 'lightMode', label: 'Light' },
        { key: 'darkMode', label: 'Dark' }
    ]
    const modesRef = useRef(null)

    const handleCurrentModeClick = () => {
        setShowModes(!showModes)
    }

    const handleModeSelect = (mode) => {
        setCurrentMode(mode)
        setShowModes(false)
    }

    useEffect(() => {
        function handleClickOutside (event) {
            if (modesRef.current && !modesRef.current.contains(event.target)) {
                setShowModes(false)
            }
        }

        if (showModes) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showModes])

    return (
        <header className='header'>
            <nav className='header-nav'>
                <a href='#presentation' className='nav-link'>Presentación</a>
                <a href='#experience' className='nav-link'>Experiencia</a>
                <a href='#technologies' className='nav-link'>Tecnologías</a>
                <a href='#about-me' className='nav-link'>Sobre mí</a>
                <div ref={modesRef}>
                    <div className='header-current-modes' onClick={handleCurrentModeClick}>
                        <Svg name={currentMode} />
                    </div>
                    { showModes && (
                        <div className='header-modes'>
                            {modes.map((mode) => (
                                <span key={mode.key} onClick={() => handleModeSelect(mode.key)}>
                                    {mode.label}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}
