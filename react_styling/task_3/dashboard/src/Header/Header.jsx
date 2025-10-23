import Logo from '../assets/holberton-logo.jpg'

function Header() {
    return (
        <div className='App-header flex items-center flex-row'>
            <img src={Logo} alt='holberton logo' className='w-60' />
            <h1 className='font-bold text-[45px] text-[var(--main-color)]'>School Dashboard</h1>
        </div>
    )
}

export default Header