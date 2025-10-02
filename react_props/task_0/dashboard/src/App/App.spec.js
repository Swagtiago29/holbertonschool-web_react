import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('App Component', () => {
  test('renders Notifications component', () => {
    render(<App />)
    expect(screen.getByText(/notifications/i)).toBeInTheDocument()
  })

  test('renders Header component', () => {
    render(<App />)
    expect(screen.getByText(/school dashboard/i)).toBeInTheDocument()
  })

  test('renders Login component', () => {
    render(<App />)
    expect(screen.getByText(/log in/i)).toBeInTheDocument()
  })

  test('renders Footer component', () => {
    render(<App />)
    expect(screen.getByText(/copyright/i)).toBeInTheDocument()
  })
})
