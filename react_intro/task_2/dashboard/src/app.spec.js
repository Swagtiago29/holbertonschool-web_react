import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('App component', () => {

    test('render h1 "School Dashboard"', () => {
        render(<App />)

        const h1Element = screen.getByRole('heading', {
            level: 1,
            name: /School dashboard/,
        })

        expect(h1Element).toBeInTheDocument()
    })

    test('renders correct text on p elements on App-footer, App-body', () => {
        render(<App />)

        const bodyP = screen.getByText(/Login to access the full dashboard/)
        const footerP = screen.getByText(/Copyright 2025 - holberton School/)

        expect(bodyP).toBeInTheDocument()
        expect(footerP).toBeInTheDocument()
    })

    test('renders image with correct alt', () => {
        render(<App />)

        const imgElement = screen.getByAltText(/holberton-logo/)

        expect(imgElement).toBeInTheDocument()
    })
})