import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from './Footer'

describe('Tests for Footer Component', () => {
    test('renders correct text on p element', () => {
        render(<Footer />)

        const footerP = screen.getByText(/copyright/i)
        const year = new Date().getFullYear()
        expect(footerP).toHaveTextContent(
            new RegExp(`copyright ${year} - holberton school`, 'i')
        )
    })
})