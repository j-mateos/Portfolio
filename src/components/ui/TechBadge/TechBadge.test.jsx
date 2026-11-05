import {render, screen} from '../../../utils/test-utils'
import {TechBadge} from './TechBadge'
import {describe, it, expect} from 'vitest'

describe('TechBadge', () => {
    it('should render correctly with text and svg', () => {
        render(<TechBadge text="React" svgName="react" />)
        expect(screen.getByText('React')).toBeInTheDocument()
    })
})
