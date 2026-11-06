import {render} from '../../../utils/test-utils'
import {SvgIcon} from './SvgIcon'
import {describe, it, expect} from 'vitest'

describe('SvgIcon', () => {
    it('should render correctly', () => {
        const {container} = render(<SvgIcon name="email" size={17} />)
        expect(container.querySelector('svg')).toBeInTheDocument()
    })
})
