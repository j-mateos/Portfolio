import {render, screen} from '../../../utils/test-utils'
import {Footer} from './Footer'
import {describe, it, expect} from 'vitest'

describe('Footer', () => {
    it('should render correctly', () => {
        render(<Footer />)
        // Check if it renders content (e.g., standard text)
        expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    })
})
