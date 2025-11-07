import React from 'react';

function NotificationItem({
  type = 'default',
  value = '',
  html = null,
  markNotificationAsRead = () => {},
  id = null,
}) {
  const style =
    type === 'urgent'
      ? 'text-[var(--urgent-notification-item)] list-disc max-[912px]:list-none max-[912px]:p-2 max-[912px]:border-b-1 border-black'
      : 'text-[var(--default-notification-item)] list-disc max-[912px]:list-none max-[912px]:p-2 max-[912px]:border-b-1 border-black';

  if (html) {
    return (
      <li
        data-notification-type={type}
        className={style}
        dangerouslySetInnerHTML={html}
        onClick={() => markNotificationAsRead(id)}
      />
    );
  }

  return (
    <li
      data-notification-type={type}
      className={style}
      onClick={() => markNotificationAsRead(id)}
    >
      {value}
    </li>
  );
}

export default React.memo(NotificationItem);
