import React from 'react'
import CloseButton from '../assets/close-button.png'
import NotificationItem from './NotificationItem'

class Notifications extends React.Component {
    static defaultProps = {
        notifications: [],
        displayDrawer: true
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.notifications.length !== this.props.notifications.length
    }

    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`)
    }

    render() {
        const buttonStyle = {
            position: 'absolute',
            right: '5px',
            top: '35px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            padding: '0px 2px'
        }

        const { notifications } = this.props
        const { displayDrawer } = this.props

        return (
            <div className="notifications-container fixed mr-2 top-0 right-0 w-[400px]">
                <div className="notification-title text-right text-lg ">Your notifications</div>
                {displayDrawer && (
                    <div className="root-notifications border-2 border-dashed border-[var(--main-color)] ">
                        {notifications.length === 0 ? (
                            <div className='ml-1'>No new notification for now</div>
                        ) : (
                            <div className="notification-items ml-1 p-1">
                                <button
                                    aria-label="Close"
                                    style={buttonStyle}
                                    onClick={() => console.log('Close button has been clicked')}
                                >
                                    <img src={CloseButton} width="10px" height="10px" />
                                </button>
                                <p>Here is the list of notifications</p>
                                <ul className='ml-5'>
                                    {notifications.map((notif) => (
                                        <NotificationItem
                                            key={notif.id}
                                            id={notif.id}
                                            type={notif.type}
                                            value={notif.value}
                                            html={notif.html}
                                            markAsRead={this.markAsRead}
                                        />
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export default Notifications
