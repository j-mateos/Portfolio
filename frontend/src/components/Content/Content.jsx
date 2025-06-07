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
                    Actualmente vivo en Madrid, España.
                    Estoy interesado en temas como el <strong>desarrollo</strong> y la <strong>ciberseguridad</strong>.
                </p>
                <div className='content-buttons'>
                    <Button pathImage="assets/dark_mode.png" text="GitHub" />
                    <Button pathImage="assets/dark_mode2.png" text="LinkedIn" />
                </div>
            </section>
            <section className='content-experience'>
                <Subtittle pathImage="assets/dark_mode.png" text="Experiencia" />
                <p>He trabajado en diversas empresas.</p>
            </section>
            <section className='content-projects'>
                <Subtittle pathImage="assets/dark_mode.png" text="Proyectos" />
                <p>He desarrollado varios proyectos interesantes.</p>
            </section>
            <section className='content-about'>
                <Subtittle pathImage="assets/dark_mode.png" text="Sobre mí" />
                <p>Me apasiona la tecnología y la innovación.</p>
            </section>
        </main>
    )
}
