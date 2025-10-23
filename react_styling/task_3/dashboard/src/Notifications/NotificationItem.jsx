import React from 'react';

class NotificationItem extends React.PureComponent {
  static defaultProps = {
    type: 'default',
    value: '',
    html: null,
    markAsRead: () => { },
    id: null
  }
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    const style = type === 'urgent' ? 'text-[var(--urgent-notification-item)] ' : 'text-[var(--default-botification-item)]';

    if (html) {
      return (
        <li
          data-notification-type={type}
          className={style}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
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