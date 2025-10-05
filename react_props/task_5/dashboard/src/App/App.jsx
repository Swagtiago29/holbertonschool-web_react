import './App.css'
import Notifications from '../Notifications/Notifications.jsx'
import Login from '../Login/Login.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import CourseList from '../CourseList/CourseList.jsx'

function App({ isLoggedIn = false }) {

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

  return (
    <>
      <Notifications notifications={notificationsList} />
      <Header />
      {isLoggedIn ? <CourseList courses={coursesList} /> : <Login />}
      <Footer />
    </>
  )
}

export default App
