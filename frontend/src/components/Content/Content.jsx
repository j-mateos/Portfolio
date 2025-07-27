import './Content.css'

/* eslint-disable no-unused-vars */
import { Button } from '../Button/Button'
import { Subtitle } from '../Subtitle/Subtitle'
import { Tool } from '../Tool/Tool'
/* eslint-enable no-unused-vars */

export function Content () {
    return (
        <main className='content'>
            <section id='presentation' className='content-presentation'>
                <div>
                    <img src='assets/Fotografia.webp' alt='Foto sobre mi' className='content-image' />
                </div>
                <div>
                    <h1>Hola, soy Juanma</h1>
                    <p>
                        <strong>Ingeniero Informático y Matemático</strong> por la Universidad de Granada. <br />
                        Actualmente estoy centrado en áreas relacionadas con el <strong>desarrollo de software</strong> y la <strong>ciberseguridad</strong>.
                    </p>
                    <div className='content-buttons'>
                        <Button text='GitHub' url='https://github.com/Trajano1999' svgName='gitHub' />
                        <Button text='LinkedIn' url='https://www.linkedin.com/in/juan-manuel-m-971493268/' svgName='linkedIn' />
                    </div>
                </div>
            </section>
            <section id='experience'>
                <Subtitle text='Experiencia' svgName='experience' />
                <ol className='content-experience'>
                    <div>Experiencia1</div>
                    <div>Experiencia2</div>
                </ol>
            </section>
            <section id='technologies'>
                <Subtitle text='Tecnologías' svgName='technologies' />
                <p>
                    Durante mi carrera profesional, he desarrollado <strong>habilidades y experiencia</strong> en gran variedad de lenguajes y herramientas. Mi <strong>stack tecnológico</strong> es el siguiente:
                </p>
                <div className='content-technologies'>
                    <article>
                        <h3>Frontend</h3>
                        <aside>
                            <Tool text='HTML' svgName='html' />
                            <Tool text='CSS' svgName='css' />
                            <Tool text='Bootstrap' svgName='bootstrap' />
                            <Tool text='JavaScript' svgName='javaScript' />
                            <Tool text='Figma' svgName='figma' />
                        </aside>
                    </article>
                    <article>
                        <h3>Backend</h3>
                        <aside>
                            <Tool text='C++' svgName='c++' />
                            <Tool text='Java' svgName='java' />
                            <Tool text='Python' svgName='python' />
                            <Tool text='NodeJS' svgName='nodejs' />
                            <Tool text='Ruby' svgName='ruby' />
                            <Tool text='MySQL' svgName='mysql' />
                            <Tool text='PostgreSQL' svgName='postgresql' />
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
                <p>Me apasiona la programación y la innovación.</p>
            </section>
        </main>
    )
}
