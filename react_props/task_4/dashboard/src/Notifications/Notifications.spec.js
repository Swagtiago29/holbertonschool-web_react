import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";
import '@testing-library/jest-dom'

describe('Notifications Test', () => {
    const testNotifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } }
    ];

    test('inner p renders correctly', () => {
        render(<Notifications notifications={testNotifications} />)
        const pInner = screen.getByText(/here is the list of notifications/i)
        expect(pInner).toBeInTheDocument()
    })

    test('button correctly renders', () => {
        render(<Notifications notifications={testNotifications} />)
        const Notifbutton = screen.getByRole('button')
        expect(Notifbutton).toBeInTheDocument()
    })

    test('list elements render correctly', () => {
        render(<Notifications notifications={testNotifications} />)
        const listElements = screen.getAllByRole('listitem')
        expect(listElements.length).toBe(3)
    })

    test('should log when button clicked', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => { })
        render(<Notifications notifications={testNotifications} />)

        const closeButton = screen.getByRole('button')
        fireEvent.click(closeButton)

        expect(logSpy).toHaveBeenCalledWith("Close button has been clicked")
    })
})