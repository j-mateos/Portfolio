import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

/* eslint-disable no-unused-vars */
import { Header } from './Header'
/* eslint-enable no-unused-vars */

vi.mock('../../ui/Svg/Svg', () => ({
    Svg: ({ name }) => <div data-testid='svg'>{name}</div>
}))

const mockSetMode = vi.fn()
let mockSelectedMode = 'system'

vi.mock('../App/ThemeContext.jsx', () => ({
    useTheme: () => [
        mockSelectedMode === 'system' ? 'dark' : mockSelectedMode,
        mockSetMode,
        mockSelectedMode
    ]
}))

const simulateModeChange = (newMode) => {
    mockSelectedMode = newMode
}

describe('Header', () => {
    beforeEach(() => {
        mockSelectedMode = 'system'
        mockSetMode.mockClear()
    })

    test('Render navigation links', () => {
        render(<Header />)

        expect(screen.getByText('Presentación')).toBeInTheDocument()
        expect(screen.getByText('Experiencia')).toBeInTheDocument()
        expect(screen.getByText('Tecnologías')).toBeInTheDocument()
        expect(screen.getByText('Sobre mí')).toBeInTheDocument()
    })

    test('Shows the initial logo (system) and hides mode options', () => {
        render(<Header />)

        const svgLogo = screen.getByTestId('svg')

        expect(svgLogo).toHaveTextContent('systemMode')

        expect(screen.queryByText('Sistema')).not.toBeInTheDocument()

        fireEvent.click(svgLogo)
        expect(screen.getByText('Sistema')).toBeInTheDocument()
        expect(screen.getByText('Claro')).toBeInTheDocument()
        expect(screen.getByText('Oscuro')).toBeInTheDocument()

        fireEvent.mouseDown(document)
        expect(screen.queryByText('Sistema')).not.toBeInTheDocument()
    })

    test('Changes mode when selecting the "Light" option', () => {
        const { rerender } = render(<Header />)

        const svgLogo = screen.getByTestId('svg')
        fireEvent.click(svgLogo)

        const lightModeOption = screen.getByText('Claro')
        fireEvent.click(lightModeOption)

        expect(mockSetMode).toHaveBeenCalledWith('light')

        simulateModeChange('light')
        rerender(<Header />)

        expect(screen.getByTestId('svg')).toHaveTextContent('lightMode')
        expect(screen.queryByText('Sistema')).not.toBeInTheDocument()
    })

    test('Changes mode when selecting the "System" option', () => {
        const { rerender } = render(<Header />)

        const svgLogo = screen.getByTestId('svg')
        fireEvent.click(svgLogo)

        const systemModeOption = screen.getByText('Sistema')
        fireEvent.click(systemModeOption)

        expect(mockSetMode).toHaveBeenCalledWith('system')

        simulateModeChange('system')
        rerender(<Header />)

        expect(screen.getByTestId('svg')).toHaveTextContent('systemMode')
        expect(screen.queryByText('Claro')).not.toBeInTheDocument()
    })
})
