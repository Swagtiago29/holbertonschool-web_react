import './App.css'
import Logo from '../assets/holberton-logo.jpg'
import { getCurrentYear, getFooterCopy } from '../utils/utils.js'
import Notifications from '../Notifications/Notifications.jsx'
function App() {

  return (
    <>
      <div className='root-notifications'>
        <Notifications />
      </div>
      <div className='App-header'>
        <img src={Logo} alt='holberton logo' />
        <h1>School Dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input placeholder='Email' id='email' name='email' />
        <label htmlFor="password">Password:</label>
        <input placeholder='Password' id='password' name='password' />
        <button type='button'>OK</button>
      </div>
      <div className='App-footer'>
        <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  )
}

export default App
