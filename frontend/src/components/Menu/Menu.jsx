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
                <div className='menu-div'>
                    <Svg name="lightMode" />
                    <Svg name="darkMode" />
                    <Svg name="systemMode" />
                </div>
                <a>Idioma</a>
            </nav>
        </header>
    )
}
