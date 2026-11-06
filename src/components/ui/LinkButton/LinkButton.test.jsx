import {render, screen} from '../../../utils/test-utils'
import {LinkButton} from './LinkButton'
import {describe, it, expect} from 'vitest'

describe('LinkButton', () => {
    it('should render link button with correct text and url', () => {
        render(<LinkButton text="GitHub" url="https://github.com" svgName="gitHub" />)
        const link = screen.getByRole('link', {name: /github/i})
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', 'https://github.com')
    })
})
