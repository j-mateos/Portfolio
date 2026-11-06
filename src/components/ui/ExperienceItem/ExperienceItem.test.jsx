import {render, screen} from '../../../utils/test-utils'
import {ExperienceItem} from './ExperienceItem'
import {describe, it, expect} from 'vitest'

describe('ExperienceItem', () => {
    it('should render experience details correctly', () => {
        const description = ['Task 1', 'Task 2']
        render(
            <ExperienceItem
                title="Developer"
                company="Company X"
                startDate="2020"
                endDate="2021"
                description={description}
            />
        )
        expect(screen.getByText('Developer')).toBeInTheDocument()
        expect(screen.getByText('Company X')).toBeInTheDocument()
        expect(screen.getByText('Task 1')).toBeInTheDocument()
    })

    it('should handle empty description gracefully', () => {
        const {container} = render(
            <ExperienceItem
                title="Developer"
                company="Company X"
                startDate="2020"
                endDate="2021"
                description={[]}
            />
        )
        const list = container.querySelector('ul')
        expect(list).toBeInTheDocument()
        expect(list.children.length).toBe(0)
    })
})
