import React, { useEffect, useState } from 'react'
import Notifications from '../Notifications/Notifications.jsx'
import Login from '../Login/Login.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import CourseList from '../CourseList/CourseList.jsx'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.jsx'
import BodySection from '../BodySection/BodySection.jsx'
import WithLogging from '../HOC/WithLogging.jsx'
import newContext from '../Context/context.js'

// Wrap with the HOC
const LoginWithLogging = WithLogging(Login)
const CourseListWithLogging = WithLogging(CourseList)

function App() {

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

  const [displayDrawer, setDisplayDrawer] = useState(true)
  const [notifications, setNotifications] = useState(notificationsList)
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false
  })


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'h') {
        alert('Logging you out')
        logOut()
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }

  }, [])

  const markNotificationAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`)
    setNotifications((prev) => (prev.filter((notification) => notification.id != id)))
  }

  const logIn = (email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true,
    })
  }

  const logOut = () => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false
    })
  }

  const handleDisplayDrawer = () => {
    setDisplayDrawer(true)
  }

  const handleHideDrawer = () => {
    setDisplayDrawer(false)

  }


  return (
    <newContext.Provider value={{ user: user, logOut: logOut }}>
      <>
        <Notifications
          notifications={notifications}
          displayDrawer={displayDrawer}
          markNotificationAsRead={markNotificationAsRead}
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer} />
        <Header />
        {user.isLoggedIn ?
          <BodySectionWithMarginBottom title={'Course list'}>
            <CourseListWithLogging courses={coursesList} />
          </BodySectionWithMarginBottom>
          :
          <BodySectionWithMarginBottom title={'Log in to continue'}>
            <LoginWithLogging logIn={logIn} />
          </BodySectionWithMarginBottom>
        }
        <BodySection title={'News from the School'}>
          <p className=''>ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores architecto blanditiis fuga doloribus sit illum aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?</p>
        </BodySection>
        <Footer />
      </>
    </newContext.Provider>
  )
}

export default App
