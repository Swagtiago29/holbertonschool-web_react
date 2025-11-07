import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";
import '@testing-library/jest-dom'
import NotificationItem from "./NotificationItem";

describe('Notifications Test', () => {
    const testNotifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } }
    ];

    test('inner p renders correctly', () => {
        render(<Notifications notifications={testNotifications} displayDrawer={true} />)
        const pInner = screen.getByText(/here is the list of notifications/i)
        expect(pInner).toBeInTheDocument()
    })

    test('button correctly renders', () => {
        render(<Notifications notifications={testNotifications} displayDrawer={true} />)
        const Notifbutton = screen.getByRole('button')
        expect(Notifbutton).toBeInTheDocument()
    })

    test('list elements render correctly', () => {
        render(<Notifications notifications={testNotifications} displayDrawer={true} />)
        const listElements = screen.getAllByRole('listitem')
        expect(listElements.length).toBe(3)
    })

    test('should not render root-div when displayDrawer is false', () => {
        const notificationsList = [
            {
                id: Math.floor(Math.random() * 10000),
                type: 'default',
                value: 'New course available'
            },
            {
                id: Math.floor(Math.random() * 10000),
                type: 'urgent',
                value: 'New resume available'
            },
            {
                id: Math.floor(Math.random() * 10000),
                type: 'urgent',
                html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }
            }
        ]
        render(<Notifications notifications={notificationsList} displayDrawer={false} />)

        const notificationsTitle = screen.getByText(/your notifications/i)
        expect(notificationsTitle).toBeInTheDocument()

        const closeButton = screen.queryByRole('button')
        expect(closeButton).not.toBeInTheDocument()

        const pElement = screen.queryByText(/here is the list of notifications/i)
        expect(pElement).not.toBeInTheDocument()

    })

    test('should render "No new notification for now" when displayDrawer is true and notifications is empty', () => {
        render(<Notifications displayDrawer={true} />)

        const notificationsWarning = screen.getByText(/no new notification for now/i)
        expect(notificationsWarning).toBeInTheDocument()

        const notificationsTitle = screen.getByText(/your notifications/i)
        expect(notificationsTitle).toBeInTheDocument()
    })

    test('should print "Notification {id} has been marked as read" when NotificationItem is clicked', () => {

        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => { })
        const testingNotifications = [
            {
                id: 25,
                type: 'default',
                value: 'Test notification',
            },
        ];
        const markNotificationAsRead = (id) => {
            console.log(`Notification ${id} has been marked as read`);
        };

        render(<Notifications displayDrawer={true} notifications={testingNotifications} markNotificationAsRead={markNotificationAsRead} />)

        const notificationItem = screen.getByText("Test notification")
        fireEvent.click(notificationItem)

        expect(consoleLogSpy).toHaveBeenCalledWith('Notification 25 has been marked as read')

        consoleLogSpy.mockRestore()
    })

    test('clicking on the menu item calls handleDisplayDrawer', () => {
        const mockHandleDisplayDrawer = jest.fn();
        const mockHandleHideDrawer = jest.fn();
        const notificationsList = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' }];
        render(
            <Notifications
                notifications={notificationsList}
                displayDrawer={false}
                handleDisplayDrawer={mockHandleDisplayDrawer}
                handleHideDrawer={mockHandleHideDrawer}
            />
        );

        // Menu item: "Your notifications"
        const menuItem = screen.getByText('Your notifications');

        fireEvent.click(menuItem);

        expect(mockHandleDisplayDrawer).toHaveBeenCalledTimes(1);
    });

    test('clicking on the close button calls handleHideDrawer', () => {
        const mockHandleDisplayDrawer = jest.fn();
        const mockHandleHideDrawer = jest.fn();
        const notificationsList = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' }];
        render(
            <Notifications
                notifications={notificationsList}
                displayDrawer={true} // drawer must be visible to render the button
                handleDisplayDrawer={mockHandleDisplayDrawer}
                handleHideDrawer={mockHandleHideDrawer}
            />
        );

        // Close button has aria-label "Close"
        const closeButton = screen.getByLabelText('Close');

        fireEvent.click(closeButton);

        expect(mockHandleHideDrawer).toHaveBeenCalledTimes(1);
    });

})