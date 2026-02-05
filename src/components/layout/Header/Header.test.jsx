import {render, screen, fireEvent} from '@testing-library/react'
import {vi} from 'vitest'
import {Header} from './Header'

vi.mock('../../ui/SvgIcon/SvgIcon', () => ({
    SvgIcon: ({name}) => <div data-testid="svg">{name}</div>,
}))

const mockSetMode = vi.fn()
let mockSelectedMode = 'system'

vi.mock('@/context/ThemeContext', () => ({
    useTheme: () => [
        mockSelectedMode === 'system' ? 'dark' : mockSelectedMode,
        mockSetMode,
        mockSelectedMode,
    ],
}))

const simulateModeChange = (newMode) => {
    mockSelectedMode = newMode
}

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key) => {
            switch (key) {
                // Navigation
                case 'header.navPresentation':
                    return 'Presentación'
                case 'header.navExperience':
                    return 'Experiencia'
                case 'header.navTechnologies':
                    return 'Tecnologías'
                case 'header.navAboutMe':
                    return 'Sobre mí'
                // Modes
                case 'header.modeSystem':
                    return 'Sistema'
                case 'header.modeLight':
                    return 'Claro'
                case 'header.modeDark':
                    return 'Oscuro'
                default:
                    return key
            }
        },
        i18n: {
            language: 'es',
            changeLanguage: vi.fn(),
        },
    }),
}))

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

        fireEvent.mouseDown(document.body)
        expect(screen.queryByText('Sistema')).not.toBeInTheDocument()
    })

    test('Changes mode when selecting the "Light" option', () => {
        const {rerender} = render(<Header />)

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
        const {rerender} = render(<Header />)

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
