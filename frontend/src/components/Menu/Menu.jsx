import './Menu.css'

/* eslint-disable no-unused-vars */
import { Svg } from '../Svg/Svg'
/* eslint-enable no-unused-vars */

export function Menu () {
    return (
        <header className='menu-header'>
            <nav className='menu-nav'>
                <a>Presentación</a>
                <a>Experiencia</a>
                <a>Tecnologías</a>
                <a>Sobre mí</a>
                <a>
                    <Svg name="lightMode" size={22} color="#ffffff" />
                    <Svg name="darkMode" size={22} color="#ffffff" />
                    <Svg name="systemMode" size={22} color="#ffffff" />
                </a>
                <a>Idioma</a>
            </nav>
        </header>
    )
}
