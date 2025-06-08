import './Menu.css'

import { Svg } from '../Svg/Svg'

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
                    <Svg name="lightMode" size={22} color="#ffffff" />
                </a>
                <a>Idioma</a>
            </nav>
        </header>
    )
}
