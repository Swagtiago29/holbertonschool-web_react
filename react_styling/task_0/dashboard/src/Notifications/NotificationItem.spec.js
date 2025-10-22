import { fireEvent, render, screen } from "@testing-library/react";
import NotificationItem from "./NotificationItem";
import '@testing-library/jest-dom'

describe('Tests for NotificationItem', () => {

    test('should have blue color and data-notification-type default when type is default', () => {
        render(<NotificationItem type="default" value="Blue Notification" />)

        const blueLi = screen.getByText(/blue notification/i)

        expect(blueLi).toHaveAttribute("data-notification-type", "default")
        expect(blueLi).toHaveStyle({ color: 'rgb(0, 0, 255)' })
    })

    test('should have red color and data-notification-type urgent when typer is urgent', () => {
        render(<NotificationItem type="urgent" value="Red Notification" />)

        const redLI = screen.getByText(/red notification/i)

        expect(redLI).toHaveAttribute("data-notification-type", "urgent")
        expect(redLI).toHaveStyle({ color: 'rgb(255, 0, 0)' })
    })

    test('should call markAsRead prop when click is triggered', () => {
        const mockMarkAsRead = jest.fn()
        render(<NotificationItem id={69} type="default" value="Click me" markAsRead={mockMarkAsRead} />)

        const item = screen.getByText('Click me') 
        fireEvent.click(item)

        expect(mockMarkAsRead).toHaveBeenCalledTimes(1)
    })
})