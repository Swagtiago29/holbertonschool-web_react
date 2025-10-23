import React from 'react'
import Notifications from '../Notifications/Notifications.jsx'
import Login from '../Login/Login.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import CourseList from '../CourseList/CourseList.jsx'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.jsx'
import BodySection from '../BodySection/BodySection.jsx'
import WithLogging from '../HOC/WithLogging.jsx'

// Wrap with the HOC
const LoginWithLogging = WithLogging(Login)
const CourseListWithLogging = WithLogging(CourseList)

class App extends React.Component {
  static defaultProps = {
    isLoggedIn: false,
    logOut: () => { }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out')
      this.props.logOut()
    }
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
        {isLoggedIn ?
          <BodySectionWithMarginBottom title={'Course list'}>
            <CourseListWithLogging courses={coursesList} />
          </BodySectionWithMarginBottom>
          :
          <BodySectionWithMarginBottom title={'Log in to continue'}>
            <LoginWithLogging />
          </BodySectionWithMarginBottom>
        }
        <BodySection title={'News from the School'}>
          <p>Holberton School News goes here</p>
        </BodySection>
        <Footer />
      </>
    )
  }
}

export default App
