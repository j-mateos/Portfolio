import {render, screen, fireEvent} from '../../../utils/test-utils'
import {vi} from 'vitest'
import {Header} from './Header'

vi.mock('../../ui/SvgIcon/SvgIcon', () => ({
    SvgIcon: ({name}) => <div data-testid="svg">{name}</div>,
}))

const mockSetMode = vi.fn()
let mockSelectedMode = 'system'

vi.mock('@/context/ThemeContext', async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...actual,
        useTheme: () => [
            mockSelectedMode === 'system' ? 'dark' : mockSelectedMode,
            mockSetMode,
            mockSelectedMode,
        ],
    }
})

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

        expect(screen.getByText('header.navPresentation')).toBeInTheDocument()
        expect(screen.getByText('header.navExperience')).toBeInTheDocument()
        expect(screen.getByText('header.navTechnologies')).toBeInTheDocument()
        expect(screen.getByText('header.navAboutMe')).toBeInTheDocument()
    })

    test('Shows the initial logo (system) and hides mode options', () => {
        render(<Header />)

        const svgLogo = screen.getByTestId('svg')

        expect(svgLogo).toHaveTextContent('systemMode')

        expect(screen.queryByText('header.modeSystem')).not.toBeInTheDocument()

        fireEvent.click(svgLogo)
        expect(screen.getByText('header.modeSystem')).toBeInTheDocument()
        expect(screen.getByText('header.modeLight')).toBeInTheDocument()
        expect(screen.getByText('header.modeDark')).toBeInTheDocument()

        fireEvent.mouseDown(document.body)
        expect(screen.queryByText('header.modeSystem')).not.toBeInTheDocument()
    })

    test('Changes mode when selecting the "Light" option', () => {
        const {rerender} = render(<Header />)

        const svgLogo = screen.getByTestId('svg')
        fireEvent.click(svgLogo)

        const lightModeOption = screen.getByText('header.modeLight')
        fireEvent.click(lightModeOption)

        expect(mockSetMode).toHaveBeenCalledWith('light')

        simulateModeChange('light')
        rerender(<Header />)

        expect(screen.getByTestId('svg')).toHaveTextContent('lightMode')
        expect(screen.queryByText('header.modeSystem')).not.toBeInTheDocument()
    })

    test('Changes mode when selecting the "System" option', () => {
        const {rerender} = render(<Header />)

        const svgLogo = screen.getByTestId('svg')
        fireEvent.click(svgLogo)

        const systemModeOption = screen.getByText('header.modeSystem')
        fireEvent.click(systemModeOption)

        expect(mockSetMode).toHaveBeenCalledWith('system')

        simulateModeChange('system')
        rerender(<Header />)

        expect(screen.getByTestId('svg')).toHaveTextContent('systemMode')
        expect(screen.queryByText('header.modeLight')).not.toBeInTheDocument()
    })
})
