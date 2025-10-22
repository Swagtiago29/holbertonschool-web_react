import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BodySection from './BodySection'

describe('Body Section Tests', () => {

    test('should render the heading with the title passed as a prop', () => {
        render(<BodySection title={'Test Title'} />)

        const title = screen.getByText('Test Title')

        expect(title).toBeInTheDocument()
    })

    test('should render the children passed into it', () => {
        render(
            <BodySection>
                <p>Halo Welt</p>
            </BodySection>)
        
        const children = screen.getByText('Halo Welt')

        expect(children).toBeInTheDocument()
    })
})