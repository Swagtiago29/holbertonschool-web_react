import React from 'react'
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

class App extends React.Component {
  static defaultProps = {
  }

  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: this.logOut
    };
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    })
  }

  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      }
    })
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true })
  }

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false })

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
      this.logOut()
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
    const { user, displayDrawer } = this.state

    return (
      <newContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
        <>
          <Notifications
            notifications={notificationsList}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer} />
          <Header />
          {user.isLoggedIn ?
            <BodySectionWithMarginBottom title={'Course list'}>
              <CourseListWithLogging courses={coursesList} />
            </BodySectionWithMarginBottom>
            :
            <BodySectionWithMarginBottom title={'Log in to continue'}>
              <LoginWithLogging logIn={this.logIn} />
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
}

export default App
