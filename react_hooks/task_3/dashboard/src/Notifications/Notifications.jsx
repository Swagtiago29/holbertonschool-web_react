import React from 'react';
import CloseButton from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

function Notifications({
  notifications = [],
  displayDrawer = true,
  handleDisplayDrawer = () => {},
  handleHideDrawer = () => {},
  markNotificationAsRead = () => {},
}) {
  const buttonStyle = {
    position: 'absolute',
    right: '10px',
    top: '10px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    padding: '0px 2px',
  };

  const jumpyStyle =
    notifications.length > 0 && !displayDrawer ? 'animate-bounce' : '';

  return (
    <div className="notifications-container fixed w-[450px] max-[912px]:w-full flex flex-col top-0 right-0 p-2 max-[912px]:p-0">
      <div
        className={`notification-title text-right text-lg ${jumpyStyle} max-[912px]:p-1`}
        onClick={handleDisplayDrawer}
      >
        Your notifications
      </div>

      {displayDrawer && (
        <div
          className="root-notifications relative border-2 border-dashed border-[var(--main-color)]
                      max-[912px]:w-full
                      max-[912px]:h-full
                      max-[912px]:fixed
                      max-[912px]:p-2
                      max-[912px]:bg-white"
        >
          {notifications.length === 0 ? (
            <div className="ml-1">No new notification for now</div>
          ) : (
            <div className="notification-items ml-1 p-1">
              <button
                aria-label="Close"
                style={buttonStyle}
                onClick={handleHideDrawer}
              >
                <img src={CloseButton} width="10px" height="10px" alt="close" />
              </button>
              <p>Here is the list of notifications</p>
              <ul className="ml-5 max-[912px]:ml-0">
                {notifications.map((notif) => (
                  <NotificationItem
                    key={notif.id}
                    id={notif.id}
                    type={notif.type}
                    value={notif.value}
                    html={notif.html}
                    markNotificationAsRead={markNotificationAsRead}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default React.memo(Notifications);
