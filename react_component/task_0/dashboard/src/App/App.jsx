import React from 'react'
import './App.css'
import Notifications from '../Notifications/Notifications.jsx'
import Login from '../Login/Login.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import CourseList from '../CourseList/CourseList.jsx'

class App extends React.Component {
  static defaultProps = {
    isLoggedIn: false
  }

  render() {
    const coursesList = [
      {
        id: Math.floor(Math.random() * 10000),
        name: 'ES6',
        credit: '60'
      },
      {
        id: Math.floor(Math.random() * 10000),
        name: 'Webpack',
        credit: '20'
      },
      {
        id: Math.floor(Math.random() * 10000),
        name: 'React',
        credit: '40'
      }
    ]

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
    const { isLoggedIn } = this.props

    return (
      <>
        <Notifications notifications={notificationsList} />
        <Header />
        {isLoggedIn ? <CourseList courses={coursesList} /> : <Login />}
        <Footer />
      </>
    )
  }
}

export default App
