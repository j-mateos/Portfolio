import {render, screen} from '../../../utils/test-utils'
import {Subtitle} from './Subtitle'
import {describe, it, expect} from 'vitest'

describe('Subtitle', () => {
    it('should render the subtitle text', () => {
        render(<Subtitle text="Mi Experiencia" svgName="experience" />)
        expect(screen.getByText('Mi Experiencia')).toBeInTheDocument()
    })
})
