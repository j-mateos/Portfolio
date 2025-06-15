import './Content.css'

/* eslint-disable no-unused-vars */
import { Button } from '../Button/Button'
import { Subtittle } from '../Subtittle/Subtittle'
/* eslint-enable no-unused-vars */

export function Content () {
    return (
        <main className='content-main'>
            <section id='presentacion' className='content-presentation'>
                <div>Foto</div>
                <h1>Hola! Soy Juanma</h1>
                <p>
                    <strong>Ingeniero Informático y Matemático</strong> por la UGR.<br />
                    Actualmente vivo en Madrid, España. Estoy interesado en temas como el <strong>desarrollo</strong> y la <strong>ciberseguridad</strong>.
                </p>
                <div className='content-buttons'>
                    <Button name='gitHub' text='GitHub' url='https://github.com/Trajano1999' viewBox='0 0 1024 1024' />
                    <Button name='linkedIn' text='LinkedIn' url='https://www.linkedin.com/in/juan-manuel-m-971493268/' viewBox='0 0 256 256' />
                </div>
            </section>
            <section id='experiencia' className='content-experience'>
                <Subtittle name='experience' text='Experiencia' />
                <p>He trabajado en diversas empresas.</p>
            </section>
            <section id='tecnologias' className='content-projects'>
                <Subtittle name='technologies' text='Tecnologías' />
                <p>He desarrollado proyectos en distintas tecnologías.</p>
            </section>
            <section id='sobre-mi' className='content-about'>
                <Subtittle name='aboutMe' text='Sobre mí' />
                <p>Me apasiona la programación y la innovación.</p>
            </section>
        </main>
    )
}
