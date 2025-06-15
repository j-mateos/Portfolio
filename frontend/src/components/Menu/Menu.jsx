import './Menu.css'

/* eslint-disable no-unused-vars */
import { Svg } from '../Svg/Svg'
/* eslint-enable no-unused-vars */

export function Menu () {
    return (
        <header className='menu-header'>
            <nav className='menu-nav'>
                <a href='#presentacion' className='nav-link'>Presentación</a>
                <a href='#experiencia' className='nav-link'>Experiencia</a>
                <a href='#tecnologias' className='nav-link'>Tecnologías</a>
                <a href='#sobre-mi' className='nav-link'>Sobre mí</a>
                <div className='menu-div'>
                    <Svg name='lightMode' />
                    <Svg name='darkMode' />
                    <Svg name='systemMode' />
                </div>
                <a>Idioma</a>
            </nav>
        </header>
    )
}
