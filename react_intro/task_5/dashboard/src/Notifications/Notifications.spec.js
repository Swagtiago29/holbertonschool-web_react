import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";
import '@testing-library/jest-dom'

describe('Notifications Test', () => {

    test('inner p renders correctly', () => {
        render(<Notifications />)
        const pInner = screen.getByText(/here is the list of notifications/i)
        expect(pInner).toBeInTheDocument()
    })

    test('button correctly renders', () => {
        render(<Notifications />)
        const Notifbutton = screen.getByRole('button')
        expect(Notifbutton).toBeInTheDocument()
    })

    test('list elements render correctly', () => {
        render(<Notifications />)
        const listElements = screen.getAllByRole('listitem')
        expect(listElements.length).toBe(3)
    })

    test('should log when button clicked', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => { })
        render(<Notifications />)

        const closeButton = screen.getByRole('button')
        fireEvent.click(closeButton)

        expect(logSpy).toHaveBeenCalledWith("Close button has been clicked")
    })
})