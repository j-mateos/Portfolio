import './Menu.css'

export function Menu() {
  return (
    <header className='menu-header'>
      <nav className='menu-nav'>
        <a>Experiencia</a>
        <a>Proyectos</a>
        <a>Sobre mí</a>
      </nav>
      <section className='menu-section'>
        <a>Modo</a>
        <a>Idioma</a>
      </section>
    </header>
  )
}
