import './Content.css'

/* eslint-disable no-unused-vars */
import { Subtitle } from '../../ui/Subtitle/Subtitle'
import { Tool } from '../../ui/Tool/Tool'
import { Job } from '../../ui/Job/Job'
import { LinkButton } from '../../ui/LinkButton/LinkButton'
import { AnimatedButton } from '../../ui/AnimatedButton/AnimatedButton'

import image from '../../../assets/photo.webp'
/* eslint-enable no-unused-vars */

export function Content () {
    return (
        <main className='content'>
            <section id='presentation' className='content-presentation'>
                <div>
                    <img
                        src={image}
                        alt='Mi fotografía'
                        className='content-image' />
                </div>
                <div>
                    <h1>Hola, soy Juanma</h1>
                    <p>
                        Soy <strong>Ingeniero Informático y Matemático</strong> por la Universidad de Granada.
                        <br />
                        Actualmente centro mi actividad profesional en el <strong>desarrollo de software</strong> y la <strong>ciberseguridad</strong>.
                    </p>
                    <div className='content-buttons'>
                        <AnimatedButton
                            text='Correo'
                            copyToClipboard='correojumape@gmail.com'
                            svgName='email'
                            svgSize={17} />
                        <LinkButton
                            text='LinkedIn'
                            url='https://www.linkedin.com/in/juan-manuel-m-971493268/'
                            svgName='linkedIn' />
                        <LinkButton
                            text='GitHub'
                            url='https://github.com/Trajano1999'
                            svgName='gitHub' />
                    </div>
                </div>
            </section>

            <section id='experience'>
                <Subtitle text='Experiencia' svgName='experience' />
                <ol className='content-experience'>
                    <Job
                        title='DevSecOps'
                        company='TecData Engineering'
                        startDate='Mayo 2025'
                        endDate='Actualidad'
                        description={[
                            'Desarrollo fullstack de una aplicación ASPM para la gestión de vulnerabilidades de seguridad.'
                        ]} />
                    <Job
                        title='Consultor de ciberseguridad'
                        company='Deloitte'
                        startDate='Julio 2024'
                        endDate='Mayo 2025'
                        description={[
                            'Automatización de procesos de escaneos de seguridad de aplicaciones en el SDLC.',
                            'Experiencia en el modelo DevSecOps y la integración de pipelines CI/CD.'
                        ]} />
                    <Job
                        title='Desarrollador de software'
                        company='Servicios Integrales de Congresos'
                        startDate='Enero 2024'
                        endDate='Junio 2024'
                        description={[
                            'Desarrollo y diseño de aplicaciones, una móvil y otra de escritorio.',
                            'Gestión de una API REST común para distintas páginas web.'
                        ]} />
                </ol>
            </section>

            <section id='technologies'>
                <Subtitle text='Tecnologías' svgName='technologies' />
                <p>
                    Durante mi carrera profesional, he desarrollado <strong>habilidades y experiencia</strong> en gran variedad de lenguajes y herramientas.
                    Mi <strong>stack tecnológico</strong> es el siguiente:
                </p>
                <div className='content-technologies'>
                    <article>
                        <h3>Frontend</h3>
                        <aside>
                            <Tool text='HTML' svgName='html' />
                            <Tool text='CSS' svgName='css' />
                            <Tool text='Bootstrap' svgName='bootstrap' />
                            <Tool text='JavaScript' svgName='javascript' />
                            <Tool text='Figma' svgName='figma' />
                        </aside>
                    </article>
                    <article>
                        <h3>Backend</h3>
                        <aside>
                            <Tool text='Java' svgName='java' />
                            <Tool text='NodeJS' svgName='nodejs' />
                            <Tool text='Python' svgName='python' />
                            <Tool text='C++' svgName='c++' />
                            <Tool text='C' svgName='c' />
                            <Tool text='Ruby' svgName='ruby' />
                            <Tool text='PostgreSQL' svgName='postgresql' />
                            <Tool text='MySQL' svgName='mysql' />
                        </aside>
                    </article>
                    <article>
                        <h3>Aprendiendo</h3>
                        <aside>
                            <Tool text='React' svgName='react' />
                            <Tool text='Spring' svgName='spring' />
                            <Tool text='Docker' svgName='docker' />
                            <Tool text='Kubernetes' svgName='kubernetes' />
                            <Tool text='AWS' svgName='aws' />
                        </aside>
                    </article>
                    <article>
                        <h3>Herramientas</h3>
                        <aside>
                            <Tool text='Git' svgName='git' />
                            <Tool text='Bash' svgName='bash' />
                            <Tool text='VSCode' svgName='vscode' />
                        </aside>
                    </article>
                </div>
            </section>

            <section id='about-me'>
                <Subtitle text='Sobre mí' svgName='aboutMe' />
                <div className='content-about-me'>
                    <p>
                        Aunque mi nombre es Juan Manuel, todo el mundo me conoce como <strong>Juanma</strong>. Terminé el doble grado hace unos años y desde
                        entonces he centrado mi recorrido profesional tanto en el <strong>desarrollo de software</strong>, como en la <strong>ciberseguridad</strong>,
                        disciplinas que requieren <strong>aprendizaje continuo</strong> y un dominio sólido de herramientas y conceptos técnicos para poder crear
                        soluciones eficientes, escalables y seguras.
                    </p>
                    <p>
                        Mi objetivo es seguir <strong>desarrollándome como profesional</strong>, asumir nuevos retos y participar en iniciativas que impulsen
                        la innovación en el ámbito del software. Dentro de algunos años me gustaría contar con la experiencia necesaria para
                        ser <strong>arquitecto de software</strong>, y así poder tomar decisiones clave en el diseño de sistemas complejos, asegurando su
                        robustez, escalabilidad, seguridad y eficiencia.
                    </p>
                </div>
            </section>
        </main>
    )
}
