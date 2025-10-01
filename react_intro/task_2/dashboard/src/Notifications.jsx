import React from 'react'
import CloseButton from './assets/close-button.png'
import { getLatestNotification } from './utils'

function Notifications() {
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
        <div className='notification-items'>
            <button aria-label='Close'
                style={ButtonStyle}
                onClick={() => console.log('Close button has been clicked')}>
                <img src={CloseButton} width={'10px'} height={'10px'} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent"
                    dangerouslySetInnerHTML={{ __html: getLatestNotification() }}>
                </li>
            </ul>
        </div>
    )
}
export default Notifications