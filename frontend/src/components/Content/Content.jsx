import './Content.css'

import { Button } from '../Button/Button'
import { Subtittle } from '../Subtittle/Subtittle'

export function Content () {
    return (
        <main className='content-main'>
            <section className='content-presentation'>
                <div>Foto</div>
                <h1>Hola! Soy Juanma</h1>
                <p>
                    <strong>Ingeniero Informático y Matemático</strong> por la UGR.<br />
                    Actualmente vivo en Madrid, España. Estoy interesado en temas como el <strong>desarrollo</strong> y la <strong>ciberseguridad</strong>.
                </p>
                <div className='content-buttons'>
                    <Button name="gitHub" text="GitHub" viewBox='0 0 1024 1024' />
                    <Button name="linkedIn" text="LinkedIn" viewBox='0 0 256 256' />
                </div>
            </section>
            <section className='content-experience'>
                <Subtittle name="experience" text="Experiencia" />
                <p>He trabajado en diversas empresas.</p>
            </section>
            <section className='content-projects'>
                <Subtittle name="technologies" text="Tecnologías" />
                <p>He desarrollado varios proyectos interesantes.</p>
            </section>
            <section className='content-about'>
                <Subtittle name="aboutMe" text="Sobre mí" />
                <p>Me apasiona la tecnología y la innovación.</p>
            </section>
        </main>
    )
}
