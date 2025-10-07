import { render, screen, fireEvent } from '@testing-library/react'
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
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument()
  })

  test('renders Footer component', () => {
    render(<App />)
    expect(screen.getByText(/copyright/i)).toBeInTheDocument()
  })

  test('when isLoggedIn is false it renders Login Component', () => {
    render(<App />)

    const loginText = screen.getByText(/login to access the full dashboard/i)
    expect(loginText).toBeInTheDocument()

    const rows = screen.queryAllByRole('row')
    expect(rows).toHaveLength(0)
  })

  test('when isLoggedIn is true it renders CourseList Component', () => {
    render(<App isLoggedIn={true} />)

    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()

    const loginText = screen.queryByText(/login to access the full dashboard/i)
    expect(loginText).not.toBeInTheDocument()
  })
})

describe('App Component keydown events', () => {

  const originalAlert = window.alert

  afterEach(() => {
    window.alert = originalAlert
    jest.clearAllMocks()
  })

  test('should call LogOut()once when crtl and h is down', () => {
    const logOutMock = jest.fn()
    render(<App isLoggedIn={true} logOut={logOutMock} />)

    fireEvent.keyDown(document, {
      key: 'h',
      ctrlKey: true
    })

    expect(logOutMock).toHaveBeenCalledTimes(1)
  })

  test('should call alert with "Logging you out" when ctrl and h is down', () => {
    const logOutMock = jest.fn()
    const alertMock = jest.fn()
    window.alert = alertMock

    render(<App isLoggedIn={true} logOut={logOutMock} />)

    fireEvent.keyDown(document, {
      key: 'h',
      ctrlKey: true
    })

    expect(alertMock).toHaveBeenCalledWith("Logging you out")
  })
})