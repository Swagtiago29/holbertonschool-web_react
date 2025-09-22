import './App.css'
import Logo from './assets/holberton-logo.jpg'
function App() {

  return (<>
    <div className='App-header'>
      <img src={Logo} alt='holberton-logo' />
      <h1>School dashboard</h1>
    </div>
    <div className='App-body'>
      <p>Login to access the full dashboard</p>
    </div>
    <div className='App-footer'>
      <p>Copyright 2025 - holberton School</p>
    </div>
  </>
  )
}

export default App
