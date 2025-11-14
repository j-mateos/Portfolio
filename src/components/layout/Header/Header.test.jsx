import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from './Header'

vi.mock('../../ui/Svg/Svg', () => ({
    Svg: ({ name }) => <div data-testid="svg">{name}</div>
}))

describe('Header', () => {
    test('renderiza los links de navegación', () => {
        render(<Header />)

        expect(screen.getByText('Presentación')).toBeInTheDocument()
        expect(screen.getByText('Experiencia')).toBeInTheDocument()
        expect(screen.getByText('Tecnologías')).toBeInTheDocument()
        expect(screen.getByText('Sobre mí')).toBeInTheDocument()
        expect(screen.getByText('Idioma')).toBeInTheDocument()
    })

    test('muestra y oculta las opciones de modo al hacer click', () => {
        render(<Header />)

        const currentMode = screen.getByTestId('svg')
        // Al inicio, el menú de modos no está visible
        expect(screen.queryByText('System')).not.toBeInTheDocument()

        // Click para mostrar modos
        fireEvent.click(currentMode)
        expect(screen.getByText('System')).toBeInTheDocument()
        expect(screen.getByText('Light')).toBeInTheDocument()
        expect(screen.getByText('Dark')).toBeInTheDocument()

        // Click fuera (simulado) para ocultar modos
        fireEvent.mouseDown(document)
        expect(screen.queryByText('System')).not.toBeInTheDocument()
    })

    test('cambia el modo al seleccionar una opción', () => {
        render(<Header />)

        const currentMode = screen.getByTestId('svg')
        fireEvent.click(currentMode)

        const lightModeOption = screen.getByText('Light')
        fireEvent.click(lightModeOption)

        // Ahora el modo actual debería ser 'lightMode'
        expect(screen.getByTestId('svg')).toHaveTextContent('lightMode')
        // Y el menú debe cerrarse
        expect(screen.queryByText('System')).not.toBeInTheDocument()
    })
})
