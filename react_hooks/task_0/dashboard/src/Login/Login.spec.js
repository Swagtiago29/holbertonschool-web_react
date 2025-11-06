import { fireEvent, render, screen } from '@testing-library/react'
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
        expect(inputs.length).toBe(3);
    })

    test('renders the button with OK', () => {
        render(<Login />)

        const button = screen.getByRole('button', { name: /ok/i })
        expect(button).toBeInTheDocument()
    })

    test('Submit button is disabled by default', () => {
        render(<Login />);

        const submitButton = screen.getByRole('button', { name: /ok/i });
        expect(submitButton).toBeDisabled();
    });

    test('Submit button enables only when email and password are valid', () => {
        render(<Login />)

        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/password/i)
        const submitButton = screen.getByRole('button', {name: /ok/i})

        expect(submitButton).toBeDisabled();

        fireEvent.change(emailInput, {target: {value: 'invalidEmailXd'}})
        fireEvent.change(passwordInput, {target: {value: '1234567'}})

        expect(submitButton).toBeDisabled()

        fireEvent.change(emailInput, {target: {value: 'validemail@example.com'}})
        fireEvent.change(passwordInput, {target: {value: '12345678'}})

        expect(submitButton).toBeEnabled()
    })
})