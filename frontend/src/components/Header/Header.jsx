import './Header.css'

/* eslint-disable no-unused-vars */
import { Svg } from '../Svg/Svg'
/* eslint-enable no-unused-vars */

export function Header () {
    return (
        <header className='header'>
            <nav className='header-nav'>
                <a href='#presentation' className='nav-link'>Presentación</a>
                <a href='#experience' className='nav-link'>Experiencia</a>
                <a href='#technologies' className='nav-link'>Tecnologías</a>
                <a href='#about-me' className='nav-link'>Sobre mí</a>
                <div className='header-div'>
                    <Svg name='lightMode' />
                    <Svg name='darkMode' />
                    <Svg name='systemMode' />
                </div>
                <a>Idioma</a>
            </nav>
        </header>
    )
}
