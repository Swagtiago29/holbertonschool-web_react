import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('App component', () => {

    test('render h1 "School Dashboard"', () => {
        render(<App />)

        const h1Element = screen.getByRole('heading', {
            level: 1,
            name: /School dashboard/i,
        })

        expect(h1Element).toBeInTheDocument()
    })

    test('renders correct text on p elements on App-footer, App-body', () => {
        render(<App />)

        const bodyP = screen.getByText(/Login to access the full dashboard/i)
        const footerP = screen.getByText(/Copyright 2025 - holberton School/i)

        expect(bodyP).toBeInTheDocument()
        expect(footerP).toBeInTheDocument()
    })

    test('renders image with correct alt', () => {
        render(<App />)

        const imgElement = screen.getByAltText(/holberton logo/i)

        expect(imgElement).toBeInTheDocument()
    })

    test('renders email input element', () => {
        render(<App />)

        const emailInput = screen.getByLabelText(/email/i)

        expect(emailInput).toBeInTheDocument()
    })

    test('renders password input element', () => {
        render(<App />)

        const passInput = screen.getByLabelText(/password/i)

        expect(passInput).toBeInTheDocument()
    })

    test('renders label for email', () => {
        render(<App />)

        const emailLabel = screen.getByText(/Email:/i)

        expect(emailLabel).toBeInTheDocument()
    })

    test('renders label for password', () => {
        render(<App />)

        const passLabel = screen.getByText(/Password:/i)

        expect(passLabel).toBeInTheDocument()
    })

    test('renders the button with OK', () => {
        render(<App />)

        const button = screen.getByRole('button', { name: /ok/i })

        expect(button).toBeInTheDocument()
    })
})
