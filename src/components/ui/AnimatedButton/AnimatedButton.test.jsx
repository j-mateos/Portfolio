import {render, screen, fireEvent, act} from '../../../utils/test-utils'
import {AnimatedButton} from './AnimatedButton'
import {describe, it, expect} from 'vitest'

describe('AnimatedButton', () => {
    it('should render the button correctly', () => {
        render(
            <AnimatedButton
                text="Copy"
                backgroundText="Copied!"
                copyToClipboard="test"
                svgName="email"
            />
        )
        expect(screen.getByText('Copy')).toBeInTheDocument()
    })

    it('should show copied text after click', async () => {
        render(
            <AnimatedButton
                text="Copy"
                backgroundText="Copied!"
                copyToClipboard="test"
                svgName="email"
            />
        )
        const button = screen.getByRole('button')

        await act(async () => {
            fireEvent.click(button)
        })

        expect(screen.getByText('Copied!', {selector: 'span:not(.sr-only)'})).toBeInTheDocument()
    })
})
