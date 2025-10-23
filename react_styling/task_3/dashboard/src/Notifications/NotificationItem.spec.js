import { fireEvent, render, screen } from "@testing-library/react";
import NotificationItem from "./NotificationItem";
import '@testing-library/jest-dom'

describe('Tests for NotificationItem', () => {

    test('should call markAsRead prop when click is triggered', () => {
        const mockMarkAsRead = jest.fn()
        render(<NotificationItem id={69} type="default" value="Click me" markAsRead={mockMarkAsRead} />)

        const item = screen.getByText('Click me') 
        fireEvent.click(item)

        expect(mockMarkAsRead).toHaveBeenCalledTimes(1)
    })
})