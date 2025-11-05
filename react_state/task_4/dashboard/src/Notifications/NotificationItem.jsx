import React from 'react';

class NotificationItem extends React.PureComponent {
  static defaultProps = {
    type: 'default',
    value: '',
    html: null,
    markNotificationAsRead: () => { },
    id: null
  }
  render() {
    const { type, value, html, markNotificationAsRead, id } = this.props;

    const style = type === 'urgent'
      ? 'text-[var(--urgent-notification-item)] list-disc max-[912px]:list-none max-[912px]:p-2 max-[912px]:border-b-1 border-black'
      : 'text-[var(--default-botification-item)] list-disc max-[912px]:list-none max-[912px]:p-2 max-[912px]:border-b-1 border-black';

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
        onClick={() => markAsRead(id)}>
        {value}
      </li>
    );
  }
}

export default NotificationItem;