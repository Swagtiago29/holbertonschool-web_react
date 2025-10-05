import React from 'react'
import './Notifications.css'
import CloseButton from '../assets/close-button.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'

function Notifications({ notifications = [], displayDrawer = false }) {
    const ButtonStyle = {
        position: 'absolute',
        right: '10px',
        top: '10px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '0px 2px'
    }
    return (
        <>
            <div>Your notifications</div>
            {displayDrawer && (
                <div className='root-notifications'>
                    {notifications.length === 0 ? (<div>No new notification for now</div>) : (< div className='notification-items'>
                        <button aria-label='Close'
                            style={ButtonStyle}
                            onClick={() => console.log('Close button has been clicked')}>
                            <img src={CloseButton} width={'10px'} height={'10px'} />
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {notifications.map((notif) => (
                                <NotificationItem
                                    key={notif.id}
                                    type={notif.type}
                                    value={notif.value}
                                    html={notif.html} />
                            ))}
                        </ul>
                    </div>)}
                </div >)
            }
        </>
    )
}
export default Notifications