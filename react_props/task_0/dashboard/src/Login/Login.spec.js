import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from './Login'

describe('Tests for Login Component', () => {

    test('renders label for email', () => {
        render(<Login />)

        const emailLabel = screen.getByText(/email/i)
        expect(emailLabel).toBeInTheDocument()
    })

    test('renders label for password', () => {
        render(<Login />)

        const passLabel = screen.getByText(/password/i)
        expect(passLabel).toBeInTheDocument()
    })

    test('renders 2 input elements (email and password)', () => {
        render(<Login />);
        const inputs = document.querySelectorAll('input');
        expect(inputs.length).toBe(2);
    })

    test('renders the button with OK', () => {
        render(<Login />)

        const button = screen.getByRole('button', { name: /ok/i })
        expect(button).toBeInTheDocument()
    })
})