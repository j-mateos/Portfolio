import {render, screen} from '../../../utils/test-utils'
import {TechSection} from './TechSection'
import {describe, it, expect} from 'vitest'

describe('TechSection', () => {
    it('should render title and children', () => {
        render(
            <TechSection title="Frontend">
                <div>Badge</div>
            </TechSection>
        )
        expect(screen.getByText('Frontend')).toBeInTheDocument()
        expect(screen.getByText('Badge')).toBeInTheDocument()
    })
})
