import './App.css'
import Notifications from '../Notifications/Notifications.jsx'
import Login from '../Login/Login.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'

function App() {


  let notificationsList = [
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
      <Login />
      <Footer />
    </>
  )
}

export default App
