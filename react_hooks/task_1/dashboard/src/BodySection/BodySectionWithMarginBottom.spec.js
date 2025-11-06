import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'

describe('BodySectionWithMarginBottom Section Tests', () => {

    test('should render a div with className: "bodySectionWithMargin"', () => {
        render(<BodySectionWithMarginBottom title={'test title'} />)

        const divClass = screen.getByTestId('body-section-with-margin')

        expect(divClass).toHaveClass('bodySectionWithMargin')
    })

    test('should render Body Section as children', () => {
        render(<BodySectionWithMarginBottom title={'title test'}/>)

        const innertitle = screen.getByText('title test')
        
        expect(innertitle).toBeInTheDocument()
        expect(innertitle.tagName).toBe('H2')
    })
})