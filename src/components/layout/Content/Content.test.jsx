import {render, screen} from '../../../utils/test-utils'
import {Content} from './Content'
import {describe, it, expect} from 'vitest'

describe('Content', () => {
    it('should render main sections', () => {
        render(<Content />)
        expect(screen.getByRole('main')).toBeInTheDocument()
        const headings = screen.getAllByRole('heading', {name: /experience/i})
        expect(headings.length).toBeGreaterThan(0)
    })
})
